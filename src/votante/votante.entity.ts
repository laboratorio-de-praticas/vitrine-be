import { Evento } from "src/evento/evento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Votante{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255})
    nome: String

    @Column()
    data_alteracao: Date

    @Column()
    data_criacao: Date

    @Column()
    situacao_votante: String

    @ManyToOne(() => Evento, (evento) => evento.votantes)
    evento: Evento
}
