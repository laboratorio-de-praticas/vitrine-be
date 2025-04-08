<<<<<<< Updated upstream
import { Candidato } from 'src/candidato/candidato.entity';
import { Participantes } from 'src/participante/participante.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TipoEvento } from './tipo.enum';
import { StatusEvento } from './status.enum';
import { Votos } from 'src/votos/voto.entity';

@Entity()
export class Eventos {
  @PrimaryGeneratedColumn()
  id_evento: number;
=======
import { Representantes } from "src/representante/representante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TipoEvento } from "./tipo.enum";
import { StatusEvento } from "./status.enum";

@Entity('Eventos')
export class Eventos{
    @PrimaryGeneratedColumn()
    id_evento: number
>>>>>>> Stashed changes

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

  @OneToMany(() => Candidato, (candidato) => candidato.evento)
  candidatos: Candidato[]
    
  @OneToMany(() => Participantes, (participantes) => participantes.evento)
  participantes: Participantes[]
    
<<<<<<< Updated upstream
  @OneToMany(() => Votos, (votos) => votos.evento)
  votos: Votos[]
=======
    @Column()
    data_alteracao: Date

    @Column()
    data_criacao: Date

    @Column()
    data_inicio: Date

    @Column()
    data_fim: Date

    @OneToMany(() => Representantes, (representante) => representante.evento)
    representantes: Representantes[]
>>>>>>> Stashed changes
}
