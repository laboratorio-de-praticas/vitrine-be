import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Alunos } from '../aluno/aluno.entity';
import { Eventos } from '../evento/evento.entity';

@Entity('candidato')
export class Candidatos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  id_aluno: number;

  @Column({ nullable: true })
  id_projeto: number;

  @Column({ nullable: true })
  id_evento: number;

  @Column()
  situacao_candidato: string;

  @Column({ type: 'bytea' })
  qrcode: Buffer;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;

  @UpdateDateColumn({ name: 'data_alteracao' })
  dataAlteracao: Date;

  @ManyToOne(() => Alunos, aluno => aluno.candidatos)
  @JoinColumn({ name: 'id_aluno' })
  aluno: Alunos;

  @ManyToOne(() => Eventos, evento => evento.candidatos)
  @JoinColumn({ name: 'id_evento' })
  evento: Eventos;

}