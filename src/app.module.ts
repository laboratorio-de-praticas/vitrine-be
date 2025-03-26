import { Module } from '@nestjs/common';
import { VitrineModule } from './vitrine/vitrine.module';
import { DatabaseModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [VitrineModule, AuthModule],
})
export class AppModule {}
