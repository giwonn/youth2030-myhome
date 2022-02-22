import { Browser, chromium, Locator, Page } from 'playwright';

// 토지이용계획이력을 가져와서 건설 예정인 청년주택 리스트 다운로드
async function crawling() {
  //   const updatedDate = getUpdatedDate(); // 디비에서 updatedDate 가장 최신자로 가져옴
  const URL = 'https://openapi.jigu.go.kr/main.do';

  const browser = await initBrowser();
  const page = await initPage(browser, URL);

  // 상세페이지로 이동
  const selectorsForMoveToDetailpage = ['[data-table=BLS5_DSTRC_STEP]', 'xpath=..', '.btn_detail']
  const ButtonForDetailPage = await moveToDetailPage(page, selectorsForMoveToDetailpage);
  ButtonForDetailPage.click();

  // 서울 지역 토지이용계획이력 CSV 다운 버튼으로 이동
  const seoulColumn: Locator = page.locator('td:nth-child(2)', {hasText: '서울'}).locator('xpath=..');
  const newDate = await seoulColumn.locator('td:nth-child(4)').innerHTML(); // 파일 업데이트 날짜

  //   if (updatedDate === newDate) return;

  // 버튼 클릭하여 다운로드
  const [download] = await getDownloadFile(page, seoulColumn, 'text=CSV')
  const path = await download.path(); // 어디에 저장되어있는지 확인
  console.log(path)

  await pageClose(page)
  console.log('토지이용계획이력 크롤링 End');
}

function initBrowser() {
  return chromium.launch({
    headless: true,
    args: ['--disable-dev-shm-usage'],
  });
}

async function initPage(browser: Browser, url: string) {
  const context = await browser.newContext({});
  const page = await context.newPage();

  // 택지정보 속성자료 페이지로 이동
  await page.goto(url);

  return page;
}

function moveToDetailPage(startPage: Page, selectors: any[]) {
  return selectors.reduce((page, selector) => page.locator(selector), startPage)
}

function getDownloadFile(page: Page, locator: Locator, selector: string) {
  return Promise.all([
    page.waitForEvent('download'),
    locator.locator(selector).click(),
  ])
}

function pageClose(page: Page) {
  return page.close();
}

export default crawling;
