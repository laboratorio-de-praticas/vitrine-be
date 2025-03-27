import { Candidato } from "src/candidato/candidato.entity";
import { Participantes } from "src/participante/participante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoEvento } from "./tipo.enum";
import { StatusEvento } from "./status.enum";

@Entity()
export class Eventos{
    @PrimaryGeneratedColumn()
    id_evento: number

    @Column({length: 255})
    nomeEvento: String

    @Column()
    tipoEvento: TipoEvento

    @Column()
    descricaoEvento: Text

    @Column()
    statusEvento: StatusEvento
    
    @Column()
    curso_semestre: String
    
    @Column()
    data_alteracao: Date

    @Column()
    data_criacao: Date

    @Column()
    data_inicio: Date

    @Column()
    data_fim: Date

    @OneToMany(() => Candidato, (candidato) => candidato.evento)
    candidatos: Candidato[]

    @OneToMany(() => Participantes, (participantes) => participantes.evento)
    participantes: Participantes[]
}
