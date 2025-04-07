import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { alunoProviders } from './aluno.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...alunoProviders],
  exports: [...alunoProviders],
})
export class AlunoModule {}
