import { Test, TestingModule } from '@nestjs/testing';
import { SearchService } from './search.service';

describe('NaverService', () => {
  let service: SearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchService],
    }).compile();

    service = module.get<SearchService>(SearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getSearchResult()', () => {
    it('send request search', async () => {
      const res = await service.getSearchResult('논현동 청년주택');
      expect(res.status).toEqual(200);
    });
  });
});
