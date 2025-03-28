import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Alunos } from '../aluno/aluno.entity';
import { StatusUsuario, TipoUsuario } from '../enums';

@Entity()
export class Usuarios{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 255})
    nome: String
    
    @Column()
    data_alteracao: Date
    
    @Column()
    data_criacao: Date

    @Column({length: 400})
    senha: String
    
    @Column({length: 250})
    email_institucional: String

    @Column()
    tipo_usuario: TipoUsuario
    
    @Column()
    status_usuario: StatusUsuario
}