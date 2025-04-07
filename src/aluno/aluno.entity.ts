import { Candidato } from "src/candidato/candidato.entity";
import { Participantes } from "src/participante/participante.entity";
import { Usuarios } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alunos {
  @PrimaryGeneratedColumn()
  id_aluno: Number;

  @Column()
  foto_url: String;

  @Column()
  data_criacao: Date;

  @Column()
  data_alteracao: Date;

  @Column()
  data_ingresso: Date;

  @Column()
  curso_semestre: String;

    @OneToOne(() => Usuarios)
    @JoinColumn({ name: 'fk_id_usuario' })
    usuario: Usuarios

    @OneToMany(() => Candidato, (candidato) => candidato.aluno)
    candidatos: Candidato[]

  @OneToMany(() => Candidato, (candidato) => candidato.aluno)
  candidatos: Candidato[];

  @OneToMany(() => Participantes, (participantes) => participantes.aluno)
  participantes: Participantes[];
}
