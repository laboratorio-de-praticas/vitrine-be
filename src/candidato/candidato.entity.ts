import { Evento } from "src/evento/evento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Candidato{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255})
    nome: String

    @Column()
    data_alteracao: Date

    @Column()
    data_criacao: Date

    @Column({length: 255})
    situacao_candidato: String

    @Column()
    qrCode: String

    @ManyToOne(() => Evento, (evento) => evento.candidatos)
    evento: Evento
}
