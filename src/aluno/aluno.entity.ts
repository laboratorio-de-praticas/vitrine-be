import { Candidato } from "src/candidato/candidato.entity";
import { Participantes } from "src/participante/participante.entity";
import { Projetos } from "src/projeto/projeto.entity";
import { Usuarios } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Alunos{
    @PrimaryGeneratedColumn()
    id_aluno: Number

    @Column()
    foto_url: String

    @Column()
    data_criacao: Date

    @Column()
    data_alteracao: Date

    @Column()
    data_ingresso: Date
    
    @Column()
    curso_semestre: String


    @OneToOne(() => Usuarios)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuarios

    @ManyToOne(() => Projetos, (projeto) => projeto.alunos)
    @JoinColumn({ name: 'id_projeto' }) 
    projeto: Projetos
    
    @OneToMany(() => Candidato, (candidato) => candidato.aluno)
    candidatos: Candidato[]

    @OneToMany(() => Participantes, (participantes) => participantes.aluno)
    participantes: Participantes[]

}