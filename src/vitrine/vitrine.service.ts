import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Aluno } from 'src/aluno/aluno.entity';
import { Evento } from 'src/evento/evento.entity';
import { StatusEvento } from 'src/evento/status.enum';
import { TipoEvento } from 'src/evento/tipo.enum';
import { Usuario } from 'src/usuario/usuario.entity';
import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Alunos } from '../aluno/aluno.entity';
import { Eventos } from '../evento/evento.entity';
import { StatusEvento, TipoEvento } from '../enums';
import { Usuarios } from '../usuario/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VitrineService {
    constructor(
        @Inject('EVENTO_REPOSITORY')
        private eventoRepository: Repository<Evento>,
        @Inject("ALUNO_REPOSITORY")
        private alunoRepository: Repository<Alunos>
      ) {}
    
    async findRepresentantes(aluno: Aluno): Promise<Evento>{
        const queryBuilder = this.eventoRepository.createQueryBuilder("evento")
        queryBuilder.andWhere("evento.curso_semestre = :curso_semestre", { curso_semestre: aluno.curso_semestre })
        queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
        queryBuilder.andWhere("evento.status = :status", { status: StatusEvento.ATIVO })

        const evento = await queryBuilder.getOne()

      ) 

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

    async findTv(usuario: Usuario): Promise<Evento[]>{
      const queryBuilder = this.eventoRepository.createQueryBuilder("evento")
      queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
      queryBuilder.andWhere("evento.status = :status", { status: StatusEvento.ATIVO })
      return await queryBuilder.getMany();
    }

    async findEventoAtivo(): Promise<{ urlFoto: string; candidatos: string[]; tituloEvento: string }[]> {
      const SALA_DO_ALUNO = 'nome_da_sala';
    
      const eventos = await this.eventoRepository
        .createQueryBuilder("evento")
        .leftJoinAndSelect("evento.candidatos", "candidato")
        .where("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
        .andWhere("evento.status = :status", { status: StatusEvento.ATIVO })
        .andWhere("evento.curso_semestre = :sala", { sala: SALA_DO_ALUNO })
        .select([
          "evento.urlFoto",  
          "evento.nome",
          "candidato.nome" 
        ])
        .getMany();
    
        return eventos.map(evento => ({
          urlFoto: String(evento.urlFoto),
          candidatos: evento.candidatos.map(c => String(c.nome)), 
          tituloEvento: String(evento.nome)
        }));                
    }    
}
    async findTv(usuario: Usuarios): Promise<Eventos[]>{
      const queryBuilder = this.eventoRepository.createQueryBuilder("evento");
      queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO });
      queryBuilder.andWhere("evento.status_evento = :status", { status: StatusEvento.ATIVO });
      
      queryBuilder.leftJoinAndSelect("evento.participantes", "participantes");
      queryBuilder.leftJoinAndSelect("participantes.aluno", "aluno");
      return await queryBuilder.getMany();
    }
}
