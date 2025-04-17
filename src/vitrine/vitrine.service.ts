import { StatusEvento } from 'src/evento/status.enum';
import { TipoEvento } from 'src/evento/tipo.enum';
import { Inject, Injectable} from '@nestjs/common';
import { Eventos } from '../evento/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VitrineService {
    constructor(
        @Inject('EVENTO_REPOSITORY')
        private eventoRepository: Repository<Eventos>
      ) {}
    
    async findTv(): Promise<Eventos[]>{
      const queryBuilder = this.eventoRepository.createQueryBuilder("evento");
      queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO });
      queryBuilder.andWhere("evento.status_evento = :status", { status: StatusEvento.ATIVO });
      
      queryBuilder.leftJoinAndSelect("evento.representantes", "representantes");
      queryBuilder.leftJoinAndSelect("representantes.aluno", "aluno");
      queryBuilder.leftJoinAndSelect("aluno.usuario", "usuario")
      return await queryBuilder.getMany();
    }

    async findEventosExternos(): Promise<Eventos[]> {
      const queryBuilder = this.eventoRepository.createQueryBuilder('evento');

      queryBuilder
        .leftJoinAndSelect('evento.projetosEventos', 'projetosEventos')
        .where('evento.tipo_evento = :tipo', { tipo: TipoEvento.EXTERNO })
        .andWhere('evento.data_inicio >= NOW()')
        .orderBy(`
          CASE 
            WHEN evento.status_evento = :ativo THEN 0
            ELSE 1
          END
        `, 'ASC')
        .addOrderBy('evento.data_inicio', 'ASC') 
        .setParameter('ativo', StatusEvento.ATIVO);
      
  
  
      return await queryBuilder.getMany();
    }
    
}
