import { Candidato } from "src/candidato/candidato.entity";
import { Participantes } from "src/participante/participante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoEvento } from "./tipo.enum";
import { StatusEvento } from "./status.enum";
import { Votos } from "src/votos/voto.entity";

@Entity()
export class Eventos{
    @PrimaryGeneratedColumn()
    id_evento: number

    @Column({length: 255})
    nome: String

    @Column()
    tipo_evento: TipoEvento

    @Column()
    descricao: String

    @Column()
    status_evento: StatusEvento
    
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
    
    @OneToMany(() => Votos, (votos) => votos.evento)
    votos: Votos[]
}
