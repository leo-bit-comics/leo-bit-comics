// App: three views and their navigation (loaded last).
//   #home (or no hash)  → home: masthead, "continue reading", series cards, cast, parents' table
//   #<series>           → series page: description, start/continue button, episode list
//   #<series>-<n>       → episode reader (legacy #ep<n> = AI & Computers episode n)
// Navigation chrome lives OUTSIDE #app (see index.html): #bar (sticky top bar with breadcrumb,
// language switch, contents button and reading-progress line), #toc (contents drawer, a <dialog>),
// #dock (phone-only bottom bar in the reader: previous · contents · next).
// Links are real <a href="#..."> so the browser back button and gestures work; 'hashchange' drives route().
// localStorage: lb-mode (language), lb-series + lb-ep (last episode opened), lb-read (episodes read).
LBC.finalize();

const CAST=[
  {k:'leo',name:NAMES.leo,bio:T("13, lives in Shanghai. Loves football and video games. Curious about everything.","13岁，住在上海。爱踢足球、爱打游戏，对什么都好奇。")},
  {k:'bit',name:NAMES.bit,bio:T("A pocket-sized robot who lives in Leo's laptop. Named after the smallest unit of information.","住在乐乐笔记本电脑里的口袋机器人，名字来自最小的信息单位。")},
  {k:'mia',name:NAMES.mia,bio:T("Leo's classmate. Sharp and skeptical. Always asks: how do you know?","乐乐的同学。聪明、爱质疑，总爱问：你怎么知道？")},
];
let VIEW='home',SI=0,CUR=0;
const findS=id=>SERIES.findIndex(s=>s.id===id);
const $=id=>document.getElementById(id);
const store={get(k){try{return localStorage.getItem(k);}catch(e){return null;}},set(k,v){try{localStorage.setItem(k,v);}catch(e){}}};
loadMode();

// ---------- reading progress ----------
let READ=new Set();try{READ=new Set(JSON.parse(store.get('lb-read')||'[]'));}catch(e){}
const epKey=(si,e)=>SERIES[si].id+'-'+(e+1);
const isRead=(si,e)=>READ.has(epKey(si,e));
const readCount=si=>SERIES[si].episodes.reduce((n,_,e)=>n+(isRead(si,e)?1:0),0);
function markRead(si,e){const k=epKey(si,e);if(READ.has(k))return;READ.add(k);store.set('lb-read',JSON.stringify([...READ]));}
function lastOpened(){const si=findS(store.get('lb-series')||''),e=parseInt(store.get('lb-ep'),10);return si>=0&&e>=0&&e<SERIES[si].episodes.length?{si,e}:null;}
function nextUnread(si){const S=SERIES[si];for(let e=0;e<S.episodes.length;e++)if(!isRead(si,e))return e;return 0;}

// ---------- links and labels ----------
const hrefEp=(si,e)=>'#'+SERIES[si].id+'-'+(e+1), hrefS=si=>'#'+SERIES[si].id;
const clampN=(n,S)=>Math.min(S.episodes.length,Math.max(1,n))-1;
function epShort(e,n){return MODE==='zh'?`第${e+1}集 / 共${n}集`:MODE==='en'?`Ep ${e+1} / ${n}`:`Ep ${e+1}/${n} · 第${e+1}集`;}
const ICO={
  menu:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" fill="none"/></svg>',
  close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></svg>',
  home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5L12 4l9 7.5M6 10v9h4.5v-5h3v5H18v-9" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" fill="none"/></svg>',
  prev:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
  next:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
  tick:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
};
const bitHead=()=>`<svg viewBox="-38 -52 76 70" aria-hidden="true">${bit(0,0,1,1,'happy','idle')}</svg>`;
const seriesIcon=s=>`<svg viewBox="-13 -13 26 26" aria-hidden="true"><circle r="12.5" fill="#fff" stroke="#17182B" stroke-width="1.5"/>${icon(s.icon,0,0,0.85)}</svg>`;
const langSwitch=(cls='')=>`<div class="langs ${cls}" role="group" aria-label="${esc(pick(UI.lang))}">${[['both','EN + 中文'],['en','English'],['zh','中文']].map(([m,l])=>`<button type="button" data-mode="${m}" aria-pressed="${MODE===m}">${l}</button>`).join('')}</div>`;
function portrait(k){if(k==='bit') return `<svg viewBox="-56 -60 112 128" aria-hidden="true">${bit(0,0,1,1.25,'happy','wave')}</svg>`;
  return `<svg viewBox="-62 -212 124 220" aria-hidden="true">${person(k,0,0,1,1,k==='mia'?'smirk':'happy',k==='leo'?'wave':'idle')}</svg>`;}
function neighbour(d){let si=SI,e=CUR+d;if(e<0){si--;if(si<0)return null;e=SERIES[si].episodes.length-1;}else if(e>=SERIES[si].episodes.length){si++;if(si>=SERIES.length)return null;e=0;}return {si,e};}
const epLabel=n=>n?`${n.si!==SI?hx(SERIES[n.si].t)+' · ':''}${hx(SERIES[n.si].episodes[n.e].t)}`:'';

// ---------- top bar ----------
function renderBar(){const S=SERIES[SI];let crumbs;
  if(VIEW==='home') crumbs=`<span class="crumb-home">${hx(UI.tagShort)}</span>`;
  else crumbs=`<a class="crumb-s" href="${hrefS(SI)}" style="--c:${S.color}"${VIEW==='series'?' aria-current="page"':''}><i></i><span class="t">${hx(S.t)}</span></a>`+(VIEW==='episode'?`<span class="crumb-e" aria-current="page">${epShort(CUR,S.episodes.length)}</span>`:'');
  $('bar').innerHTML=`<div class="bar-in"><a class="brand" href="#home" aria-label="Leo &amp; Bit · ${esc(pick(UI.home))}">${bitHead()}<span>Leo &amp; Bit</span></a>
    <nav class="crumbs" aria-label="${esc(pick(UI.where))}">${crumbs}</nav>${langSwitch('sm')}
    <button type="button" class="menu-btn" data-toc aria-haspopup="dialog" aria-controls="toc" aria-expanded="${$('toc').open}">${ICO.menu}<span>${hx(UI.contents)}</span></button></div>
    <div class="prog" style="--sc:${S.color}"><i></i></div>`;
  $('bar').hidden=false;}

// ---------- contents drawer ----------
function renderToc(){const t=$('toc');
  t.innerHTML=`<div class="toc-head"><h2>${hx(UI.contents)}</h2><button type="button" class="toc-close" data-close aria-label="${esc(pick(UI.close))}">${ICO.close}</button></div>
  <div class="toc-body">${langSwitch()}<a class="toc-home" href="#home"${VIEW==='home'?' aria-current="page"':''}>${ICO.home}<span>${hx(UI.home)}</span></a>
  ${SERIES.map((s,si)=>`<details${si===SI&&VIEW!=='home'?' open':''} style="--c:${s.color}"><summary>${seriesIcon(s)}<b>${hx(s.t)}</b><span class="cnt">${readCount(si)}/${s.episodes.length}</span></summary>
    <a class="toc-overview" href="${hrefS(si)}"${VIEW==='series'&&si===SI?' aria-current="page"':''}>${hx(UI.overview)}</a>
    <ol>${s.episodes.map((e,i)=>`<li${isRead(si,i)?' class="done"':''}><a href="${hrefEp(si,i)}"${VIEW==='episode'&&si===SI&&i===CUR?' aria-current="page"':''}><span class="num">${i+1}</span><span class="tt">${hx(e.t)}</span>${isRead(si,i)?`<span class="tick" title="${esc(pick(UI.readMark))}">${ICO.tick}</span>`:''}</a></li>`).join('')}</ol></details>`).join('')}</div>`;}
let tocOpener=null;
function openToc(){const t=$('toc');renderToc();tocOpener=document.activeElement;if(!t.open){t.showModal();}
  const cur=t.querySelector('[aria-current="page"]');if(cur){cur.scrollIntoView({block:'center'});cur.focus({preventScroll:true});}else t.querySelector('.toc-close').focus();syncExpanded();}
function closeToc(){const t=$('toc');if(t.open)t.close();}
function syncExpanded(){document.querySelectorAll('[data-toc]').forEach(b=>b.setAttribute('aria-expanded',String($('toc').open)));}

// ---------- phone dock (reader only) ----------
function renderDock(){const d=$('dock');if(VIEW!=='episode'){d.hidden=true;d.innerHTML='';return;}
  const S=SERIES[SI],pv=neighbour(-1),nx=neighbour(1);
  const arrow=(n,k,lab)=>n?`<a class="dk-arrow" href="${hrefEp(n.si,n.e)}" aria-label="${esc(pick(lab))}: ${esc(pick(SERIES[n.si].episodes[n.e].t))}">${ICO[k]}</a>`:`<span class="dk-arrow" aria-hidden="true">${ICO[k]}</span>`;
  d.innerHTML=arrow(pv,'prev',UI.prev)+`<button type="button" class="dk-mid" data-toc aria-haspopup="dialog" aria-controls="toc" aria-expanded="false" style="--c:${S.color}"><i></i><span>${epShort(CUR,S.episodes.length)}</span>${ICO.menu}</button>`+arrow(nx,'next',UI.next);
  d.hidden=false;}

// ---------- views ----------
function homeView(){const L=lastOpened();
  let h=`<header class="mast"><div><h1 class="logo">Leo &amp; Bit</h1><p class="logo-zh">乐乐和比特的科学大冒险</p><p class="tag">${hx(UI.tag)}</p>${langSwitch()}</div>
    <svg class="mast-art" viewBox="0 -215 260 225" aria-hidden="true">${person('leo',80,0,1,1,'grin','point')}${bit(200,-120,-1,1.3,'happy','wave')}</svg></header>`;
  if(L){const S=SERIES[L.si];h+=`<a class="continue" href="${hrefEp(L.si,L.e)}" style="--c:${S.color}">${seriesIcon(S)}<span class="c-txt"><small>${hx(UI.cont)}</small><b>${hx(S.episodes[L.e].t)}</b><span class="c-sub">${hx(S.t)} · ${epShort(L.e,S.episodes.length)}</span></span><span class="c-go">${ICO.next}</span></a>`;}
  h+=`<h2 class="sh">${hx(UI.series)}</h2><nav class="series" aria-label="${esc(pick(UI.series))}">${SERIES.map((s,i)=>{const r=readCount(i),n=s.episodes.length;
    return `<a class="sr-btn" href="${hrefS(i)}" style="--c:${s.color}"><span class="band">${seriesIcon(s)}<b>${hx(s.t)}</b></span><span class="meta">${hx(s.grade)}<span class="cnt">${cnt(n)}</span>${r?`<span class="meter" title="${r}/${n}"><i style="width:${Math.round(100*r/n)}%"></i></span>`:''}</span></a>`;}).join('')}</nav>`;
  h+=`<h2 class="sh">${hx(UI.cast)}</h2><div class="cast">${CAST.map(c=>`<div class="cc" style="--c:${c.name.c}">${portrait(c.k)}<div><h3>${hx(c.name)}</h3><p>${hx(c.bio)}</p></div></div>`).join('')}</div>`;
  h+=parentsTable();return h;}
function seriesView(){const S=SERIES[SI],r=readCount(SI),n=S.episodes.length,L=lastOpened(),start=(L&&L.si===SI)?L.e:nextUnread(SI);
  const label=(r>0||(L&&L.si===SI))?UI.cont:UI.start;
  let h=`<section class="sv" style="--c:${S.color};--sc:${S.color}"><div class="sv-head"><div class="sv-band">${seriesIcon(S)}<h1>${hx(S.t)}</h1></div>
    <div class="sv-body"><p class="grade">${hx(S.grade)}</p><p class="sv-desc">${hx(S.desc)}</p>
    <div class="sv-actions"><a class="cta" href="${hrefEp(SI,start)}">${hx(label)}<span class="cta-ep">${epShort(start,n)}</span>${ICO.next}</a><span class="sv-prog">${r}/${n} ${hx(UI.readMark)}</span></div></div></div>
    <h2 class="sh">${hx(UI.eps)}</h2><ol class="eps" style="--sc:${S.color}">${S.episodes.map((e,i)=>`<li><a class="ep-btn${isRead(SI,i)?' done':''}" href="${hrefEp(SI,i)}"><span class="num">${i+1}</span><span class="tt">${hx(e.t)}</span>${isRead(SI,i)?`<span class="tick" title="${esc(pick(UI.readMark))}">${ICO.tick}</span>`:''}</a></li>`).join('')}</ol>
    <h2 class="sh">${hx(UI.other)}</h2><nav class="chips" aria-label="${esc(pick(UI.other))}">${SERIES.map((s,i)=>i===SI?'':`<a href="${hrefS(i)}" style="--c:${s.color}"><i></i>${hx(s.t)}</a>`).join('')}</nav></section>`;
  return h;}
function episodeView(){const S=SERIES[SI],E=S.episodes[CUR];
  if(!LBC.isLoaded(E)) return `<section id="episode" style="--sc:${S.color}"><p class="loading">${hx(UI.loading)}</p></section>`;
  let h=`<section id="episode" style="--sc:${S.color}"><nav class="bc" aria-label="${esc(pick(UI.where))}"><a href="#home">${hx(UI.home)}</a><span aria-hidden="true">›</span><a href="${hrefS(SI)}">${hx(S.t)}</a><span aria-hidden="true">›</span><span aria-current="page">${epShort(CUR,S.episodes.length)}</span></nav>
    <div class="ep-head"><span class="ep-no">${epNo(CUR)}</span><h1 class="ep-title">${hx(E.t)}</h1><span class="ep-topic">${hx(E.topic)}</span></div>`;
  h+=`<div class="grid">${E.panels.map(panelHTML).join('')}</div>`;
  h+=`<div class="after"><div class="box"><h3>${hx(UI.terms)}</h3><dl class="terms">${E.terms.map(t=>`<div class="term"><dt>${hx({en:t[0],zh:t[1]})}</dt><dd>${hx({en:t[2],zh:t[3]})}</dd></div>`).join('')}</dl></div>
    <div class="box try"><h3>${hx(UI.tryIt)}</h3><p>${hx(E.tryIt)}</p><div class="note">${hx(UI.note)}</div></div></div>`;
  const pv=neighbour(-1),nx=neighbour(1);
  const btn=(n,cls,arrowL,lab)=>n?`<a class="${cls}" href="${hrefEp(n.si,n.e)}" rel="${cls==='nx'?'next':'prev'}"><small>${arrowL==='l'?'← ':''}${hx(lab)}${arrowL==='r'?' →':''}</small>${epLabel(n)}</a>`:'<span></span>';
  h+=`<nav class="nav" aria-label="${esc(pick(UI.eps))}">${btn(pv,'pv','l',UI.prev)}${btn(nx,'nx','r',UI.next)}</nav>
    <p class="back"><a href="${hrefS(SI)}">${hx(UI.allEps)}: ${hx(S.t)}</a></p></section>`;
  return h;}
function parentsTable(){return `<h2 class="sh">${hx(UI.parents)}</h2><div class="map-wrap"><table class="map"><thead><tr><th>${hx(UI.thS)}</th><th>${hx(UI.thL)}</th><th>${hx(UI.thT)}</th></tr></thead><tbody>${SERIES.map(s=>`<tr><td>${hx(s.t)}</td><td>${hx(s.grade)}</td><td>${hx(s.desc)}</td></tr>`).join('')}</tbody></table></div>`;}

// render(): draws the current VIEW plus the navigation chrome. scripts/check.py sets VIEW/SI/CUR and calls it.
function render(){
  document.documentElement.lang=MODE==='zh'?'zh-CN':'en';
  document.body.className='mode-'+MODE+(VIEW==='episode'?' reading':'');
  const app=$('app');
  app.innerHTML=(VIEW==='home'?homeView():VIEW==='series'?seriesView():episodeView())+`<p class="foot">${hx(UI.foot)}</p><p class="foot">${hx(UI.ai)}</p>`;
  renderBar();renderDock();if($('toc').open)renderToc();
  document.title=VIEW==='home'?'Leo & Bit Comics':VIEW==='series'?`${pick(SERIES[SI].t)} · Leo & Bit`:`${pick(SERIES[SI].episodes[CUR].t)} · Leo & Bit`;
  onScroll();}

// ---------- routing ----------
function parseHash(){const h=location.hash;let m;
  if((m=/^#ep(\d+)$/.exec(h)))return {v:'episode',si:0,e:clampN(+m[1],SERIES[0])};
  if((m=/^#([a-z]+)-(\d+)$/.exec(h))){const s=findS(m[1]);if(s>=0)return {v:'episode',si:s,e:clampN(+m[2],SERIES[s])};}
  if((m=/^#([a-z]+)$/.exec(h))){const s=findS(m[1]);if(s>=0)return {v:'series',si:s,e:0};}
  return {v:'home',si:SI,e:CUR};}
let SEQ=0;
function route(){const r=parseHash();VIEW=r.v;SI=r.si;CUR=r.e;closeToc();
  if(VIEW==='episode'){store.set('lb-series',SERIES[SI].id);store.set('lb-ep',String(CUR));}
  const my=++SEQ;render();window.scrollTo(0,0);
  if(VIEW!=='episode')return;
  LBC.loadEpisode(SERIES[SI].id,CUR+1).then(()=>{if(my!==SEQ)return;render();window.scrollTo(0,0);
    const nx=neighbour(1);if(nx){const f=()=>LBC.loadEpisode(SERIES[nx.si].id,nx.e+1).catch(()=>{});
      if(window.requestIdleCallback)requestIdleCallback(f,{timeout:2000});else setTimeout(f,200);}}).catch(()=>{});}
// go(): kept for older callers; navigates by changing the hash (adds a history entry).
function go(si,e){location.hash=hrefEp(si,e);}

// Reading progress line in the top bar; an episode counts as read once you reach its last 15%.
function onScroll(){const bar=document.querySelector('.prog i');if(!bar)return;
  if(VIEW!=='episode'||!LBC.isLoaded(SERIES[SI].episodes[CUR])){bar.style.width='0';return;}
  const max=document.documentElement.scrollHeight-innerHeight,p=max>0?Math.min(1,scrollY/max):1;bar.style.width=(p*100).toFixed(1)+'%';
  if(p>0.85&&!isRead(SI,CUR)){markRead(SI,CUR);renderDock();}}
addEventListener('scroll',onScroll,{passive:true});
addEventListener('hashchange',route);

// ---------- events ----------
document.addEventListener('click',ev=>{const t=ev.target.closest('button,a');if(!t)return;
  if(t.dataset.mode){setMode(t.dataset.mode);if(VIEW!=='episode'||LBC.isLoaded(SERIES[SI].episodes[CUR]))render();return;}
  if(t.classList.contains('skip')){ev.preventDefault();$('app').focus();return;}
  if(t.hasAttribute('data-toc')){openToc();return;}
  if(t.hasAttribute('data-close')){closeToc();return;}
  if(t.tagName==='A'&&t.getAttribute('href')===location.hash&&location.hash){ev.preventDefault();closeToc();window.scrollTo(0,0);}});
$('toc').addEventListener('click',ev=>{if(ev.target===$('toc'))closeToc();});
$('toc').addEventListener('close',()=>{syncExpanded();if(tocOpener&&document.contains(tocOpener))tocOpener.focus({preventScroll:true});tocOpener=null;});
document.addEventListener('keydown',ev=>{if(VIEW!=='episode'||$('toc').open||ev.altKey||ev.ctrlKey||ev.metaKey||ev.shiftKey)return;
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName))return;
  const n=ev.key==='ArrowLeft'?neighbour(-1):ev.key==='ArrowRight'?neighbour(1):null;if(n){ev.preventDefault();location.hash=hrefEp(n.si,n.e);}});
route();
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{if(VIEW!=='episode'||LBC.isLoaded(SERIES[SI].episodes[CUR]))render();});
