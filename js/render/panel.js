// Panel layout: art SVG, speech bubbles and the panel figure.
// ---------- panel ----------
const NAMES={leo:{en:'Leo',zh:'乐乐',c:'#2F6FD6'},bit:{en:'Bit',zh:'比特',c:'#0F8576'},mia:{en:'Mia',zh:'米娅',c:'#C2416B'},wang:{en:'Ms. Wang',zh:'王老师',c:'#8C3B52'}};
function artSVG(p){
  if(!SCENES[p.bg]) console.warn('LBC: unknown scene',p.bg);
  const sc=SCENES[p.bg]||SCENES.room;let svg=sc.draw();const cm={};(p.cast||[]).forEach(c=>cm[c[0]]=c);
  if(p.holo){const b=cm.bit;
    if(b&&b[3]==='present'){const f=facing(b),o=b[4]||{},s=o.s||1.05,by=o.y||108;const ex=f<0?HOLO.x+HOLO.w:HOLO.x;const fx=b[1]+f*20*s;
      svg+=`<polygon points="${n1(fx)},${n1(by-6)} ${ex},${HOLO.y+26} ${ex},${HOLO.y+HOLO.h-26}" fill="#7DF9FF" opacity=".28"/>`;}
    svg+=holo(p.holo);}
  const front=(typeof FRONT_PROPS!=='undefined')?FRONT_PROPS:['phone','medal'];
  (p.props||[]).filter(q=>!front.includes(q[0])).forEach(q=>svg+=prop(q));
  (p.cast||[]).forEach(c=>{const [who,x,e,pose,o={}]=c;const f=facing(c);
    if(who==='bit') svg+=bit(x,o.y||108,f,o.s||1.05,e,pose); else svg+=person(who,x,242,f,o.s||LOOK[who].s,e,pose,o.g);});
  (p.props||[]).filter(q=>front.includes(q[0])).forEach(q=>svg+=prop(q));
  (p.fx||[]).forEach(f=>svg+=fxDraw(f,cm));
  return `<svg class="art" viewBox="0 0 400 250" aria-hidden="true" focusable="false">${svg}</svg>`;}
function bubbles(p){const cm={};(p.cast||[]).forEach(c=>cm[c[0]]=c);
  return (p.say||[]).map(([who,en,zh])=>{const body=hx({en,zh});
    if(who==='nar') return `<div class="cap">${body}</div>`;
    const c=cm[who];const x=c?c[1]:200;const side=x<150?'l':x>250?'r':'c';const N=NAMES[who];
    const name=MODE==='both'?`${N.en} · ${N.zh}`:pick(N);
    return `<div class="b ${side}"><span class="who" style="--c:${N.c}">${esc(name)}</span>${body}</div>`;}).join('');}
function panelHTML(p,i){return `<figure class="panel" style="--top:${SCENES[p.bg].top}"><span class="pn">${i+1}</span><div class="bubbles">${bubbles(p)}</div>${artSVG(p)}</figure>`;}

