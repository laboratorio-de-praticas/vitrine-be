import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Alunos } from 'src/aluno/aluno.entity';
import { Eventos } from 'src/evento/evento.entity';
import { StatusEvento } from 'src/evento/status.enum';
import { TipoEvento } from 'src/evento/tipo.enum';
import { Usuarios } from 'src/usuario/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VitrineService {
    constructor(
        @Inject('EVENTO_REPOSITORY')
        private eventoRepository: Repository<Eventos>,
        @Inject("ALUNO_REPOSITORY")
        private alunoRepository: Repository<Alunos>
      ) {}
    
    async findRepresentantes(usuario: Usuarios): Promise<Eventos>{

      const aluno = await this.alunoRepository.findOne({
        where: {
          usuario: { id: usuario.id }
        },
      })

      if(aluno == null){
        throw new UnauthorizedException()
      }

      
      const queryBuilder = this.eventoRepository.createQueryBuilder("evento")
      queryBuilder.andWhere("evento.curso_semestre = :curso_semestre", { curso_semestre: aluno.curso_semestre })
      queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
      queryBuilder.andWhere("evento.status_evento = :status", { status: StatusEvento.ATIVO })

      const evento = await queryBuilder.getOne()

        if (!evento) {
          throw new NotFoundException('Não foi encontrado nenhum evento ativo interno dessa sala')
        }

        return evento;
    }

    async findTv(usuario: Usuarios): Promise<Eventos[]>{
      const queryBuilder = this.eventoRepository.createQueryBuilder("evento")
      queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
      queryBuilder.andWhere("evento.status_evento = :status", { status: StatusEvento.ATIVO })
      return await queryBuilder.getMany();
    }

}
