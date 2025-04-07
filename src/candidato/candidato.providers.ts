import { DataSource } from 'typeorm';
import { Candidato } from './candidato.entity';

export const candidatoProviders = [
  {
    provide: 'CANDIDATO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Candidato),
    inject: ['DATA_SOURCE'],
  },
];
