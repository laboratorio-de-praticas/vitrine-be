import { Module } from '@nestjs/common';
// import { VitrineController } from './vitrine.controller';
import { VitrineService } from './vitrine.service';
import { eventoProviders } from '../evento/evento.providers';
import { DatabaseModule } from '../database/database.module';
import { alunoProviders } from '../aluno/aluno.providers';
import { CacheModule } from '@nestjs/cache-manager';
import { candidatoProviders } from '../candidato/candidato.providers';
import { usuarioProviders } from '../usuario/usuario.providers';
import { votanteProviders } from '../votante/votante.providers';

@Module({
  imports: [CacheModule.register(), DatabaseModule],
  // controllers: [VitrineController],
  providers: [
    ...eventoProviders,
    ...alunoProviders,
    ...candidatoProviders,
    ...usuarioProviders,
    ...votanteProviders,
    VitrineService
  ],
})
export class VitrineModule {}