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
        private eventoRepository: Repository<Eventos>,
        @Inject("ALUNO_REPOSITORY")
        private alunoRepository: Repository<Alunos>
      ) {}
    
    // Endpoint será descontinuado
    async findRepresentantes(usuario: Usuarios): Promise<Eventos>{
      const curso_semestre = "DSM1";
      const queryBuilder = this.eventoRepository.createQueryBuilder("evento")
      queryBuilder.andWhere("evento.curso_semestre = :curso_semestre", { curso_semestre: curso_semestre })
      queryBuilder.andWhere("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
      queryBuilder.andWhere("evento.status_evento = :status", { status: StatusEvento.ATIVO })
      queryBuilder.leftJoinAndSelect("evento.participantes", "participantes");
      queryBuilder.leftJoinAndSelect("participantes.aluno", "aluno");
      const evento = await queryBuilder.getOne()

    if (!evento) {
      throw new NotFoundException(
        'Não foi encontrado nenhum evento ativo interno dessa sala',
      );
    }

    return evento;
  }
  async findEventoAtivo(): Promise<Eventos[]> {
    const SALA_DO_ALUNO = 'nome_da_sala';
  
    const eventos = await this.eventoRepository
      .createQueryBuilder("evento")
      .leftJoinAndSelect("evento.candidatos", "candidato")
      .where("evento.tipo_evento = :tipo_evento", { tipo_evento: TipoEvento.INTERNO })
      .andWhere("evento.status = :status", { status: StatusEvento.ATIVO })
      .andWhere("evento.curso_semestre = :sala", { sala: SALA_DO_ALUNO })
      .getMany();
      return eventos;
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
