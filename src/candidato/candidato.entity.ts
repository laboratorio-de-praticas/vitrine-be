import { Evento } from 'src/evento/evento.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()

@Entity()
export class Candidato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: String;

  @UpdateDateColumn()
  data_alteracao: Date;

  @CreateDateColumn()
  data_criacao: Date;

  @Column({ length: 255 })
  situacao_candidato: String;

  @Column()
  qrCode: String;

  @Column({ length: 255 })
  foto: String;

  @ManyToOne(() => Evento, (evento) => evento.candidatos)
  evento: Evento;
}
