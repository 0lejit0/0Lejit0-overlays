import os, sys
root = sys.argv[1]
HEAD = '''<!doctype html><html><head><meta charset="utf-8"><title>{t}</title>
<link rel="stylesheet" href="../shared/theme.css"><script src="../shared/config.js"></script></head>
<body class="{cls}">'''
TAIL = '<script src="../shared/common.js"></script></body></html>\n'
AMB = '<div class="ambient"><div class="blob a"></div><div class="blob b"></div><div class="blob c"></div></div>'

def scene(key, kicker, title, sub, extra):
    return AMB + f'''<div class="center" data-scene="{key}"><img class="logo-big" data-logo alt="">
<div class="kicker">{kicker}</div><div class="title">{title}</div><div class="sub">{sub}</div>{extra}</div>
<div class="social-row" data-socials></div>'''

COUNT = '<div class="count-wrap"><div class="count" data-countdown></div><div class="count-bar"><div class="count-fill" data-countdown-fill></div></div></div>'

SCENES = {
 'starting-soon': ('Starting Soon', scene('starting-soon','welcome in','Starting soon<span class="dot">.</span>','grab a snack — we\'re about to go live',COUNT)),
 'brb':           ('Be Right Back', scene('brb','hold tight','Be right back<span class="dot">.</span>','don\'t go anywhere','<div class="loader"><i></i><i></i><i></i></div>')),
 'ending':        ('Stream Ending', scene('ending','thanks for hanging out','See you next time<span class="dot">.</span>','follow so you don\'t miss the next one','')),
}
for plat, cls in (('twitch','tw scene'),('tiktok','tt scene')):
    for name,(t,body) in SCENES.items():
        open(f'{root}/{plat}/{name}.html','w').write(HEAD.format(t=t,cls=cls)+body+TAIL)

BANNER = '''<div class="banner-wrap" data-banner style="{pos}"><div class="banner"><img data-logo alt="">
<div><div class="nm" data-name></div><div class="hs"></div></div></div></div>'''
TAG = '<div class="tag" style="{pos}"><img data-logo alt=""><div class="rot" data-rotator></div></div>'

# Twitch Just Chatting: big cam left, chat right
tw_jc = (AMB + '<div class="frame" style="left:60px;top:150px;width:1280px;height:720px"></div>' +
  '<div class="panel" style="left:1380px;top:150px;width:480px;height:870px"><div class="panel-hdr">Chat</div></div>' +
  '<div style="position:absolute;left:60px;top:56px;display:flex;align-items:center;gap:18px;z-index:2"><img data-logo style="width:62px"><div style="font-size:44px;font-weight:800">Just Chatting</div></div>' +
  TAG.format(pos='left:60px;top:900px') +
  BANNER.format(pos='left:640px;top:890px'))
open(f'{root}/twitch/just-chatting.html','w').write(HEAD.format(t='Just Chatting',cls='tw scene')+tw_jc+TAIL)

# TikTok gameplay (1080x1920): cam + transparent Twitch chat side-by-side at top safe zone
tt_game = (HEAD.format(t='Gameplay — TikTok Fullscreen',cls='tt').replace('</head>', '<style>.panel.transparent{background:transparent;backdrop-filter:none}</style></head>') +
  TAG.format(pos='left:48px;top:140px') +
  '<div class="frame" style="left:48px;top:190px;width:480px;height:270px"><div class="panel-hdr">Cam</div></div>' +
  '<div class="panel transparent" style="left:552px;top:190px;width:480px;height:270px"><div class="panel-hdr">Twitch Chat</div></div>' +
  BANNER.format(pos='left:48px;bottom:420px') + TAIL)
open(f'{root}/tiktok/gameplay.html','w').write(tt_game)
