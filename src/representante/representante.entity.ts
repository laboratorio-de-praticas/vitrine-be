import { Alunos } from "src/aluno/aluno.entity";
import { Eventos } from "src/evento/evento.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RepresentanteSituacao } from "./representante.enum";

@Entity('Representante')
export class Representantes{
    @PrimaryGeneratedColumn()
    id_representante: number

    @Column()
    data_alteracao: Date

    @Column()
    data_criacao: Date

    @Column({length: 255, name: "representantesituacao"})
    representante_situacao: RepresentanteSituacao

    @Column({length: 255})
    qrcode: String

    @ManyToOne(() => Eventos, (evento) => evento.representantes)
    @JoinColumn({ name: 'fk_id_evento' }) 
    evento: Eventos

    @ManyToOne(() => Alunos, (alunos) => alunos.representantes)
    @JoinColumn({ name: 'fk_id_aluno' }) 
    aluno: Alunos

    
}
