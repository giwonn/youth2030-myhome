import { Controller, Get, Param, Req } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('naver/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  getHello() {
    return 'Please input keyword';
  }

  @Get(':keyword')
  getSearchResult(@Param('keyword') keyword: string) {
    return this.searchService.getSearchResult(keyword);
  }
}
