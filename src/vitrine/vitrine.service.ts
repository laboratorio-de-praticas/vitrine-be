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

    async findEventoAtivo(): Promise<{ urlFoto: string; candidatos: string[]; tituloEvento: string }[]> {
      const SALA_DO_ALUNO = 'nome_da_sala'; //Puxar a sala e curso do usuário logado
    
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
