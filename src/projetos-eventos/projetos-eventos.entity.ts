import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Eventos } from 'src/evento/evento.entity';

@Entity('ProjetosEventos')
export class ProjetosEventos {
  @PrimaryGeneratedColumn()
  id_projetos_eventos: number;

  @Column()
  qrcode: string;

  @ManyToOne(() => Eventos, (evento) => evento.projetosEventos)
  @JoinColumn({ name: 'fk_id_evento' })
  evento: Eventos;
}

