import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dbPort = parseInt(process.env.DB_PORT as string, 10);
      const validDbPort = isNaN(dbPort) ? 5432 : dbPort;

      const dataSource = new DataSource({
        type: 'postgres',
<<<<<<< HEAD
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ]
=======
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'teste2',
        synchronize: true,
        port: validDbPort,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'admin',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
>>>>>>> main
      });
      return dataSource.initialize();
    },
  },
];
