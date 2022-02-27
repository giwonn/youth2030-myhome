import type { Page } from 'playwright';
import {initBrowser, initPage} from '@/crawling/common';

export class Location {
    year?: number;
    num?: number;
    address?: string;
    nearBySubway?: string;
}

export class SupplyCount {
    total?: number;
    public?: number;
    private?: number;
}

export class NoticeDate {
    public?: string;
    private?: string;
}

export class ConstructionPlan {
    noticeDate = new NoticeDate();
    moveInDate?: string;
}

export class SupplyPlan {
    location = new Location();
    supplyCount = new SupplyCount();
    constructionPlan = new ConstructionPlan();
    architects?: string;
}

const getTableContents = async (page: Page, dbCount: number) => {
    const table: string[][] = [];
    const tableCount = await page.locator('.status_apply_table > tbody > tr').count();
    const tableList = await page.$$('.status_apply_table > tbody > tr');

    for (let i = dbCount; i < tableCount; i++) {
        table[i] = await tableList[i].$$eval('td', td => td.map<string>((text) => text.textContent ?? ''))
    }

    return table;
}

const getHousingInfo = (table: string[][]) => table.map(tr => {
    const supplyPlan = new SupplyPlan();
    tr.forEach((td, i) => {
        const content = td?.trim()
        if (i === 0) supplyPlan.location.year = Number(content);
        if (i === 1) supplyPlan.location.num = Number(content);
        if (i === 2) supplyPlan.location.address = content;
        if (i === 3 || i === 4) supplyPlan.location.address += ` ${content}`;
        if (i === 5) supplyPlan.location.nearBySubway = content;
        if (i === 6) supplyPlan.supplyCount.total = Number(content);
        if (i === 7) supplyPlan.supplyCount.public = Number(content);
        if (i === 8) supplyPlan.supplyCount.private = Number(content);
        if (i === 9) supplyPlan.constructionPlan.noticeDate.public = content;
        if (i === 10) supplyPlan.constructionPlan.noticeDate.private = content;
        if (i === 11) supplyPlan.constructionPlan.moveInDate = content;
        if (i === 12) supplyPlan.architects = content;
    });
    return supplyPlan;
});

export default async function crawling() {
  const dbCount = 0;
  const URL = 'http://youth2030.co.kr/user/page/mn010104.do';

  const browser = await initBrowser();
  const page = await initPage(browser, URL);

  const table = await getTableContents(page, dbCount);
  const supplyPlanList: SupplyPlan[] = getHousingInfo(table);

  console.log(supplyPlanList[0]); // 값이 제대로 들어가는지 확인해보기 위함임

  return supplyPlanList;
}