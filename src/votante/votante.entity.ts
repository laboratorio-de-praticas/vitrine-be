import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Alunos } from '../aluno/aluno.entity';
import { Eventos } from '../evento/evento.entity';

@Entity('votante')
export class Votantes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  id_aluno: number;

  @Column({ nullable: true })
  id_visitante: number;

  @Column({ nullable: true })
  id_evento: number;

  @Column()
  situacao_votante: string;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;

  @UpdateDateColumn({ name: 'data_alteracao' })
  dataAlteracao: Date;

  @ManyToOne(() => Alunos, aluno => aluno.votantes)
  @JoinColumn({ name: 'id_aluno' })
  aluno: Alunos;

  @ManyToOne(() => Eventos, evento => evento.votantes)
  @JoinColumn({ name: 'id_evento' })
  evento: Eventos;
}