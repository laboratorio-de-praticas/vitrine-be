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
      
      queryBuilder.leftJoinAndSelect("evento.candidatos", "candidato");
      queryBuilder.leftJoinAndSelect("candidato.aluno", "aluno");
      return await queryBuilder.getMany();
    }
}
