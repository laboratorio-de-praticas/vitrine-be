import { Aluno } from "src/aluno/aluno.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Projeto{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:255})
    titulo: String

    @Column()
    descricao: String
        
    @Column()
    data_alteracao: Date
    
    @Column()
    data_criacao: Date

    @OneToMany(() => Aluno, (aluno) => aluno.projeto)
    alunos: Aluno[]
}