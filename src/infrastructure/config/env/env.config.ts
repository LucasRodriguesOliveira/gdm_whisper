import { ConfigModuleOptions } from '@nestjs/config';
import { envSchema } from './env.schema';

export const envConfig: ConfigModuleOptions = {
  load: [],
  validationSchema: envSchema,
  isGlobal: true,
};
