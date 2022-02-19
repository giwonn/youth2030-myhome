import { Injectable } from '@nestjs/common';

@Injectable()
export class NaverService {
  getHello(): string {
    return 'Here is NaverController';
  }
}
