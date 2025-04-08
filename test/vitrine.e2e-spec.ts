import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { testDataSource } from './data-source';

describe('VitrineController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    await testDataSource.initialize();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await testDataSource.destroy();
  });

  it('/v1/vitrine/tv (GET) - Deve retornar eventos', async () => {
    const response = await request(app.getHttpServer()).get('/v1/vitrine/tv');

    expect(response.status).toBe(200);
  });
});
