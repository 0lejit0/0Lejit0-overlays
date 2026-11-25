(function(){
  const C = window.OLEJIT, q = new URLSearchParams(location.search);
  const preview = q.has('preview');
  if (preview) document.documentElement.classList.add('preview');

  const ICONS = {
    twitch:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.3 2 3 5.4V19h4.6v3h2.6l2.6-3h3.8L22 13.6V2H4.3zm15.8 10.7-3.2 3.2h-4.4l-2.7 2.7v-2.7H6V3.9h14.1v8.8zM16.8 6.3H15v5.2h1.8V6.3zm-4.8 0h-1.8v5.2H12V6.3z"/></svg>',
    youtube:'<svg viewBox="0 0 24 24"><rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="currentColor"/><path d="M10 8.7v6.6l5.6-3.3z" fill="#090a0d"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.2 2h3.2c.3 2 1.7 3.5 3.8 3.7v3.2c-1.4 0-2.7-.4-3.8-1.1v6.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.3a2.4 2.4 0 1 0 1.5 2.2V2z"/></svg>'
  };
  const logo = (document.currentScript.src.replace(/common\.js.*$/, '')) + 'logo.svg';
  document.querySelectorAll('[data-logo]').forEach(i => i.src = logo);
  document.querySelectorAll('[data-name]').forEach(e => e.innerHTML = C.name.replace(/(\d)$/, '<b>$1</b>').replace(/^(\d)/, '<b>$1</b>'));

  const sceneEl = document.querySelector('[data-scene]');
  if (sceneEl && C.scenes && C.scenes[sceneEl.dataset.scene]) {
    const sc = C.scenes[sceneEl.dataset.scene];
    const k = sceneEl.querySelector('.kicker'), t = sceneEl.querySelector('.title'), s = sceneEl.querySelector('.sub');
    if (k && sc.kicker) k.textContent = sc.kicker;
    if (t && sc.title) t.innerHTML = `${sc.title}<span class="dot">.</span>`;
    if (s && sc.sub) s.textContent = sc.sub;
  }

  document.querySelectorAll('[data-socials]').forEach(row => {
    row.innerHTML = C.socials.map(s => `<div class="chip">${ICONS[s.platform] || ''}<span>${s.handle}</span></div>`).join('');
  });

  document.querySelectorAll('[data-rotator]').forEach(rot => {
    rot.innerHTML = C.socials.map(s => `<span>${ICONS[s.platform] || ''}${s.handle}</span>`).join('');
    const items = [...rot.children];
    if (!items.length) return;
    let i = 0; items[0].classList.add('on');
    if (preview || items.length < 2) return;
    setInterval(() => {
      const cur = items[i]; cur.classList.remove('on'); cur.classList.add('off');
      setTimeout(() => cur.classList.remove('off'), 700);
      i = (i + 1) % items.length; items[i].classList.add('on');
    }, C.socialRotateSeconds * 1000);
  });

  document.querySelectorAll('[data-banner]').forEach(wrap => {
    wrap.querySelector('.hs').innerHTML = C.socials.map(s => `<span>${ICONS[s.platform] || ''}${s.handle}</span>`).join('');
    if (preview) { wrap.classList.add('show'); return; }
    const every = (parseFloat(q.get('every')) || C.bannerEveryMinutes) * 60000;
    const hold = (parseFloat(q.get('hold')) || C.bannerHoldSeconds) * 1000;
    const delay = q.has('banner') ? 300 : C.bannerFirstDelaySeconds * 1000;
    const cycle = () => {
      wrap.classList.remove('hide'); wrap.classList.add('show');
      setTimeout(() => { wrap.classList.remove('show'); wrap.classList.add('hide');
        setTimeout(() => wrap.classList.remove('hide'), 900); }, hold);
    };
    setTimeout(() => { cycle(); setInterval(cycle, every); }, delay);
  });

  document.querySelectorAll('[data-countdown]').forEach(el => {
    const totalMs = (parseFloat(q.get('min')) || 5) * 60000;
    const end = Date.now() + totalMs;
    const fill = el.closest('.count-wrap')?.querySelector('[data-countdown-fill]');
    const fmt = sec => {
      const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
      const mm = String(m).padStart(2, '0'), ss = String(s).padStart(2, '0');
      return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
    };
    const tick = () => {
      const rem = Math.max(0, end - Date.now());
      const s = Math.round(rem / 1000);
      el.textContent = s ? fmt(s) : '12:00 AM';
      if (fill) fill.style.transform = `scaleX(${preview ? 0.65 : (totalMs > 0 ? rem / totalMs : 0)})`;
    };
    tick(); if (!preview) setInterval(tick, 250);
  });
})();
