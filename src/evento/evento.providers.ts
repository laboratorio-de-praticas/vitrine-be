import { DataSource } from 'typeorm';
import { Eventos } from './evento.entity';
import { ProjetosEventos } from '../projetos-eventos/projetos-eventos.entity';

export const eventoProviders = [
  {
    provide: 'EVENTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Eventos),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'PROJETOS_EVENTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProjetosEventos),
    inject: ['DATA_SOURCE'],
  },
];
