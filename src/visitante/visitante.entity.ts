import { Participantes } from "src/participante/participante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Visitantes{
    @PrimaryGeneratedColumn()
    id_visitante: number

    @Column({length: 255})
    nome_social: String
    
    @Column()
    data_nascimento: Date
    
    @Column({length: 12})
    celular: String

    @Column({length: 4})
    chave_acesso: String

    @OneToMany(() => Participantes, (participantes) => participantes.visitantes)
    participante :Participantes[]
    
}