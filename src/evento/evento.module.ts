import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { eventoProviders } from './evento.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...eventoProviders],
  exports: [...eventoProviders],
})
export class EventoModule {}
