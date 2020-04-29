import express from 'express';
import { Bot } from '../class/Bot';

const botRouter = express.Router();

botRouter
  .get('/', (req, res, next) => {
    Bot.fetchAll()
      .then(bots => res.json(bots))
      .catch(err => next(err))
  })
  .post('/', async (req, res, next) => {
    const bot = new Bot(req.body)

    try {
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
