import { DataSource } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ]
      });
      return dataSource.initialize();
    },
  },
];
