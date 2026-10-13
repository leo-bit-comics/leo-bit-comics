// Shared drawing constants, colours, escaping, SVG text measuring/wrapping and arrows.
// ===== Drawing engine =====
const INK='#17182B', HT='#0B4F5C', HL='#18A3B5', HF='#ECFDFF', ZH_T='#3D7380', HOT='#C2416B', TEAL='#22B8A7';
const n1=v=>Math.round(v*10)/10;
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const isObj=t=>t!==null&&typeof t==='object';

// ---------- text measuring + wrapping for SVG ----------
function tw(str,size,mono){let w=0;for(const ch of str){const c=ch.codePointAt(0);
  if(c>=0x2E80) w+=size; else if(mono) w+=size*0.6; else if(ch===' ') w+=size*0.3;
  else if(/[A-Z]/.test(ch)) w+=size*0.64; else if(/[ilj.,:;'!|()]/.test(ch)) w+=size*0.32;
  else if(/[mwMW]/.test(ch)) w+=size*0.82; else w+=size*0.55;}return w*1.04;}
const NOSTART='，。！？、；：）》」』”’…%';
function wrap(s,maxW,size,mono){
  if(!maxW) return [s];
  const toks=String(s).match(/[^\s⺀-￿]+|\s+|[⺀-￿]/g)||[''];
  const lines=[];let cur='';
  for(const t of toks){
    if(/^\s+$/.test(t)){ if(cur) cur+=' '; continue; }
    const test=cur+t;
    if(tw(test,size,mono)>maxW && cur.trim() && !NOSTART.includes(t)){ lines.push(cur.trim()); cur=t; }
    else cur=test;
  }
  if(cur.trim()) lines.push(cur.trim());
  return lines.length?lines:[''];
}
// st: draw (possibly bilingual) text block whose TOP is at y. returns {s,h}
function st(x,y,txt,o={}){
  const size=o.size||11,a=o.a||'middle',fill=o.fill||HT,wt=o.w||700,maxW=o.maxW;
  const parts=[];
  if(!isObj(txt)) parts.push({t:String(txt),size,cls:o.mono?'sv-mono':'sv-en',fill});
  else{
    if(MODE!=='zh') parts.push({t:txt.en,size,cls:'sv-en',fill});
    if(MODE!=='en') parts.push({t:txt.zh,size:MODE==='both'?size*0.9:size,cls:'sv-zh',fill:MODE==='both'?(o.zfill||ZH_T):fill});
  }
  let out='',cy=y;
  for(const p of parts){
    for(const ln of wrap(p.t,maxW,p.size,o.mono&&!isObj(txt))){
      cy+=p.size;
      out+=`<text x="${n1(x)}" y="${n1(cy)}" text-anchor="${a}" font-size="${n1(p.size)}" fill="${p.fill}" font-weight="${wt}" class="${p.cls}">${esc(ln)}</text>`;
      cy+=p.size*0.24;
    }
  }
  return {s:out,h:cy-y};
}
const stH=(t,o)=>st(0,0,t,o).h;
function ah(x,y,ang,col=HL,sz=7){const a1=ang+2.62,a2=ang-2.62;return `<polygon points="${n1(x)},${n1(y)} ${n1(x+sz*Math.cos(a1))},${n1(y+sz*Math.sin(a1))} ${n1(x+sz*Math.cos(a2))},${n1(y+sz*Math.sin(a2))}" fill="${col}"/>`;}
function arrow(x1,y1,x2,y2,col=HL,w=2){const a=Math.atan2(y2-y1,x2-x1);return `<line x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2-Math.cos(a)*5)}" y2="${n1(y2-Math.sin(a)*5)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>`+ah(x2,y2,a,col);}


// ===== Science & math extension: extra icons, pictures, diagrams, scenes and props =====
const BLUE='#2F6FD6', CORAL='#FF5D5D', GOLD='#FFC83D', GREEN='#2BAE66', ORANGE='#F08A24';

