// App: cast, page rendering, routing (#<series>-<n>, legacy #ep<n>), navigation and localStorage.
LBC.finalize();

const CAST=[
  {k:'leo',name:NAMES.leo,bio:T("13, lives in Shanghai. Loves football and video games. Curious about everything.","13岁，住在上海。爱踢足球、爱打游戏，对什么都好奇。")},
  {k:'bit',name:NAMES.bit,bio:T("A pocket-sized robot who lives in Leo's laptop. Named after the smallest unit of information.","住在乐乐笔记本电脑里的口袋机器人，名字来自最小的信息单位。")},
  {k:'mia',name:NAMES.mia,bio:T("Leo's classmate. Sharp and skeptical. Always asks: how do you know?","乐乐的同学。聪明、爱质疑，总爱问：你怎么知道？")},
];
let SI=0,CUR=0;
const findS=id=>SERIES.findIndex(s=>s.id===id);
loadMode();
try{const ss=findS(localStorage.getItem('lb-series')||'');if(ss>=0)SI=ss;const e=parseInt(localStorage.getItem('lb-ep'),10);if(e>=0&&e<SERIES[SI].episodes.length)CUR=e;}catch(e){}
(function(){const h=location.hash;let m=/^#ep(\d+)$/.exec(h);if(m){SI=0;CUR=Math.min(SERIES[0].episodes.length,Math.max(1,+m[1]))-1;return;}
  m=/^#([a-z]+)-(\d+)$/.exec(h);if(m){const s=findS(m[1]);if(s>=0){SI=s;CUR=Math.min(SERIES[s].episodes.length,Math.max(1,+m[2]))-1;}}})();

function portrait(k){if(k==='bit') return `<svg viewBox="-56 -60 112 128" aria-hidden="true">${bit(0,0,1,1.25,'happy','wave')}</svg>`;
  return `<svg viewBox="-62 -212 124 220" aria-hidden="true">${person(k,0,0,1,1,k==='mia'?'smirk':'happy',k==='leo'?'wave':'idle')}</svg>`;}
function render(){
  const app=document.getElementById('app');document.documentElement.lang=MODE==='zh'?'zh-CN':'en';
  document.body.className='mode-'+MODE;
  const S=SERIES[SI],E=S.episodes[CUR];
  const langs=[['both','EN + 中文'],['en','English'],['zh','中文']].map(([m,l])=>`<button type="button" data-mode="${m}" aria-pressed="${MODE===m}">${l}</button>`).join('');
  let h=`<header class="mast"><div><h1 class="logo">Leo &amp; Bit</h1><p class="logo-zh">乐乐和比特的科学大冒险</p><p class="tag">${hx(UI.tag)}</p><div class="langs" role="group" aria-label="Language">${langs}</div></div>
    <svg class="mast-art" viewBox="0 -215 260 225" aria-hidden="true">${person('leo',80,0,1,1,'grin','point')}${bit(200,-120,-1,1.3,'happy','wave')}</svg></header>`;
  h+=`<h2 class="sh">${hx(UI.cast)}</h2><div class="cast">${CAST.map(c=>`<div class="cc" style="--c:${c.name.c}">${portrait(c.k)}<div><h3>${hx(c.name)}</h3><p>${hx(c.bio)}</p></div></div>`).join('')}</div>`;
  h+=`<h2 class="sh">${hx(UI.series)}</h2><nav class="series" aria-label="Series">${SERIES.map((s,i)=>`<button type="button" class="sr-btn" data-series="${i}" aria-current="${i===SI}" style="--c:${s.color}"><span class="band"><svg viewBox="-13 -13 26 26" aria-hidden="true"><circle r="12.5" fill="#fff" stroke="#17182B" stroke-width="1.5"/>${icon(s.icon,0,0,0.85)}</svg><b>${hx(s.t)}</b></span><span class="meta">${hx(s.grade)}<span class="cnt">${cnt(s.episodes.length)}</span></span></button>`).join('')}</nav>`;
  h+=`<h2 class="sh">${hx(S.t)}</h2><p class="grade">${hx(S.desc)}</p><nav class="eps" aria-label="Episodes" style="margin-top:12px;--sc:${S.color}">${S.episodes.map((e,i)=>`<button type="button" class="ep-btn" data-ep="${i}" aria-current="${i===CUR}"><span class="num">${i+1}</span><span class="tt">${hx(e.t)}</span></button>`).join('')}</nav>`;
  h+=`<section id="episode" style="--sc:${S.color}"><div class="ep-head"><span class="ep-no">${epNo(CUR)}</span><h2 class="ep-title">${hx(E.t)}</h2><span class="ep-topic">${hx(E.topic)}</span></div>`;
  h+=`<div class="grid">${E.panels.map(panelHTML).join('')}</div>`;
  h+=`<div class="after"><div class="box"><h3>${hx(UI.terms)}</h3><dl class="terms">${E.terms.map(t=>`<div class="term"><dt>${hx({en:t[0],zh:t[1]})}</dt><dd>${hx({en:t[2],zh:t[3]})}</dd></div>`).join('')}</dl></div>
    <div class="box try"><h3>${hx(UI.tryIt)}</h3><p>${hx(E.tryIt)}</p><div class="note">${hx(UI.note)}</div></div></div>`;
  const pv=neighbour(-1),nx=neighbour(1);const lab=(n)=>n?`${n.si!==SI?hx(SERIES[n.si].t)+' · ':''}${hx(SERIES[n.si].episodes[n.e].t)}`:'';
  h+=`<div class="nav"><button type="button" data-go="${pv?pv.si+':'+pv.e:''}" ${pv?'':'disabled'}><small>← ${hx(UI.prev)}</small>${lab(pv)}</button><button type="button" data-go="${nx?nx.si+':'+nx.e:''}" ${nx?'':'disabled'}><small>${hx(UI.next)} →</small>${lab(nx)}</button></div></section>`;
  h+=`<h2 class="sh">${hx(UI.parents)}</h2><div class="map-wrap"><table class="map"><thead><tr><th>${hx(UI.thS)}</th><th>${hx(UI.thL)}</th><th>${hx(UI.thT)}</th></tr></thead><tbody>${SERIES.map(s=>`<tr><td>${hx(s.t)}</td><td>${hx(s.grade)}</td><td>${hx(s.desc)}</td></tr>`).join('')}</tbody></table></div>`;
  h+=`<p class="foot">${hx(UI.foot)}</p>`;
  h+=`<p class="foot">${hx(UI.ai)}</p>`;
  app.innerHTML=h;
}
function neighbour(d){let si=SI,e=CUR+d;if(e<0){si--;if(si<0)return null;e=SERIES[si].episodes.length-1;}else if(e>=SERIES[si].episodes.length){si++;if(si>=SERIES.length)return null;e=0;}return {si,e};}
function go(si,e,scroll,target){SI=si;CUR=e;try{localStorage.setItem('lb-series',SERIES[si].id);localStorage.setItem('lb-ep',String(e));}catch(err){}
  try{history.replaceState(null,'','#'+SERIES[si].id+'-'+(e+1));}catch(err){}
  render();if(scroll){const el=document.getElementById(target||'episode');if(el)el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}}
document.addEventListener('click',ev=>{const t=ev.target.closest('button');if(!t)return;
  if(t.dataset.mode){setMode(t.dataset.mode);render();}
  else if(t.dataset.series!==undefined){go(+t.dataset.series,0,false);}
  else if(t.dataset.ep!==undefined) go(SI,+t.dataset.ep,true);
  else if(t.dataset.go){const [a,b]=t.dataset.go.split(':');go(+a,+b,true);}});
render();
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>render());
