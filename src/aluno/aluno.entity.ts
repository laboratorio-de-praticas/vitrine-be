import { Representantes } from "src/representante/representante.entity";
import { Usuarios } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Alunos')
export class Alunos{
    @PrimaryGeneratedColumn()
    id_aluno: Number

  @Column()
  foto_url: String;

  @Column()
  data_criacao: Date;

  @Column()
  data_alteracao: Date;

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
