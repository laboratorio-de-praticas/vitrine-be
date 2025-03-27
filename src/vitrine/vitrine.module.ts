import { Module } from '@nestjs/common';
import { VitrineController } from './vitrine.controller';
import { VitrineService } from './vitrine.service';
import { eventoProviders } from 'src/evento/evento.providers';
import { DatabaseModule } from 'src/database/database.module';
import { alunoProviders } from 'src/aluno/aluno.providers';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.register(), DatabaseModule],
  controllers: [VitrineController],
  providers: [...eventoProviders, ...alunoProviders, VitrineService],

})
export class VitrineModule {}
