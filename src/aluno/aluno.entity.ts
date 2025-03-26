import { Projeto } from "src/projeto/projeto.entity";
import { Usuario } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aluno{
    @PrimaryGeneratedColumn()
    id: Number

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


    @OneToOne(() => Usuario)
    @JoinColumn()
    usuario: Usuario

    @ManyToOne(() => Projeto, (projeto) => projeto.alunos)
    projeto: Projeto
}