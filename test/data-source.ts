import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export const testDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5440,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'teste2',
  entities: [__dirname + '/../src/**/*.entity.{ts,js}'],
  synchronize: true,
  dropSchema: true,
});
