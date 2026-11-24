let F = {}; const queue = []; let busy = false;
const $ = id => document.getElementById(id);
window.addEventListener('onWidgetLoad', o => { F = o.detail.fieldData || {}; });

const KINDS = {
  'follower-latest':   e => ['New follower', e.name, ''],
  'subscriber-latest': e => [e.gifted ? 'Gift sub' : 'New subscriber', e.name, e.amount > 1 ? `${e.amount} months` : ''],
  'cheer-latest':      e => ['Cheer', e.name, `${e.amount} bits`],
  'raid-latest':       e => ['Raid incoming', e.name, `with ${e.amount} raiders`],
  'tip-latest':        e => ['Tip', e.name, `$${Number(e.amount).toFixed(2)}`]
};
window.addEventListener('onEventReceived', o => {
  const make = KINDS[o.detail.listener]; if (!make) return;
  const key = o.detail.listener.split('-')[0];
  if (F['show_' + key] === 'no') return;
  queue.push(make(o.detail.event)); next();
});
function next(){
  if (busy || !queue.length) return; busy = true;
  const [kind, who, extra] = queue.shift();
  $('kind').textContent = kind; $('who').textContent = who; $('extra').textContent = extra;
  const card = $('card'); card.className = 'card'; void card.offsetWidth; card.className = 'card in';
  if (F.sound) { const s = $('snd'); s.src = F.sound; s.volume = (F.volume ?? 50) / 100; s.play().catch(()=>{}); }
  setTimeout(() => { card.className = 'card out';
    setTimeout(() => { busy = false; next(); }, 700); }, (F.duration || 6) * 1000);
}
