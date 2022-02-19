import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

describe('SearchController', () => {
  let controller: SearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [SearchService],
    }).compile();

    controller = module.get<SearchController>(SearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('no input', () => {
    expect(controller.getHello()).toEqual('Please input keyword');
  });

  it('search input', async () => {
    const res = await controller.getSearchResult('논현동 청년주택');
    expect(res.status).toEqual(200);
  });
});
