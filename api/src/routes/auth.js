import express from 'express';
import { User } from '../class/User';
import fetch from 'node-fetch';
import { discordApplicationSecret } from '../class/DiscordApplicationSecret';
import { createSearchParams } from '../functions/makeFormData';
import { Links } from '../enum/Links';

const authRouter = express.Router();

authRouter
  .get('/', (req, res, next) => {
    if (req.query.return) res.cookie('return', req.query.return)
    res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${discordApplicationSecret.id}&redirect_uri=${Links.redirect}&response_type=code&scope=identify`)
  })
  .get('/redirect', async (req, res, next) => {
    const code = req.query?.code;

    if (!code) next(new Error('A code was not provided'));

    const authentication =
      await fetch('https://discordapp.com/api/v7/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'LS20 Open Source Project (https://github.com/7coil/ls20, v1)'
        },
        body: createSearchParams({
          client_id: discordApplicationSecret.id,
          client_secret: discordApplicationSecret.clientSecret,
          grant_type: 'authorization_code',
          code,
          redirect_uri: Links.redirect,
          scope: 'identify',
        })
      })
        .then(result => result.json())
        .catch((err) => {
          next(err);
        })
    
    if (authentication.error) return next(new Error('Failed to retrieve authentication code from Discord, because: ' + authentication.error_description))

    const currentUser =
      await fetch('https://discordapp.com/api/v7/users/@me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authentication.access_token}`,
          'User-Agent': 'LS20 Open Source Project (https://github.com/7coil/ls20, v1)',
        }
      })
        .then(result => result.json())
        .catch((err) => {
          next(err);
        })

    if (typeof currentUser.code !== 'undefined') return next(new Error('Failed to retrieve user information from Discord'));

    const user = new User({
      id: currentUser.id,
      username: currentUser.username,
      discriminator: currentUser.discriminator,
    })

    user.write()
      .then(() => {
        let link = req.cookies.return || 'http://127.0.0.1:1234';

        link += link.includes('?') ? '&' : '?'
        link += `token=${user.generateToken()}`

        res.redirect(link)
      })
      .catch((err) => {
        next(err);
      })
  })
  .get('/me', async (req, res, next) => {
    User.fetchFromToken(req.headers.authorization)
      .then((user) => {
        if (user) {
          res.json(user.toObject())
        } else {
          res.json(null);
        }
      })
      .catch((err) => {
        next(err);
      })
  })

export {
  authRouter
}
