import { DataSource } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        database: 'teste',
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nestjs_db',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
