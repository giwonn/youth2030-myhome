import { Test, TestingModule } from '@nestjs/testing';
import { NaverController } from './naver.controller';
import { NaverService } from './naver.service';

describe('NaverController', () => {
  let controller: NaverController;
  let service: NaverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaverController],
      providers: [NaverService],
    }).compile();

    controller = module.get<NaverController>(NaverController);
    service = module.get<NaverService>(NaverService);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  it('run GetHello()', () => {
    expect(controller.getHello()).toBe(service.getHello());
  });
});
