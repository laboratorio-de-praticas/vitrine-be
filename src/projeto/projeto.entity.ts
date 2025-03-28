import { Alunos } from "src/aluno/aluno.entity";
import { Candidato } from "src/candidato/candidato.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Projetos{
    @PrimaryGeneratedColumn()
    id_projeto: number

    @Column({length:255})
    titulo: String

    @Column({length: 200})
    descricao: String
        
    @Column()
    data_alteracao: Date
    
    @Column()
    data_criacao: Date

    @OneToMany(() => Alunos, (aluno) => aluno.projeto)
    @JoinColumn({ name: 'id_aluno' }) 
    alunos: Alunos[]

    @OneToMany(() => Candidato, (candidato) => candidato.projeto)
    candidatos: Candidato[]
}