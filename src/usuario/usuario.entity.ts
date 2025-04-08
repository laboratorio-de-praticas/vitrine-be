import { Column, Entity,  PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { TipoUsuario } from './tipo.enum';
import { StatusUsuario } from './status.enum';

<<<<<<< Updated upstream
@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;
=======
@Entity('Usuarios')
export class Usuarios{
    @PrimaryGeneratedColumn()
    id: number
>>>>>>> Stashed changes

  @Column({ length: 255 })
  nome: String;

  @Column()
  data_alteracao: Date;

<<<<<<< Updated upstream
  @Column()
  data_criacao: Date;

  @Column({ length: 400 })
  senha: String;

  @Column({ length: 250 })
  email_institucional: String;

  @Column()
  tipo_usuario: TipoUsuario;

  @Column()
  status_usuario: StatusUsuario;
}
=======
    @Column()
    tipo_usuario: TipoUsuario
    
    @Column()
    status_usuario: StatusUsuario   
}
>>>>>>> Stashed changes
