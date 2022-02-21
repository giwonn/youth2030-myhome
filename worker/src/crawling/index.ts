import { chromium, Locator } from 'playwright';

// 토지이용계획이력을 가져와서 건설 예정인 청년주택 리스트 다운로드
const crawling = async () => {
  //   const updateDate = DATABASE?.updateDate;

  console.log('토지이용계획이력 크롤링 Start');
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-dev-shm-usage'],
  });

  const context = await browser.newContext({});
  const page = await context.newPage();

  // 택지정보 속성자료 페이지로 이동
  await page.goto('https://openapi.jigu.go.kr/main.do');

  // 상세페이지로 이동
  await page
    .locator('[data-table=BLS5_DSTRC_STEP]')
    .locator('xpath=..')
    .locator('.btn_detail')
    .click();

  // 서울 지역 토지이용계획이력 CSV 다운 버튼으로 이동
  const seoul: Locator = page.locator('td:nth-child(2)', { hasText: '서울' }).locator('xpath=..');
  const newDate = await seoul.locator('td:nth-child(4)').innerHTML(); // 파일 업데이트 날짜

  //   if (updateDate === newDate) return;

  // 버튼 클릭하여 다운로드
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    seoul.locator('text=CSV').click(),
  ]);

  // 어디에 저장되어있는지 확인
  const path = await download.path();
  //   console.log(path);

  console.log('토지이용계획이력 크롤링 End');
  await page.close();
};

export default crawling;
