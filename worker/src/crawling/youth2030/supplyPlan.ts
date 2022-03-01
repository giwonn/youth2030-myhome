import type { Page } from 'playwright';
import { initBrowser, initPage } from '@/crawling/common';
import { SupplyPlan } from '@/crawling/youth2030/supplyPlan.class';
import { ElementHandle } from '@playwright/test';

export default async function crawling() {
  const URL = 'http://youth2030.co.kr/user/page/mn010104.do';

  const browser = await initBrowser();
  const page = await initPage(browser, URL);
  const table = await getTableContents(page);

  return getHousingInfo(table);
}

const getTableContents = async (page: Page) => {
  const tableElement = await page.$$('.status_apply_table > tbody > tr');
  return await getTableList(tableElement);
};

const getTableList = (tableElement: ElementHandle[]) => {
  return Promise.all(tableElement.map((tr) =>
    tr.$$eval('td', td => td.map(({textContent}) => textContent ?? '')),
  ));
};

const getHousingInfo = (table: string[][]) => table.map((tr: string[]) =>
  tr.reduce<SupplyPlan>((supplyPlan: SupplyPlan, td: string, i: number) => {
    const content = td?.trim();
    switch (i) {
      case 0:
        supplyPlan.location.year = Number(content);
        break;
      case 1:
        supplyPlan.location.num = Number(content);
        break;
      case 2:
        supplyPlan.location.address = content;
        break;
      case 3:
      case 4:
        supplyPlan.location.address += ` ${ content }`;
        break;
      case 5:
        supplyPlan.location.nearBySubway = content;
        break;
      case 6:
        supplyPlan.supplyCount.total = Number(content);
        break;
      case 7:
        supplyPlan.supplyCount.public = Number(content);
        break;
      case 8:
        supplyPlan.supplyCount.private = Number(content);
        break;
      case 9:
        supplyPlan.constructionPlan.noticeDate.public = content;
        break;
      case 10:
        supplyPlan.constructionPlan.noticeDate.private = content;
        break;
      case 11:
        supplyPlan.constructionPlan.moveInDate = content;
        break;
      case 12:
        supplyPlan.architects = content;
        break;
    }
    return supplyPlan;
  }, new SupplyPlan()),
);
