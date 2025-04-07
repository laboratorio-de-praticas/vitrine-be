import { DataSource } from 'typeorm';
import { Alunos } from './aluno.entity';

export const alunoProviders = [
  {
    provide: 'ALUNO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Alunos),
    inject: ['DATA_SOURCE'],
  },
];
