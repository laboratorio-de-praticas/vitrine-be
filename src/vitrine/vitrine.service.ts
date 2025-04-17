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
        .where('evento.tipo_evento = :tipo', { tipo: TipoEvento.EXTERNO })
        .andWhere('evento.status_evento = :status', {
          status: StatusEvento.ATIVO,
        })
        .leftJoinAndSelect('evento.projetosEventos', 'projetosEventos')
        .orderBy('evento.data_inicio', 'DESC');
  
  
      return await queryBuilder.getMany();
    }
    
}
