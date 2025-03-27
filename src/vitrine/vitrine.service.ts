import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Aluno } from 'src/aluno/aluno.entity';
import { Candidato } from 'src/candidato/candidato.entity';
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

  async findRepresentantes(aluno: Aluno): Promise<Evento> {
    const queryBuilder = this.eventoRepository.createQueryBuilder('evento');
    queryBuilder.andWhere('evento.curso_semestre = :curso_semestre', {
      curso_semestre: aluno.curso_semestre,
    });
    queryBuilder.andWhere('evento.tipo_evento = :tipo_evento', {
      tipo_evento: TipoEvento.INTERNO,
    });
    queryBuilder.andWhere('evento.status = :status', {
      status: StatusEvento.ATIVO,
    });

    const evento = await queryBuilder.getOne();

    if (!evento) {
      throw new NotFoundException(
        'Não foi encontrado nenhum evento ativo interno dessa sala',
      );
    }

    return evento;
  }

  async findTv(): Promise<any[]> {
    const eventos = await this.eventoRepository.find({
      where: { tipo_evento: TipoEvento.INTERNO, status: StatusEvento.ATIVO },
      relations: ['candidatos'],
    });

    return eventos.map((evento) => ({
      id: evento.id,
      nome: evento.nome,
      data: evento.data_alteracao,
      candidatos: evento.candidatos.map((candidato) => ({
        id: candidato.id,
        nome: candidato.nome,
        foto: candidato.foto,
        qrCode: candidato.qrCode,
      })),
    }));
  }
}
