import express from 'express';
import { Bot } from '../class/Bot';
import { User } from '../class/User';

const botRouter = express.Router();

botRouter
  .get('/', (req, res, next) => {
    Bot.fetchAll()
      .then(bots => res.json(bots))
      .catch(err => next(err))
  })
  .post('/', User.requireUserMiddleware, async (req, res, next) => {
    try {
      const bot = new Bot(req.body)
      const errors = await bot.validate()
      if (errors.length !== 0) return res.json(errors);

      await bot.write();
      res.json(bot.toObject())
    } catch(e) {
      next(e);
    }
  })

export {
  botRouter
}
