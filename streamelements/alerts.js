let F = {}; const queue = []; let busy = false;
const $ = id => document.getElementById(id);
window.addEventListener('onWidgetLoad', o => { F = o.detail.fieldData || {}; });

const KINDS = {
  'follower-latest':   e => ['follower', 'New follower', e.name, '', ''],
  'subscriber-latest': e => {
    const subLabel = e.gifted ? (e.sender ? `Gift sub from ${e.sender}` : 'Gift sub') : 'New subscriber';
    const extra = e.amount > 1 ? `${e.amount} months` : '';
    return ['subscriber', subLabel, e.name, extra, e.message || ''];
  },
  'cheer-latest':      e => ['cheer', 'Cheer', e.name, `${e.amount} bits`, e.message || ''],
  'raid-latest':       e => ['raid', 'Raid incoming', e.name, `with ${e.amount} raiders`, ''],
  'tip-latest':        e => ['tip', 'Tip', e.name, `$${Number(e.amount).toFixed(2)}`, e.message || '']
};

window.addEventListener('onEventReceived', o => {
  const make = KINDS[o.detail.listener]; if (!make) return;
  const key = o.detail.listener.split('-')[0];
  if (F['show_' + key] === 'no') return;
  queue.push(make(o.detail.event)); next();
});

function next(){
  if (busy || !queue.length) return; busy = true;
  const [type, kind, who, extra, msg] = queue.shift();
  const dur = Math.max(2, Number(F.duration) || 6);
  $('kind').textContent = kind;
  $('who').textContent = who;
  $('extra').textContent = extra;
  $('msg').textContent = F.show_message === 'no' ? '' : msg;

  const card = $('card');
  card.dataset.type = type;
  card.style.setProperty('--dur', `${dur}s`);
  card.className = 'card'; void card.offsetWidth; card.className = 'card in';

  if (F.sound) {
    const s = $('snd');
    s.src = F.sound;
    s.volume = (F.volume ?? 50) / 100;
    s.play().catch(()=>{});
  }

  setTimeout(() => {
    card.className = 'card out';
    setTimeout(() => { busy = false; next(); }, 650);
  }, dur * 1000);
}
