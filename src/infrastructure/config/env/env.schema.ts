import * as Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  RMQ_URL: Joi.string().required(),
  RMQ_QUEUE: Joi.string().required(),
});
