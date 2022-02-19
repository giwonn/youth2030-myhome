import { Controller, Get } from '@nestjs/common';
import { NaverService } from './naver.service';

@Controller('naver')
export class NaverController {
  constructor(private readonly naverService: NaverService) {}

  @Get()
  getHello() {
    return this.naverService.getHello();
  }
}
