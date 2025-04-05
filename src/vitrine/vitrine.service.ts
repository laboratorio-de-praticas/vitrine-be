import { StatusEvento } from 'src/evento/status.enum';
import { TipoEvento } from 'src/evento/tipo.enum';
import { Usuarios } from 'src/usuario/usuario.entity';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Alunos } from '../aluno/aluno.entity';
import { Eventos } from '../evento/evento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VitrineService {
    constructor(
        @Inject('EVENTO_REPOSITORY')
        private eventoRepository: Repository<Eventos>
      ) {}
    
    async findTv(usuario: Usuarios): Promise<Eventos[]>{
      const queryBuilder = this.eventoRepository.createQueryBuilder("evento");
      queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO });
      queryBuilder.andWhere("evento.status_evento = :status", { status: StatusEvento.ATIVO });
      
      queryBuilder.leftJoinAndSelect("evento.participantes", "participantes");
      queryBuilder.leftJoinAndSelect("participantes.aluno", "aluno");
      return await queryBuilder.getMany();
    }
}
