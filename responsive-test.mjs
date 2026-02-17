import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:3000';
const OUT = '/Users/fabiankjaergaard/pedral-website/sessions/260217-spry-waterfall/data/screenshots';

const viewports = [
  { name: 'iphone-se', width: 375, height: 812 },
  { name: 'iphone-14', width: 393, height: 852 },
  { name: 'ipad', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

const pages = [
  { name: 'home', path: '/' },
  { name: 'story', path: '/story' },
  { name: 'collections', path: '/collections' },
  { name: 'contact', path: '/contact' },
];

mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  for (const pg of pages) {
    console.log(`📸 ${pg.name} @ ${vp.name} (${vp.width}x${vp.height})`);
    await page.goto(`${BASE}${pg.path}`, { waitUntil: 'networkidle' });
    // Wait for animations to settle
    await page.waitForTimeout(1500);

    // Full page screenshot
    await page.screenshot({
      path: `${OUT}/${pg.name}-${vp.name}.png`,
      fullPage: true,
    });

    // Check for horizontal overflow
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    if (hasHorizontalScroll) {
      const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientW = await page.evaluate(() => document.documentElement.clientWidth);
      console.log(`  ⚠️  HORIZONTAL OVERFLOW! scrollWidth=${scrollW} > clientWidth=${clientW}`);
    } else {
      console.log(`  ✅ No horizontal overflow`);
    }

    // Check for elements overflowing viewport
    const overflowing = await page.evaluate(() => {
      const results = [];
      const all = document.querySelectorAll('*');
      for (const el of all) {
        const rect = el.getBoundingClientRect();
        if (rect.right > window.innerWidth + 5 && el.offsetWidth > 0) {
          const tag = el.tagName.toLowerCase();
          const cls = el.className?.toString().slice(0, 80) || '';
          results.push({ tag, cls, right: Math.round(rect.right), vw: window.innerWidth });
        }
      }
      return results.slice(0, 5); // top 5
    });
    if (overflowing.length > 0) {
      console.log(`  ⚠️  ${overflowing.length} element(s) overflow viewport:`);
      overflowing.forEach(o => console.log(`     <${o.tag}> right=${o.right}px (vw=${o.vw}px) class="${o.cls}"`));
    }
  }

  await context.close();
}

await browser.close();
console.log('\n✅ Done! Screenshots saved to:', OUT);
