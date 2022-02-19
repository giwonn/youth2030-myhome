import { Module } from '@nestjs/common';
import { NaverController } from './naver.controller';
import { NaverService } from './naver.service';
import { SearchController } from './search/search.controller';
import { SearchService } from './search/search.service';

@Module({
  controllers: [NaverController, SearchController],
  providers: [NaverService, SearchService],
})
export class NaverModule {}
