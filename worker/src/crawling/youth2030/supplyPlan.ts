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

const getHousingInfo = (table: string[][]) => table.map(tr => {
  const supplyPlan = new SupplyPlan();
  tr.forEach((td, i) => {
    const content = td?.trim();
    if (i === 0) supplyPlan.location.year = Number(content);
    else if (i === 1) supplyPlan.location.num = Number(content);
    else if (i === 2) supplyPlan.location.address = content;
    else if (i === 3 || i === 4) supplyPlan.location.address += ` ${ content }`;
    else if (i === 5) supplyPlan.location.nearBySubway = content;
    else if (i === 6) supplyPlan.supplyCount.total = Number(content);
    else if (i === 7) supplyPlan.supplyCount.public = Number(content);
    else if (i === 8) supplyPlan.supplyCount.private = Number(content);
    else if (i === 9) supplyPlan.constructionPlan.noticeDate.public = content;
    else if (i === 10) supplyPlan.constructionPlan.noticeDate.private = content;
    else if (i === 11) supplyPlan.constructionPlan.moveInDate = content;
    else if (i === 12) supplyPlan.architects = content;
  });
  return supplyPlan;
});

export default async function crawling() {
  const URL = 'http://youth2030.co.kr/user/page/mn010104.do';

  const browser = await initBrowser();
  const page = await initPage(browser, URL);
  const table = await getTableContents(page);

  return getHousingInfo(table);
}