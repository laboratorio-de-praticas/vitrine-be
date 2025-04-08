import { Test, TestingModule } from '@nestjs/testing';
import { VitrineService } from './vitrine.service';
import { Repository } from 'typeorm';
import { Eventos } from '../evento/evento.entity';
import { Alunos } from '../aluno/aluno.entity';

describe('VitrineService', () => {
  let service: VitrineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VitrineService,
        {
          provide: 'EVENTO_REPOSITORY',
          useValue: {
            createQueryBuilder: jest.fn().mockReturnValue({
              andWhere: jest.fn().mockReturnThis(),
              leftJoinAndSelect: jest.fn().mockReturnThis(),
              getMany: jest.fn().mockResolvedValue([]),
            }),
          },
        },
        {
          provide: 'ALUNO_REPOSITORY',
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<VitrineService>(VitrineService);
  });

  it('deve ser definido', () => {
    expect(service).toBeDefined();
  });

  it('findTv deve retornar uma lista de eventos', async () => {
    const result = await service.findTv({} as any); // passa um mock de usuário
    expect(result).toEqual([]);
  });
});
