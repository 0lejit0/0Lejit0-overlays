const { chromium } = require('playwright');
const path = require('path');
const root = process.argv[2], S = process.argv[3];
const jobs = [
  ['twitch/starting-soon',1920,1080],['twitch/brb',1920,1080],['twitch/ending',1920,1080],
  ['twitch/just-chatting',1920,1080],['twitch/gameplay',1920,1080,true],['twitch/chat',448,296,true],
  ['tiktok/starting-soon',1080,1920],['tiktok/brb',1080,1920],['tiktok/ending',1080,1920],['tiktok/gameplay',1080,1920,true],
];
(async () => {
  const b = await chromium.launch(); const errs = [];
  for (const [p,w,h,bg] of jobs) {
    const pg = await b.newPage({ viewport:{width:w,height:h} });
    pg.on('pageerror', e => errs.push(p+': '+e.message));
    await pg.goto('file://'+path.join(root,p+'.html')+'?preview&min=5');
    if (bg) await pg.addStyleTag({content:'html{background:linear-gradient(135deg,#2b3a4a,#3c2f2a 60%,#1f2d22)}'});
    await pg.waitForTimeout(1200);
    await pg.screenshot({ path: path.join(root,'previews',p.replace('/','-')+'.png') });
    await pg.close();
  }
  const pg = await b.newPage({ viewport:{width:1920,height:400} });
  await pg.goto('file://'+S+'/alert-preview.html'); await pg.addStyleTag({content:'html{background:#333}'});
  await pg.waitForTimeout(1000); await pg.screenshot({ path: path.join(root,'previews','alert.png') });
  await b.close(); console.log(errs.length ? errs.join('\n') : 'no JS errors');
})();
