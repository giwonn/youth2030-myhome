import { initBrowser, initPage } from './common';

interface Location {
  year: number;
  num: number;
  address: string;
  nearBySubway: string;
}

interface SupplyCount {
  total: number;
  public: number;
  private: number;
}

interface NoticeDate {
  public: string;
  private: string;
}

interface ConstructionPlan {
  noticeDate: NoticeDate;
  moveInDate: string;
}

interface HousingInfo {
  location: Location;
  supplyCount: SupplyCount;
  constructionPlan: ConstructionPlan;
  architect: string[];
}

export default async function crawling() {
  const dbCount = 0;
  const URL = 'http://youth2030.co.kr/user/page/mn010104.do';

  const browser = await initBrowser();
  const page = await initPage(browser, URL);

  const table = [];
  const tableCount = await page.locator('.status_apply_table > tbody > tr').count()

  const tableList = await page.$$('.status_apply_table > tbody > tr')
  for (let i = dbCount; i < tableCount; i++) {
    table[i] = await tableList[i].$$eval('td', td => td.map((text) => text.textContent))
  }

  res.map(tr => {
    tr.reduce((obj, td, i) => {

    }, {})
  })


  console.log(table)

}

