import { DataSource } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        database: 'teste2',
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: 'admin',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ]
      });
      return dataSource.initialize();
    },
  },
];
