import os, sys
root = sys.argv[1]
HEAD = '''<!doctype html><html><head><meta charset="utf-8"><title>{t}</title>
<link rel="stylesheet" href="../shared/theme.css"><script src="../shared/config.js"></script></head>
<body class="{cls}">'''
TAIL = '<script src="../shared/common.js"></script></body></html>\n'
AMB = '<div class="ambient"><div class="blob a"></div><div class="blob b"></div><div class="blob c"></div></div>'

def scene(kicker, title, sub, extra):
    return AMB + f'''<div class="center"><img class="logo-big" data-logo alt="">
<div class="kicker">{kicker}</div><div class="title">{title}</div><div class="sub">{sub}</div>{extra}</div>
<div class="social-row" data-socials></div>'''

SCENES = {
 'starting-soon': ('Starting Soon', scene('welcome in','Starting soon<span class="dot">.</span>','grab a snack — we\'re about to go live','<div class="count" data-countdown></div>')),
 'brb':           ('Be Right Back', scene('hold tight','Be right back<span class="dot">.</span>','don\'t go anywhere','<div class="loader"><i></i><i></i><i></i></div>')),
 'ending':        ('Stream Ending', scene('thanks for hanging out','See you next time<span class="dot">.</span>','follow so you don\'t miss the next one','')),
}
for plat, cls in (('twitch','tw scene'),('tiktok','tt scene')):
    for name,(t,body) in SCENES.items():
        open(f'{root}/{plat}/{name}.html','w').write(HEAD.format(t=t,cls=cls)+body+TAIL)

BANNER = '''<div class="banner-wrap" data-banner style="{pos}"><div class="banner"><img data-logo alt="">
<div><div class="nm" data-name></div><div class="hs"></div></div></div></div>'''
TAG = '<div class="tag" style="{pos}"><img data-logo alt=""><div class="rot" data-rotator></div></div>'

# Twitch gameplay: raised bottom-right facecam, chat panel below it
tw_game = (TAG.format(pos='right:40px;top:410px') +
  '<div class="frame" style="right:40px;top:470px;width:448px;height:252px"></div>' +
  '<div class="panel" style="right:40px;top:744px;width:448px;height:296px"></div>' +
  BANNER.format(pos='left:40px;bottom:40px'))
open(f'{root}/twitch/gameplay.html','w').write(HEAD.format(t='Gameplay',cls='tw')+tw_game+TAIL)

# Twitch Just Chatting: big cam left, chat right
tw_jc = (AMB + '<div class="frame" style="left:60px;top:150px;width:1280px;height:720px"></div>' +
  '<div class="panel" style="left:1380px;top:150px;width:480px;height:870px"></div>' +
  '<div style="position:absolute;left:60px;top:56px;display:flex;align-items:center;gap:18px;z-index:2"><img data-logo style="width:62px"><div style="font-size:44px;font-weight:800">Just Chatting</div></div>' +
  TAG.format(pos='left:60px;top:900px') +
  BANNER.format(pos='left:640px;top:890px'))
open(f'{root}/twitch/just-chatting.html','w').write(HEAD.format(t='Just Chatting',cls='tw scene')+tw_jc+TAIL)

# TikTok gameplay (1080x1920): cam top-left, inside TikTok's safe zone
tt_game = (TAG.format(pos='left:60px;top:190px') +
  '<div class="frame" style="left:60px;top:250px;width:560px;height:315px"></div>' +
  BANNER.format(pos='left:60px;top:1300px'))
open(f'{root}/tiktok/gameplay.html','w').write(HEAD.format(t='Gameplay',cls='tt')+tt_game+TAIL)
