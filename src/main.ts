import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const VITRINE_FE_PORT = process.env.VITRINE_FE_PORT || '3000';
  const allowedOrigin = `http://127.0.0.1:${VITRINE_FE_PORT}`;

  app.enableCors({
    origin: allowedOrigin,
    credentials: true,
    methods: 'GET',
  });

  const config = new DocumentBuilder()
    .setTitle('Vitrine - Swagger')
    .setDescription('Vitrine - Swagger')
    .setVersion('1.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.VITRINE_BE_PORT || 5000);
}
bootstrap();
