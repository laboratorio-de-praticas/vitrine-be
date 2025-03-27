import { Candidato } from "src/candidato/candidato.entity";
import { Votante } from "src/votante/votante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoEvento } from "./tipo.enum";
import { StatusEvento } from "./status.enum";

@Entity()
export class Evento{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255})
    nome: String

    @Column()
    tipo_evento: TipoEvento

    @Column()
    data_inicio: Date

    @Column()
    data_fim: Date

    @Column()
    descricao: String

    @Column()
    status: StatusEvento
    
    @Column()
    data_alteracao: Date

    @Column()
    data_criacao: Date

    @Column()
    curso_semestre: String

    @Column() 
    urlFoto: string;

    @OneToMany(() => Candidato, (candidato) => candidato.evento)
    candidatos: Candidato[]

    @OneToMany(() => Votante, (votante) => votante.evento)
    votantes: Votante[]
}
