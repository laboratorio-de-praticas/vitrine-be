import { Module } from '@nestjs/common';
import { VitrineModule } from './vitrine/vitrine.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [VitrineModule, AuthModule],
})
export class AppModule {}
