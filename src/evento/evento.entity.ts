import { Representantes } from "src/representante/representante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoEvento } from "./tipo.enum";
import { StatusEvento } from "./status.enum";
import { ProjetosEventos } from 'src/projetos-eventos/projetos-eventos.entity';

@Entity('Eventos')
export class Eventos{
    @PrimaryGeneratedColumn()
    id_evento: number

  @Column({ length: 255 })
  nome_evento: String;

  @Column()
  tipo_evento: TipoEvento;

  @Column()
  descricao_evento: String;

  @Column()
  status_evento: StatusEvento;

  @Column()
  curso_semestre: String;

  @Column()
  data_alteracao: Date;

  @Column()
  data_criacao: Date;

  @Column()
  data_inicio: Date

  @Column()
  data_fim: Date

  @OneToMany(() => Representantes, (representante) => representante.evento)
  representantes: Representantes[]

  @OneToMany(() => ProjetosEventos, (proj) => proj.evento)
  projetosEventos: ProjetosEventos[];
}
