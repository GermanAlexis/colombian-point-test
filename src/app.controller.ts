import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':size')
  getMatrixInExpiral(@Param('size', ParseIntPipe) size: number): number[][] {
    return this.appService.getMatrixInExpiral(size);
  }
}
