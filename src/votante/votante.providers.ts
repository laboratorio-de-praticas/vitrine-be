import { DataSource } from 'typeorm';
import { Votantes } from './votante.entity';

export const votanteProviders = [
  {
    provide: 'VOTANTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Votantes),
    inject: ['DATA_SOURCE'],
  },
];