import type { Page } from 'playwright';
import { initBrowser, initPage } from '@/crawling/common';
import { ElementHandle } from "@playwright/test";

class Location {
  year?: number;
  num?: number;
  address?: string;
  nearBySubway?: string;
}

class SupplyCount {
  total?: number;
  public?: number;
  private?: number;
}

class NoticeDate {
  public?: string;
  private?: string;
}

class ConstructionPlan {
  noticeDate = new NoticeDate();
  moveInDate?: string;
}

class SupplyPlan {
  location = new Location();
  supplyCount = new SupplyCount();
  constructionPlan = new ConstructionPlan();
  architects?: string;
}

const getTableContents = async (page: Page) => {
  const tableElement = await page.$$('.status_apply_table > tbody > tr');
  return await getTableList(tableElement);
}

const getTableList = async (tableElement: ElementHandle[]) => {
  return Promise.all(tableElement.map((tr) =>
      tr.$$eval('td', td => td.map(({textContent}) => textContent ?? ''))
    )
  );
}

const getHousingInfo = (table: string[][]) => table.map((tr: string[]) =>
  tr.reduce<SupplyPlan>((supplyPlan: SupplyPlan, td: string, idx: number) => {
    (() => ({
      0: () => supplyPlan.location.year = Number(td),
      1: () => supplyPlan.location.num = Number(td),
      2: () => supplyPlan.location.address = td,
      3: () => supplyPlan.location.address += ` ${ td }`,
      4: () => supplyPlan.location.address += ` ${ td }`,
      5: () => supplyPlan.location.nearBySubway = td,
      6: () => supplyPlan.supplyCount.total = Number(td),
      7: () => supplyPlan.supplyCount.public = Number(td),
      8: () => supplyPlan.supplyCount.private = Number(td),
      9: () => supplyPlan.constructionPlan.noticeDate.public = td,
      10: () => supplyPlan.constructionPlan.noticeDate.private = td,
      11: () => supplyPlan.constructionPlan.moveInDate = td,
      12: () => supplyPlan.architects = td,
    }[idx]))()
    return supplyPlan;
  }, new SupplyPlan())
);

export default async function crawling() {
  const URL = 'http://youth2030.co.kr/user/page/mn010104.do';

  const browser = await initBrowser();
  const page = await initPage(browser, URL);
  const table = await getTableContents(page);

  return getHousingInfo(table);
}