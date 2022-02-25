import { Browser, chromium, Locator, Page } from 'playwright';

export function initBrowser() {
  return chromium.launch({
    headless: true,
    args: ['--disable-dev-shm-usage'],
  });
}

export async function initPage(browser: Browser, url: string) {
  const context = await browser.newContext({});
  const page = await context.newPage();
  await page.goto(url);

  return page;
}
