import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { VitrineService } from './vitrine.service';

import { Evento } from 'src/evento/evento.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('v1/vitrine')
export class VitrineController {
    constructor(private readonly vitrineService: VitrineService){}

    @Get()
    @UseGuards(AuthGuard)
    async findRepresentantes(@Request() req): Promise<Evento> {
      return await this.vitrineService.findRepresentantes(req.user);
    }

    @Get("/tv")
    @UseGuards(AuthGuard)
    async findTv(@Request() req): Promise<Evento[]> {
        return await this.vitrineService.findTv(req.user);
    }
}
