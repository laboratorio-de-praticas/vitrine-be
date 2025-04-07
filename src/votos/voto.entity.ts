import { Candidato } from "src/candidato/candidato.entity";
import { Eventos } from "src/evento/evento.entity";
import { Participantes } from "src/participante/participante.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Votos {
  @PrimaryGeneratedColumn()
  id_voto: number;

  @ManyToOne(() => Eventos, (evento) => evento.votos)
  @JoinColumn({ name: 'id_evento' })
  evento: Eventos;

  @ManyToOne(() => Participantes, (participante) => participante.votos)
  @JoinColumn({ name: 'id_participante' })
  participante: Participantes;

  @ManyToOne(() => Candidato, (candidato) => candidato.votos)
  @JoinColumn({ name: 'id_candidato' })
  candidato: Candidato;
}
