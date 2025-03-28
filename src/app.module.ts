import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { DatabaseModule } from './database/database.module';
import { CandidatoModule } from './candidato/candidato.module';
import { AlunoModule } from './aluno/aluno.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EventoModule } from './evento/evento.module';
import { VotanteModule } from './votante/votante.module';
import { VitrineModule } from './vitrine/vitrine.module';

@Module({
  imports: [
    HelloModule,
    DatabaseModule,
    CandidatoModule,
    AlunoModule,
    UsuarioModule,
    EventoModule,
    VotanteModule,
    VitrineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}