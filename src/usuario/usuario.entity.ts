import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TipoUsuario } from "./tipo.enum";
import { StatusUsuario } from "./status.enum";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255})
    nome: String
    
    @Column()
    data_alteracao: Date
    
    @Column()
    data_criacao: Date

    @Column()
    senha: String
    
    @Column({length: 255})
    email_institucional: String

    @Column()
    tipo_usuario: TipoUsuario
    
    @Column()
    status_usuario: StatusUsuario
}