import { Module } from '@nestjs/common';
import { VitrineController } from './vitrine.controller';
import { VitrineService } from './vitrine.service';
import { eventoProviders } from 'src/evento/evento.providers';
<<<<<<< Updated upstream
import { alunoProviders } from 'src/aluno/aluno.providers';
import { databaseProviders } from 'src/database/database.providers';
=======
import { DatabaseModule } from 'src/database/database.module';
>>>>>>> Stashed changes

@Module({
  controllers: [VitrineController],
<<<<<<< Updated upstream
  providers: [...databaseProviders, ...eventoProviders, ...alunoProviders, VitrineService],
=======
  providers: [...eventoProviders, VitrineService],

>>>>>>> Stashed changes
})
export class VitrineModule {}
