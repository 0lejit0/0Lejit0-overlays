(function(){
  const C = window.OLEJIT, q = new URLSearchParams(location.search);
  const preview = q.has('preview');
  if (preview) document.documentElement.classList.add('preview');

  const ICONS = {
    twitch:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.3 2 3 5.4V19h4.6v3h2.6l2.6-3h3.8L22 13.6V2H4.3zm15.8 10.7-3.2 3.2h-4.4l-2.7 2.7v-2.7H6V3.9h14.1v8.8zM16.8 6.3H15v5.2h1.8V6.3zm-4.8 0h-1.8v5.2H12V6.3z"/></svg>',
    youtube:'<svg viewBox="0 0 24 24"><rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="currentColor"/><path d="M10 8.7v6.6l5.6-3.3z" fill="#140c24"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.2 2h3.2c.3 2 1.7 3.5 3.8 3.7v3.2c-1.4 0-2.7-.4-3.8-1.1v6.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.3a2.4 2.4 0 1 0 1.5 2.2V2z"/></svg>'
  };
  window.OL_ICON = p => ICONS[p] || '';
  const logo = (document.currentScript.src.replace(/common\.js.*$/, '')) + 'logo.svg';
  document.querySelectorAll('[data-logo]').forEach(i => i.src = logo);
  document.querySelectorAll('[data-name]').forEach(e => e.innerHTML = C.name.replace(/(\d)$/, '<b>$1</b>').replace(/^(\d)/, '<b>$1</b>'));
  document.querySelectorAll('[data-tagline]').forEach(e => e.textContent = C.tagline);

  // social chips row
  document.querySelectorAll('[data-socials]').forEach(row => {
    row.innerHTML = C.socials.map(s => `<div class="chip">${ICONS[s.platform]}<span>${s.handle}</span></div>`).join('');
  });

  // rotating handle tag
  document.querySelectorAll('[data-rotator]').forEach(rot => {
    rot.innerHTML = C.socials.map(s => `<span>${ICONS[s.platform]}${s.handle}</span>`).join('');
    const items = [...rot.children]; let i = 0;
    items[0].classList.add('on');
    if (preview) return;
    setInterval(() => {
      const cur = items[i]; cur.classList.remove('on'); cur.classList.add('off');
      setTimeout(() => cur.classList.remove('off'), 700);
      i = (i + 1) % items.length; items[i].classList.add('on');
    }, C.socialRotateSeconds * 1000);
  });

  // name banner: spins in every N minutes, holds, spins out, invisible in between
  document.querySelectorAll('[data-banner]').forEach(wrap => {
    wrap.querySelector('.hs').innerHTML = C.socials.map(s => `<span>${ICONS[s.platform]}${s.handle}</span>`).join('');
    if (preview) { wrap.classList.add('show'); return; }
    const every = (parseFloat(q.get('every')) || C.bannerEveryMinutes) * 60000;
    const hold = (parseFloat(q.get('hold')) || C.bannerHoldSeconds) * 1000;
    const cycle = () => {
      wrap.classList.remove('hide'); wrap.classList.add('show');
      setTimeout(() => { wrap.classList.remove('show'); wrap.classList.add('hide');
        setTimeout(() => wrap.classList.remove('hide'), 950); }, hold);
    };
    setTimeout(() => { cycle(); setInterval(cycle, every); }, C.bannerFirstDelaySeconds * 1000);
  });

  // countdown: add ?min=10 to the URL (default 5). Shows "Starting now" at zero.
  document.querySelectorAll('[data-countdown]').forEach(el => {
    const end = Date.now() + (parseFloat(q.get('min')) || 5) * 60000;
    const tick = () => {
      const s = Math.max(0, Math.round((end - Date.now()) / 1000));
      el.textContent = s ? `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}` : 'Starting now';
    };
    tick(); if (!preview) setInterval(tick, 250);
  });
})();
