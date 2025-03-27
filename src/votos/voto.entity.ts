import { Alunos } from "src/aluno/aluno.entity";
import { Candidato } from "src/candidato/candidato.entity";
import { Eventos } from "src/evento/evento.entity";
import { Participantes } from "src/participante/participante.entity";
import { Visitantes } from "src/visitante/visitante.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Votos{
    @PrimaryGeneratedColumn()
    id_voto: number

    @OneToOne(() => Eventos, (evento) => evento.participantes)
    evento: Eventos

    @ManyToOne(() => Participantes, (participante) => participante.votos)
    participante: Participantes

    @ManyToOne(() => Candidato, (candidato) => candidato.votos)
    candidato: Candidato


}
