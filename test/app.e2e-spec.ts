import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
let app: INestApplication;
import { AppModule } from './../src/app.module';
import { testDataSource } from './data-source';

describe('AppController (e2e)', () => {
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
    if (app) {
      await app.close();
    }
    if (testDataSource.isInitialized) {
      await testDataSource.destroy();
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  });


  it('/v1/vitrine/tv (GET)', () => {
    return request(app.getHttpServer())
      .get('/v1/vitrine/tv')
      .expect(200); 
  });
});
