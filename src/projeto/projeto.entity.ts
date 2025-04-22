import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Eventos } from 'src/evento/evento.entity';
import { ProjetosEventos } from 'src/projetos-eventos/projetos-eventos.entity';

@Entity('Projetos')
export class Projetos {
  @PrimaryGeneratedColumn()
  id_projeto: number;

  @Column()
  titulo: string;

  @OneToMany(() => ProjetosEventos, (projetosEventos) => projetosEventos.projeto)
  projetosEventos: ProjetosEventos[];
}

