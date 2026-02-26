const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('http://localhost:5173/');
  // click register on homepage nav
  await page.click('button.nav-btn-solid');
  await new Promise(r => setTimeout(r, 500));
  // fill form
  await page.type('input[placeholder="e.g. Rahul Sharma"]', 'Test User');
  await page.type('input[placeholder="you@example.com"]', 'test@example.com');
  await page.type('input[placeholder="Min. 6 characters"]', 'password');
  await page.type('input[placeholder="Repeat your password"]', 'password');
  await page.select('select.form-select', 'user');
  await page.click('button.btn-primary');
  await new Promise(r => setTimeout(r, 1000));
  console.log('done');
  await browser.close();
})();