import { Column, Entity,  PrimaryGeneratedColumn } from 'typeorm';
import { TipoUsuario } from './tipo.enum';
import { StatusUsuario } from './status.enum';

@Entity('Usuarios')
export class Usuarios{
    @PrimaryGeneratedColumn()
    id: number

  @Column({ length: 255 })
  nome: String;

  @Column()
  data_alteracao: Date;

  @Column()
  data_criacao: Date;

  @Column({ length: 250 })
  email_institucional: String;

  @Column()
  tipo_usuario: TipoUsuario;

  @Column()
  status_usuario: StatusUsuario;
}
