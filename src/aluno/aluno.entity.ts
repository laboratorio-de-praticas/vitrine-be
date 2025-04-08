import { Representantes } from "src/representante/representante.entity";
import { Usuarios } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

<<<<<<< Updated upstream
@Entity()
export class Alunos {
  @PrimaryGeneratedColumn()
  id_aluno: Number;
=======
@Entity('Alunos')
export class Alunos{
    @PrimaryGeneratedColumn()
    id_aluno: Number
>>>>>>> Stashed changes

  @Column()
  foto_url: String;

  @Column()
  data_criacao: Date;

  @Column()
  data_alteracao: Date;

<<<<<<< Updated upstream
  @Column()
  data_ingresso: Date;

  @Column()
  curso_semestre: String;

  @OneToOne(() => Usuarios)
  @JoinColumn({ name: 'fk_id_usuario' })
  usuario: Usuarios

  @OneToMany(() => Candidato, (candidato) => candidato.aluno)
  candidatos: Candidato[]


  @OneToMany(() => Participantes, (participantes) => participantes.aluno)
  participantes: Participantes[];
}
=======
    @Column()
    data_matricula: Date
    
    @Column()
    curso_semestre: String

    @OneToOne(() => Usuarios)
    @JoinColumn({ name: 'fk_id_usuario' })
    usuario: Usuarios

    @OneToMany(() => Representantes, (representante) => representante.evento)
    representantes: Representantes[]
}
>>>>>>> Stashed changes
