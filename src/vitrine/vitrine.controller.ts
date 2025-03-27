import {
  Controller,
  Get,
  Request,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { VitrineService } from './vitrine.service';

import { Evento } from 'src/evento/evento.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('v1/vitrine')
export class VitrineController {
  constructor(private readonly vitrineService: VitrineService) {}

  @Get()
  @UseGuards(AuthGuard)
  async findRepresentantes(@Request() req): Promise<Evento> {
    return await this.vitrineService.findRepresentantes(req.user);
  }

  @Get('/tv')
  // @UseGuards(AuthGuard)
  async findTv(@Request() req): Promise<Evento[]> {
    // if (req.user.tipo !== 'ADMINISTRADOR') {
    //   throw new UnauthorizedException('Acesso negado');
    // }
    return await this.vitrineService.findTv();
  }
}
