import { Alunos } from "src/aluno/aluno.entity";
import { Eventos } from "src/evento/evento.entity";
import { Visitantes } from "src/visitante/visitante.entity";
import { Votos } from "src/votos/voto.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Participantes{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255})
    nome_social: String

    @Column()
    data_alteracao: Date

    @Column()
    data_criacao: Date

    @Column()
    situacao_votante: String

    @Column()
    avaliador: boolean

    @ManyToOne(() => Eventos, (evento) => evento.participantes)
    @JoinColumn({ name: 'id_evento' }) 
    evento: Eventos

    @ManyToOne(() => Alunos, (alunos) => alunos.candidatos)
    @JoinColumn({ name: 'id_aluno' }) 
    aluno: Alunos

    @ManyToOne(() => Visitantes, (visitantes) => visitantes.participante)
    @JoinColumn({ name: 'id_visitante' }) 
    visitantes: Visitantes

    @OneToMany(() => Votos, (votos) => votos.participante)
    votos: Votos[]
}
