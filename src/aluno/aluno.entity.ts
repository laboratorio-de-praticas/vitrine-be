import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Usuarios } from '../usuario/usuario.entity';
import { Candidatos } from '../candidato/candidato.entity';
import { Votantes } from '../votante/votante.entity';

@Entity('alunos')
export class Alunos {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column()
  foto_url: string;

  @Column({ type: 'timestamp' })
  data_ingresso: Date;

  @Column()
  curso_semestre: string;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;

  @UpdateDateColumn({ name: 'data_alteracao' })
  dataAlteracao: Date;

  @ManyToOne(() => Usuarios, usuario => usuario.alunos)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuarios;

  @OneToMany(() => Candidatos, candidato => candidato.aluno)
  candidatos: Candidatos[];

  @OneToMany(() => Votantes, votante => votante.aluno)
  votantes: Votantes[];
}