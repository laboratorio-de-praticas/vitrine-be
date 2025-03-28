import { DataSource } from 'typeorm';
import { Candidatos } from './candidato.entity';

export const candidatoProviders = [
  {
    provide: 'CANDIDATO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Candidatos),
    inject: ['DATA_SOURCE'],
  },
];