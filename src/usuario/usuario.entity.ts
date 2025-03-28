import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Alunos } from '../aluno/aluno.entity';
import { StatusUsuario, TipoUsuario } from '../enums';

@Entity('usuarios')
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column({ name: 'email_institucional' })
  emailInstitucional: string;

  @Column({
    name: 'tipoUsuario',
    type: 'enum',
    enum: TipoUsuario,
  })
  tipoUsuario: TipoUsuario;

  @Column({
    name: 'status_usuario',
    type: 'enum',
    enum: StatusUsuario,
    default: StatusUsuario.ATIVO
  })
  statusUsuario: StatusUsuario;

  @CreateDateColumn({ name: 'data_criacao' })
  dataCriacao: Date;

  @UpdateDateColumn({ name: 'data_alteracao' })
  dataAlteracao: Date;

  @OneToMany(() => Alunos, aluno => aluno.usuario)
  alunos: Alunos[];
}