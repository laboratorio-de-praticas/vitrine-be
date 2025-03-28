import { Module } from '@nestjs/common';
import { VitrineController } from './vitrine.controller';
import { VitrineService } from './vitrine.service';
import { eventoProviders } from 'src/evento/evento.providers';
import { DatabaseModule } from 'src/database/database.module';
import { CacheModule } from '@nestjs/cache-manager';


@Module({
  imports: [CacheModule.register(), DatabaseModule],
  controllers: [VitrineController],
  providers: [...eventoProviders, VitrineService],

})

export class VitrineModule {}
