const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage({viewport:{width:1920,height:1080}});
  await pg.goto('file://'+process.argv[2]+'/twitch/gameplay.html?every=0.25&hold=3&min=1');
  const vis = () => pg.$eval('[data-banner]', e => getComputedStyle(e).visibility + ' ' + e.className);
  const rot = () => pg.$eval('[data-rotator] .on', e => e.textContent);
  for (const t of [1, 9.5, 12.5, 16, 24.5]) {
    await pg.waitForTimeout((t - (global.last||0)) * 1000); global.last = t;
    console.log(`t=${t}s banner: ${await vis()} | handle: ${await rot()}`);
  }
  await b.close();
})();
