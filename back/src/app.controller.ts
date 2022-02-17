import { Controller, Get } from '@nestjs/common';
import NaverService from './naver.service';
import { AxiosRequestConfig } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly naverService: NaverService) {}

  @Get()
  getHello(): AxiosRequestConfig {
    return this.naverService.getSearchResult();
  }
}
