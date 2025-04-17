import {
  Controller,
  Get,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { VitrineService } from './vitrine.service';
import { Query } from '@nestjs/common';
import { Eventos } from 'src/evento/evento.entity';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('v1/vitrine')
//@UseGuards(AuthGuard)
export class VitrineController {
  constructor(private readonly vitrineService: VitrineService) {}

    @Get("/tv")
    //@Roles("Admin")
    async findTv(): Promise<Eventos[]> {
        return await this.vitrineService.findTv();
    }

    @Get('/eventos-externos')
    async getEventosExternos(@Query('dataInicio') dataInicio?: string): Promise<Eventos[]> {
    return await this.vitrineService.findEventosExternos(dataInicio);
}
}
