import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { candidatoProviders } from './candidato.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...candidatoProviders],
  exports: [...candidatoProviders],
})
export class CandidatoModule {}
