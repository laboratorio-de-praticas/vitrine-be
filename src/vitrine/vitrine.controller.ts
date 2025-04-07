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

@ApiBearerAuth()
@Controller('v1/vitrine')
//@UseGuards(AuthGuard)
export class VitrineController {
  constructor(private readonly vitrineService: VitrineService) {}

    @Get("/tv")
    //@Roles("Admin")
    async findTv(@Request() req): Promise<Eventos[]> {
        return await this.vitrineService.findTv();
    }
}
