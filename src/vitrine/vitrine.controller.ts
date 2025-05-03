import {
  Controller,
  Get,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { VitrineService } from './vitrine.service';
import { Eventos } from 'src/evento/evento.entity';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@Controller('v1/vitrine')
@UseGuards(AuthGuard)
export class VitrineController {
  constructor(private readonly vitrineService: VitrineService) {}

    @Get("/tv")
    async findTv(): Promise<Eventos[]> {
        return await this.vitrineService.findTv();
    }

    @Get('/eventos-externos')
    async getEventosExternos(): Promise<Eventos[]> {
    return await this.vitrineService.findEventosExternos();
}
}
