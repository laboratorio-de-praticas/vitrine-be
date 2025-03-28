import { DataSource } from 'typeorm';
import { Candidatos } from '../candidato/candidato.entity';
import { Alunos } from '../aluno/aluno.entity';
import { Usuarios } from '../usuario/usuario.entity';
import { Eventos } from '../evento/evento.entity';
import { Votantes } from '../votante/votante.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nestjs_db',
        entities: [
          Candidatos,
          Alunos,
          Usuarios,
          Eventos,
          Votantes,
        ],
        synchronize: true, // Be careful with this in production
      });

      return dataSource.initialize();
    },
  },
];