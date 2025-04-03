import { Controller, Get, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { VitrineService } from './vitrine.service';

import { Eventos } from 'src/evento/evento.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/auth/auth.roles';

@ApiBearerAuth()
@Controller('v1/vitrine')
//@UseGuards(AuthGuard)
export class VitrineController {
  constructor(private readonly vitrineService: VitrineService) {}

    // Endpoint será descontinuado
    @Get()
    //@Roles("Admin", "Interno")
    async findRepresentantes(@Request() req): Promise<Eventos> {
      return await this.vitrineService.findRepresentantes(req.user);
    }

    @Get("/tv")
    //@Roles("Admin")
    async findTv(@Request() req): Promise<Eventos[]> {
        return await this.vitrineService.findTv(req.user);
    }
}
