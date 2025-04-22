import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Eventos } from 'src/evento/evento.entity';
import { Projetos } from 'src/projeto/projeto.entity';

@Entity('ProjetosEventos')
export class ProjetosEventos {
  @PrimaryGeneratedColumn()
  id_projetos_eventos: number;

  @Column()
  qrcode: string;

  @ManyToOne(() => Eventos, (evento) => evento.projetosEventos)
  @JoinColumn({ name: 'fk_id_evento' })
  evento: Eventos;

  @ManyToOne(() => Projetos, (projeto) => projeto.projetosEventos)
  @JoinColumn({name: "fk_id_projeto"})
  projeto: Projetos;
}

