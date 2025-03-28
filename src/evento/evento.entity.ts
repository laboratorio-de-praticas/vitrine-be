import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { StatusEvento, TipoEvento } from '../enums';
import { Candidatos } from '../candidato/candidato.entity';
import { Votantes } from '../votante/votante.entity';

@Entity('eventos')
export class Eventos {
  @PrimaryGeneratedColumn({ name: 'id_evento' })
  id: number;

  @Column({ name: 'nomeEvento' })
  nome: string;

  @Column({
    name: 'tipoEvento',
    type: 'enum',
    enum: TipoEvento
  })
  tipoEvento: TipoEvento;

  @Column({ type: 'timestamp', name: 'data_inicio' })
  dataInicio: Date;

  @Column({ type: 'timestamp', name: 'data_fim' })
  dataFim: Date;

  @Column({ name: 'descricaoEvento' })
  descricao: string;

  @Column({
    name: 'statusEvento',
    type: 'enum',
    enum: StatusEvento
  })
  statusEvento: StatusEvento;

  @Column({ nullable: true })
  curso_semestre: string;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;

  @UpdateDateColumn({ name: 'data_alteracao' })
  dataAlteracao: Date;

  @OneToMany(() => Candidatos, candidato => candidato.evento)
  candidatos: Candidatos[];

  @OneToMany(() => Votantes, votante => votante.evento)
  votantes: Votantes[];
}