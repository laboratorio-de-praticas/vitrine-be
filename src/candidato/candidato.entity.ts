import { Alunos } from "src/aluno/aluno.entity";
import { Eventos } from "src/evento/evento.entity";
import { Projetos } from "src/projeto/projeto.entity";
import { Votos } from "src/votos/voto.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SituacaoCandidato } from "./candidato.enum";

@Entity()
export class Candidato{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data_alteracao: Date

    @Column()
    data_criacao: Date

    @Column({length: 255})
    situacao_candidato: SituacaoCandidato

    @Column({length: 255})
    qrcode: String

    @ManyToOne(() => Eventos, (evento) => evento.candidatos)
    @JoinColumn({ name: 'id_evento' }) 
    evento: Eventos

    @ManyToOne(() => Alunos, (alunos) => alunos.candidatos)
    @JoinColumn({ name: 'id_aluno' }) 
    aluno: Alunos

    @ManyToOne(() => Projetos, (projetos) => projetos.candidatos)
    @JoinColumn({ name: 'id_projeto' }) 
    projeto: Projetos

    @OneToMany(() => Votos, (votos) => votos.candidato)
    votos: Votos[]
    
}
