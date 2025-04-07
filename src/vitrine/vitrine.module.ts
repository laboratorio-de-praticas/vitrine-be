import { Module } from '@nestjs/common';
import { VitrineController } from './vitrine.controller';
import { VitrineService } from './vitrine.service';
import { eventoProviders } from 'src/evento/evento.providers';
import { alunoProviders } from 'src/aluno/aluno.providers';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  controllers: [VitrineController],
  providers: [...databaseProviders, ...eventoProviders, ...alunoProviders, VitrineService],
})
export class VitrineModule {}
