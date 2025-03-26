import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Aluno } from 'src/aluno/aluno.entity';
import { Evento } from 'src/evento/evento.entity';
import { StatusEvento } from 'src/evento/status.enum';
import { TipoEvento } from 'src/evento/tipo.enum';
import { Usuario } from 'src/usuario/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VitrineService {
    constructor(
        @Inject('EVENTO_REPOSITORY')
        private eventoRepository: Repository<Evento>,
      ) {}
    
    async findRepresentantes(aluno: Aluno): Promise<Evento>{
        const queryBuilder = this.eventoRepository.createQueryBuilder("evento")
        queryBuilder.andWhere("evento.curso_semestre = :curso_semestre", { curso_semestre: aluno.curso_semestre })
        queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
        queryBuilder.andWhere("evento.status = :status", { status: StatusEvento.ATIVO })

        const evento = await queryBuilder.getOne()

        if (!evento) {
          throw new NotFoundException('Não foi encontrado nenhum evento ativo interno dessa sala')
        }

        return evento;
    }

    async findTv(usuario: Usuario): Promise<Evento[]>{
      const queryBuilder = this.eventoRepository.createQueryBuilder("evento")
      queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
      queryBuilder.andWhere("evento.status = :status", { status: StatusEvento.ATIVO })
      return await queryBuilder.getMany();
    }

}
