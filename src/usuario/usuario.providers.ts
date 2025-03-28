import { DataSource } from 'typeorm';
import { Usuarios } from './usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuarios),
    inject: ['DATA_SOURCE'],
  },
];