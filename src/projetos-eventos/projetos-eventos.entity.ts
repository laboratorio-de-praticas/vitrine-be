import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Eventos } from 'src/evento/evento.entity';

@Entity('ProjetosEventos')
export class ProjetosEventos {
  @PrimaryGeneratedColumn()
  id_projetos_eventos: number;

  @Column()
  qrCode: string;

  @ManyToOne(() => Eventos, (evento) => evento.projetosEventos)
  evento: Eventos;
}

