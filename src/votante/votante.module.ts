import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { votanteProviders } from './votante.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...votanteProviders],
  exports: [...votanteProviders],
})
export class VotanteModule {}