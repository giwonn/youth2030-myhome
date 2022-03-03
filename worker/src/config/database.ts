import 'dotenv/config';
import type { ConnectionOptions } from 'typeorm';

export default {
  dbConnection: <ConnectionOptions> {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT!),
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE,
    entities: [
      'entity/*.ts',
    ],
  },
};