import { initBrowser, initPage } from './common';

export default async function crawling() {
  const URL = 'http://youth2030.co.kr/user/board/mn010203.do';

  const browser = await initBrowser();
  const page = await initPage(browser, URL);

}

