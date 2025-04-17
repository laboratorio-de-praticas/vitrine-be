import { Test, TestingModule } from '@nestjs/testing';
import { VitrineController } from './vitrine.controller';
import { VitrineService } from './vitrine.service';
import { Usuarios } from '../usuario/usuario.entity';
import { Eventos } from '../evento/evento.entity';
import { TipoEvento } from '../evento/tipo.enum';
import { StatusEvento } from '../evento/status.enum';

const eventosMock: Eventos[] = [
    {
      id_evento: 1,
      nome_evento: 'Evento Teste',
      tipo_evento: TipoEvento.INTERNO,
      descricao_evento: 'Descrição do evento',
      status_evento: StatusEvento.ATIVO,
      curso_semestre: 'DSM1',
      data_alteracao: new Date(),
      data_criacao: new Date(),
      data_inicio: new Date(),
      data_fim: new Date(),
      representantes: [],
      projetosEventos: [],
    } as Eventos,

  ];
  

describe('VitrineController', () => {
  let controller: VitrineController;
  let service: Partial<Record<keyof VitrineService, jest.Mock>>;

  beforeEach(async () => {
    service = {
      findTv: jest.fn().mockResolvedValue(eventosMock),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [VitrineController],
      providers: [{ provide: VitrineService, useValue: service }],
    }).compile();

    controller = module.get<VitrineController>(VitrineController);
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined();
  });

  it('findTv deve chamar service.findTv e retornar eventos', async () => {
  
    const result = await controller.findTv();
  
    expect(service.findTv).toHaveBeenCalledWith();
    expect(result).toEqual(eventosMock); 
  });
  
});
