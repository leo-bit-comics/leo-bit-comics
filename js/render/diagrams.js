// Hologram diagrams: DIAG.<type>(d,B) and holo(d).
// ---------- hologram diagrams ----------
const DIAG={};
DIAG.flow=(d,B)=>{let s='';const n=d.steps.length;
  const fo={size:10,maxW:B.w,fill:HOT};const footH=d.foot?stH(d.foot,fo)+4:0;const H=B.h-footH;
  if(d.dir==='v'){const rh=H/n,r=Math.min(15,rh*0.36);
    d.steps.forEach((it,i)=>{const cy=B.y+rh*(i+.5),cx=B.x+r+1;
      s+=`<circle cx="${n1(cx)}" cy="${n1(cy)}" r="${n1(r)}" fill="#fff" stroke="${HL}" stroke-width="2"/>`+icon(it.i,cx,cy,r/13);
      const o={size:10.5,maxW:B.w-2*r-10,a:'start'};s+=st(cx+r+8,cy-stH(it.l,o)/2,it.l,o).s;
      if(i<n-1) s+=arrow(cx,cy+r+3,cx,cy+rh-r-3);});
  }else{const cw=B.w/n,r=Math.min(19,cw*0.3);
    const lo={size:10.5,maxW:cw-4};const lh=Math.max(...d.steps.map(it=>stH(it.l,lo)));
    const top=B.y+Math.max(0,(H-(2*r+8+lh))/2);const cy=top+r;
    d.steps.forEach((it,i)=>{const cx=B.x+cw*(i+.5);
      s+=`<circle cx="${n1(cx)}" cy="${n1(cy)}" r="${n1(r)}" fill="#fff" stroke="${HL}" stroke-width="2"/>`+icon(it.i,cx,cy,r/13);
      s+=st(cx,cy+r+6,it.l,lo).s;
      if(i<n-1) s+=arrow(cx+r+4,cy,cx+cw-r-4,cy);});
  }
  if(d.foot) s+=st(B.x+B.w/2,B.y+B.h-footH+4,d.foot,fo).s;
  return s;};
DIAG.list=(d,B)=>{let s='';const n=d.items.length,rh=B.h/n,size=d.size||10.5;
  d.items.forEach((it,i)=>{const cy=B.y+rh*(i+.5),mx=B.x+9;
    if(d.num) s+=`<circle cx="${mx}" cy="${n1(cy)}" r="8" fill="${HL}"/><text x="${mx}" y="${n1(cy+3.6)}" font-size="10.5" fill="#fff" text-anchor="middle" font-weight="700" class="sv-en">${i+1}</text>`;
    else if(it.i) s+=icon(it.i,mx,cy,0.8);
    const o={size,maxW:B.w-25,a:'start'};s+=st(B.x+23,cy-stH(it.l,o)/2,it.l,o).s;});
  return s;};
DIAG.bulbs=(d,B)=>{let s='';const bits=d.bits,n=bits.length,cw=B.w/n,r=Math.min(cw*0.33,22);
  const fo={size:11.5,maxW:B.w,fill:HOT};const footH=d.foot?stH(d.foot,fo)+4:0;
  const ds=Math.min(22,cw*0.62);const co={size:10.5,maxW:cw};
  const capH=d.caps?Math.max(...d.caps.map(c=>stH(c,co))):0;
  const contentH=r*2.3+6+ds+(d.pv?12:0)+(d.caps?capH+4:0);
  const cy=B.y+Math.max(0,(B.h-footH-contentH)/2)+r+r*0.3;
  for(let i=0;i<n;i++){const cx=B.x+cw*(i+.5),on=bits[i]==='1';
    if(on) s+=`<circle cx="${n1(cx)}" cy="${n1(cy)}" r="${n1(r*1.6)}" fill="#FFE45C" opacity=".4"/>`;
    s+=`<circle cx="${n1(cx)}" cy="${n1(cy)}" r="${n1(r)}" fill="${on?'#FFE45C':'#D5DEE6'}" stroke="${INK}" stroke-width="1.6"/><rect x="${n1(cx-r*.42)}" y="${n1(cy+r*.8)}" width="${n1(r*.84)}" height="${n1(r*.5)}" rx="1.5" fill="#8A97A8" stroke="${INK}" stroke-width="1.4"/>`;
    const dy=cy+r*1.3+ds+2;
    s+=`<text x="${n1(cx)}" y="${n1(dy)}" font-size="${n1(ds)}" text-anchor="middle" fill="${on?HOT:HT}" class="sv-mono" font-weight="700">${bits[i]}</text>`;
    if(d.pv) s+=`<text x="${n1(cx)}" y="${n1(dy+11)}" font-size="8" text-anchor="middle" fill="${ZH_T}" class="sv-mono">${2**(n-1-i)}</text>`;
    if(d.caps) s+=st(cx,dy+(d.pv?14:4),d.caps[i],co).s;}
  if(d.foot) s+=st(B.x+B.w/2,B.y+B.h-footH+4,d.foot,fo).s;
  return s;};
DIAG.big=(d,B)=>{let s='';const os=d.rows.map(r=>({size:r.size||14,maxW:B.w,mono:r.mono,fill:r.fill||HT}));
  const hs=d.rows.map((r,i)=>stH(r.s,os[i]));const gap=Math.max(2,(B.h-hs.reduce((a,b)=>a+b,0))/(d.rows.length+1));let y=B.y+gap;
  d.rows.forEach((r,i)=>{s+=st(B.x+B.w/2,y,r.s,os[i]).s;y+=hs[i]+gap;});return s;};
DIAG.pixels=(d,B)=>{let s='';const P=["..YYYY..",".YYYYYY.","YYKYYKYY","YYYYYYYY","YKYYYYKY","YYKKKKYY",".YYYYYY.","..YYYY.."];
  const c=Math.min((B.w*0.5)/8,(B.h-4)/8),gx=B.x,gy=B.y+(B.h-8*c)/2;const col={'.':'#fff',Y:'#FFD23F',K:INK};
  P.forEach((row,r)=>[...row].forEach((ch,k)=>{s+=`<rect x="${n1(gx+k*c)}" y="${n1(gy+r*c)}" width="${n1(c)}" height="${n1(c)}" fill="${col[ch]}" stroke="#B9D7DD" stroke-width=".6"/>`;}));
  const hx=gx+3*c,hy=gy+1*c;s+=`<rect x="${n1(hx)}" y="${n1(hy)}" width="${n1(c)}" height="${n1(c)}" fill="none" stroke="${HOT}" stroke-width="2.2"/>`;
  const bx=gx+8*c+14,bw=B.x+B.w-bx,by=B.y+B.h/2-44;
  s+=`<line x1="${n1(hx+c)}" y1="${n1(hy+c/2)}" x2="${n1(bx)}" y2="${n1(by+16)}" stroke="${HOT}" stroke-width="1.6" stroke-dasharray="3 2"/>`;
  s+=`<rect x="${n1(bx)}" y="${n1(by)}" width="${n1(bw)}" height="88" rx="6" fill="#fff" stroke="${HL}" stroke-width="1.8"/><rect x="${n1(bx+bw/2-12)}" y="${n1(by+8)}" width="24" height="16" fill="#FFD23F" stroke="${INK}" stroke-width="1.4"/>`;
  [['R 255','#E04848'],['G 210','#2BAE66'],['B 63','#2D6CDF']].forEach((t,i)=>{s+=`<text x="${n1(bx+bw/2)}" y="${n1(by+40+i*14)}" font-size="11.5" text-anchor="middle" font-weight="700" fill="${t[1]}" class="sv-mono">${t[0]}</text>`;});
  s+=st(bx+bw/2,by+90,T("1 pixel","1个像素"),{size:10,maxW:bw}).s;
  return s;};
DIAG.numline=(d,B)=>{let s='';const rows=d.rows,rh=B.h/rows.length,x0=B.x+6,x1=B.x+B.w-58,mp=v=>x0+(v-1)/99*(x1-x0);
  const R={h:T("Higher","再大点"),l:T("Lower","再小点"),ok:T("Got it!","猜中！")};
  rows.forEach((r,i)=>{const y=B.y+rh*(i+.62);const [lo,hi,g,res]=r;
    s+=`<line x1="${x0}" y1="${n1(y)}" x2="${x1}" y2="${n1(y)}" stroke="#C9DDE2" stroke-width="3" stroke-linecap="round"/>`;
    s+=`<line x1="${n1(mp(lo))}" y1="${n1(y)}" x2="${n1(mp(hi))}" y2="${n1(y)}" stroke="${HL}" stroke-width="7" stroke-linecap="round"/>`;
    s+=`<text x="${n1(mp(lo))}" y="${n1(y+13)}" font-size="8.5" text-anchor="middle" fill="${ZH_T}" class="sv-mono">${lo}</text><text x="${n1(mp(hi))}" y="${n1(y+13)}" font-size="8.5" text-anchor="middle" fill="${ZH_T}" class="sv-mono">${hi}</text>`;
    s+=`<circle cx="${n1(mp(g))}" cy="${n1(y)}" r="7" fill="${res==='ok'?'#2BAE66':'#FF5D5D'}" stroke="${INK}" stroke-width="1.5"/><text x="${n1(mp(g))}" y="${n1(y-10)}" font-size="11" text-anchor="middle" font-weight="700" fill="${INK}" class="sv-mono">${g}</text>`;
    const o={size:10,maxW:56,a:'start',fill:res==='ok'?'#1E8A50':HOT};s+=st(x1+8,y-stH(R[res],o)/2,R[res],o).s;});
  return s;};
DIAG.compare=(d,B)=>{let s='';const n=d.items.length,rh=B.h/n,mx=Math.max(...d.items.map(i=>i.v));
  d.items.forEach((it,i)=>{const lo={size:10.5,a:'start',maxW:B.w};const lh=stH(it.l,lo);const y=B.y+rh*i+(rh-lh-24)/2;
    s+=st(B.x,y,it.l,lo).s;const by=y+lh+5,bw=Math.max(5,(B.w-2)*it.v/mx);
    s+=`<rect x="${B.x}" y="${n1(by)}" width="${n1(bw)}" height="17" rx="4" fill="${it.c||HL}" stroke="${INK}" stroke-width="1.4"/>`;
    const inside=bw>90;s+=`<text x="${n1(inside?B.x+bw-6:B.x+bw+6)}" y="${n1(by+12.5)}" font-size="11" text-anchor="${inside?'end':'start'}" font-weight="700" fill="${inside?'#fff':INK}" class="sv-mono">${esc(it.txt)}</text>`;});
  return s;};
DIAG.vs=(d,B)=>{let s='';const bh=(B.h-8)/2;[d.a,d.b].forEach((it,i)=>{const y=B.y+i*(bh+8);const col=it.ok?'#2BAE66':'#FF5D5D';
  s+=`<rect x="${B.x}" y="${n1(y)}" width="${B.w}" height="${n1(bh)}" rx="7" fill="#fff" stroke="${col}" stroke-width="2.2"/>`+icon(it.ok?'check':'cross',B.x+16,y+bh/2,1);
  const o={size:10.5,maxW:B.w-40,a:'start',fill:INK};s+=st(B.x+33,y+bh/2-stH(it.l,o)/2,it.l,o).s;});return s;};
function hlCode(line){const parts=line.split(/("[^"]*"|\b(?:for|in|if|else|print|range|IF|AND|THEN)\b|如果|并且|那么|\b\d+\b)/);
  return parts.map((p,i)=>{if(i%2===0) return esc(p);const c=p.startsWith('"')?'#7DF9FF':/^\d+$/.test(p)?'#FF9E9E':'#FFD84D';return `<tspan fill="${c}">${esc(p)}</tspan>`;}).join('');}
DIAG.code=(d,B)=>{let s='';const L=[];d.lines.forEach(l=>{if(isObj(l)){if(MODE!=='zh')L.push({t:l.en});if(MODE!=='en')L.push({t:l.zh,zh:MODE==='both'});}else L.push({t:l});});
  const lh=16,ch=L.length*lh+12;s+=`<rect x="${B.x}" y="${B.y}" width="${B.w}" height="${ch}" rx="6" fill="#13213C" stroke="${INK}" stroke-width="1.5"/>`;
  L.forEach((l,i)=>{s+=`<text x="${B.x+8}" y="${B.y+18+i*lh}" font-size="${l.zh?10.5:11}" fill="${l.zh?'#9FB3D1':'#E6F1FF'}" class="${l.zh?'sv-zh':'sv-mono'}" xml:space="preserve">${hlCode(l.t)}</text>`;});
  if(d.out){const oy=B.y+ch+8;s+=st(B.x,oy,T("▶ Output","▶ 输出"),{size:9.5,a:'start',fill:ZH_T}).s;const ly=oy+(MODE==='both'?24:13);const oh=d.out.length*15+10;
    s+=`<rect x="${B.x}" y="${n1(ly)}" width="${B.w}" height="${oh}" rx="6" fill="#fff" stroke="${d.err?'#FF5D5D':HL}" stroke-width="1.8"/>`;
    d.out.forEach((o,i)=>{s+=`<text x="${B.x+8}" y="${n1(ly+17+i*15)}" font-size="11" fill="${d.err?'#D93636':INK}" font-weight="700" class="sv-mono">${esc(o)}</text>`;});}
  return s;};
DIAG.table=(d,B)=>{let s='';const cols=d.head.length,cw=B.w/cols;const ho={size:10,maxW:cw-4,fill:'#fff'};
  const hh=Math.max(...d.head.map(h=>stH(h,ho)))+8;s+=`<rect x="${B.x}" y="${B.y}" width="${B.w}" height="${n1(hh)}" rx="5" fill="${HL}"/>`;
  d.head.forEach((h,i)=>{s+=st(B.x+cw*(i+.5),B.y+4,h,{...ho,zfill:'#E6FDFF'}).s;});
  const co={size:11,maxW:cw-4};const no={size:9.5,maxW:B.w,fill:HOT};const noteH=d.note?stH(d.note,no)+4:0;
  const rh=(B.h-hh-noteH)/d.rows.length;
  d.rows.forEach((r,ri)=>{const y=B.y+hh+rh*ri;if(ri%2) s+=`<rect x="${B.x}" y="${n1(y)}" width="${B.w}" height="${n1(rh)}" fill="#D6F4F7"/>`;
    r.forEach((c,ci)=>{const o={...co,mono:!isObj(c)};s+=st(B.x+cw*(ci+.5),y+rh/2-stH(c,o)/2,c,o).s;});});
  if(d.note) s+=st(B.x+B.w/2,B.y+B.h-noteH+4,d.note,no).s;return s;};
DIAG.barchart=(d,B)=>{let s='';const n=d.items.length,mx=d.max||Math.max(...d.items.map(i=>i.v)),cw=B.w/n;const lo={size:10,maxW:cw-2};
  const lh=Math.max(...d.items.map(i=>stH(i.l,lo)));const base=B.y+B.h-lh-4,top=B.y+16,bw=Math.min(40,cw*0.58);const pal=[TEAL,'#2F6FD6','#FF5D5D','#FFC83D'];
  s+=`<line x1="${B.x}" y1="${n1(base)}" x2="${B.x+B.w}" y2="${n1(base)}" stroke="${HT}" stroke-width="1.6"/>`;
  d.items.forEach((it,i)=>{const cx=B.x+cw*(i+.5),h=(base-top)*it.v/mx;
    s+=`<rect x="${n1(cx-bw/2)}" y="${n1(base-h)}" width="${n1(bw)}" height="${n1(h)}" rx="3" fill="${it.c||pal[i%4]}" stroke="${INK}" stroke-width="1.5"/>`;
    s+=`<text x="${n1(cx)}" y="${n1(base-h-4)}" font-size="12" text-anchor="middle" font-weight="700" fill="${INK}" class="sv-mono">${it.v}</text>`;
    s+=st(cx,base+4,it.l,lo).s;});return s;};
function envelope(x,y,num,col,w=40,h=26){return `<g><rect x="${n1(x-w/2)}" y="${n1(y-h/2)}" width="${w}" height="${h}" rx="3" fill="#fff" stroke="${INK}" stroke-width="1.6"/><path d="M${n1(x-w/2)} ${n1(y-h/2)} L${n1(x)} ${n1(y+2)} L${n1(x+w/2)} ${n1(y-h/2)}" fill="none" stroke="${INK}" stroke-width="1.4"/><circle cx="${n1(x+w/2-3)}" cy="${n1(y+h/2-3)}" r="7.5" fill="${col}" stroke="${INK}" stroke-width="1.4"/><text x="${n1(x+w/2-3)}" y="${n1(y+h/2+0.8)}" font-size="9.5" text-anchor="middle" font-weight="700" fill="#fff" class="sv-en">${num}</text></g>`;}
const PCOL=['#FF5D5D','#2F6FD6','#22B8A7','#E0A21B'];
DIAG.packets=(d,B)=>{let s='';const fo={size:10,maxW:B.w,fill:HOT};const fh=stH(d.foot,fo);const mid=B.y+(B.h-fh)/2;
  const px=B.x+28;s+=`<rect x="${px-26}" y="${n1(mid-22)}" width="52" height="44" rx="4" fill="#BFE3FA" stroke="${INK}" stroke-width="1.8"/><circle cx="${px}" cy="${n1(mid-2)}" r="11" fill="#F5CBA7" stroke="${INK}" stroke-width="1.5"/><path d="M${px-11} ${n1(mid-5)} Q${px} ${n1(mid-20)} ${px+11} ${n1(mid-5)} Z" fill="#1E1B24"/><path d="M${px-4} ${n1(mid+3)} Q${px} ${n1(mid+7)} ${px+4} ${n1(mid+3)}" stroke="${INK}" stroke-width="1.4" fill="none"/><path d="M${px-26} ${n1(mid+22)} L${px-26} ${n1(mid+16)} Q${px} ${n1(mid+8)} ${px+26} ${n1(mid+16)} L${px+26} ${n1(mid+22)} Z" fill="#2F6FD6"/>`;
  s+=st(px,mid+26,T("Video","视频"),{size:9.5}).s;
  s+=arrow(px+30,mid,px+48,mid,HOT,2.4);
  const gx=B.x+B.w-58;[[0,0],[1,0],[0,1],[1,1]].forEach(([c,r],i)=>{s+=envelope(gx+c*46,mid-17+r*36,i+1,PCOL[i]);});
  s+=st(B.x+B.w/2,B.y+B.h-fh,d.foot,fo).s;return s;};
DIAG.reorder=(d,B)=>{let s='';const lo={size:10,a:'start'};const h1=stH(T("Arrived:","到达顺序："),lo);
  const y1=B.y+4;s+=st(B.x,y1,T("Arrived:","到达顺序："),lo).s;const ey1=y1+h1+18;
  [3,1,4,2].forEach((n,i)=>{s+=envelope(B.x+22+i*45,ey1,n,PCOL[n-1],38,24);});
  const ay=ey1+20;s+=arrow(B.x+B.w/2,ay,B.x+B.w/2,ay+22,HOT,2.6);
  const y2=ay+26;s+=st(B.x,y2,T("Rebuilt:","重新拼好："),lo).s;const ey2=y2+h1+18;
  [1,2,3,4].forEach((n,i)=>{s+=envelope(B.x+22+i*45,ey2,n,PCOL[n-1],38,24);});
  return s;};
DIAG.network=(d,B)=>{let s='';const lo={size:9.5,maxW:70};const lh=stH(T("Singapore","新加坡"),lo);const H=B.h-lh-6;
  const A=[B.x+14,B.y+H*0.5],Z=[B.x+B.w-14,B.y+H*0.5],R=[[B.x+B.w*0.36,B.y+H*0.16],[B.x+B.w*0.36,B.y+H*0.84],[B.x+B.w*0.64,B.y+H*0.16],[B.x+B.w*0.64,B.y+H*0.84]];
  const links=[[A,R[0]],[A,R[1]],[R[0],R[2]],[R[1],R[3]],[R[0],R[3]],[R[2],Z],[R[3],Z]];
  links.forEach(([p,q])=>{s+=`<line x1="${n1(p[0])}" y1="${n1(p[1])}" x2="${n1(q[0])}" y2="${n1(q[1])}" stroke="${HL}" stroke-width="2.2" stroke-dasharray="4 3"/>`;});
  R.forEach(p=>{s+=`<circle cx="${n1(p[0])}" cy="${n1(p[1])}" r="10" fill="#2B3A55" stroke="${INK}" stroke-width="1.6"/><path d="M${n1(p[0]-5)} ${n1(p[1]-2)} L${n1(p[0]+5)} ${n1(p[1]-2)} M${n1(p[0]+5)} ${n1(p[1]+2)} L${n1(p[0]-5)} ${n1(p[1]+2)}" stroke="#7DF9FF" stroke-width="1.6"/>`;});
  [[links[0],0],[links[3],1],[links[4],2],[links[5],3]].forEach(([[p,q],i])=>{const t=0.5;s+=envelope(p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t,i+1,PCOL[i],22,15);});
  s+=icon('laptop',A[0],A[1],1.05)+icon('laptop',Z[0],Z[1],1.05);
  s+=st(A[0]+4,B.y+B.h-lh,T("Shanghai","上海"),lo).s+st(Z[0]-4,B.y+B.h-lh,T("Singapore","新加坡"),lo).s;
  s+=st(B.x+B.w/2,B.y+B.h-lh,T("Routers","路由器"),{...lo,fill:HOT}).s;return s;};
DIAG.cable=(d,B)=>{let s='';const fo={size:9.5,maxW:B.w,fill:HOT};const fh=stH(T("Light in glass: ~200,000 km/s","光纤中的光：约每秒20万公里"),fo);const H=B.h-fh-4;
  s+=`<rect x="${B.x}" y="${B.y}" width="${B.w}" height="${n1(H)}" rx="6" fill="#CDEFFF"/>`;
  s+=`<path d="M${B.x+B.w*0.55} ${B.y} Q${B.x+B.w*0.62} ${n1(B.y+H*0.25)} ${B.x+B.w*0.78} ${n1(B.y+H*0.3)} Q${B.x+B.w*0.9} ${n1(B.y+H*0.38)} ${B.x+B.w} ${n1(B.y+H*0.5)} L${B.x+B.w} ${B.y} Z" fill="#F3E3B8" stroke="${HL}" stroke-width="1.4"/>`;
  s+=`<path d="M${B.x} ${n1(B.y+H*0.55)} Q${B.x+B.w*0.22} ${n1(B.y+H*0.62)} ${B.x+B.w*0.26} ${n1(B.y+H*0.8)} Q${B.x+B.w*0.3} ${n1(B.y+H*0.95)} ${B.x+B.w*0.36} ${n1(B.y+H)} L${B.x} ${n1(B.y+H)} Z" fill="#F3E3B8" stroke="${HL}" stroke-width="1.4"/>`;
  const P0=[B.x+B.w*0.74,B.y+H*0.27],P3=[B.x+B.w*0.3,B.y+H*0.82],P1=[B.x+B.w*0.95,B.y+H*0.7],P2=[B.x+B.w*0.55,B.y+H*0.95];
  s+=`<path d="M${n1(P0[0])} ${n1(P0[1])} C${n1(P1[0])} ${n1(P1[1])} ${n1(P2[0])} ${n1(P2[1])} ${n1(P3[0])} ${n1(P3[1])}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-dasharray="6 4"/>`;
  const bz=t=>[0,1].map(k=>(1-t)**3*P0[k]+3*(1-t)**2*t*P1[k]+3*(1-t)*t*t*P2[k]+t**3*P3[k]);
  [.25,.5,.75].forEach(t=>{const p=bz(t);s+=`<circle cx="${n1(p[0])}" cy="${n1(p[1])}" r="5" fill="#FFD84D" stroke="${INK}" stroke-width="1.4"/>`;});
  s+=`<circle cx="${n1(P0[0])}" cy="${n1(P0[1])}" r="5" fill="#FF5D5D" stroke="${INK}" stroke-width="1.5"/><circle cx="${n1(P3[0])}" cy="${n1(P3[1])}" r="5" fill="#FF5D5D" stroke="${INK}" stroke-width="1.5"/>`;
  s+=st(P0[0]-8,P0[1]-6-stH(T("Shanghai","上海"),{size:10}),T("Shanghai","上海"),{size:10,a:'end'}).s;
  s+=st(P3[0]+8,P3[1]-8,T("Singapore","新加坡"),{size:10,a:'start'}).s;
  const m=bz(.5);s+=`<text x="${n1(m[0]-14)}" y="${n1(m[1]-30)}" font-size="11" font-weight="700" text-anchor="middle" fill="${INK}" class="sv-mono">≈3,800 km</text>`;
  s+=st(B.x+B.w/2,B.y+B.h-fh,T("Light in glass: ~200,000 km/s","光纤中的光：约每秒20万公里"),fo).s;return s;};
DIAG.cards=(d,B)=>{let s='';const n=d.items.length,cols=d.cols||Math.min(n,3),rows=Math.ceil(n/cols),gap=6;
  const fo={size:10,maxW:B.w,fill:HOT};const fh=d.foot?stH(d.foot,fo)+4:0;
  const cw=(B.w-gap*(cols-1))/cols,ch=(B.h-fh-gap*(rows-1))/rows;const lo={size:9.5,maxW:cw-6};
  d.items.forEach((it,i)=>{const c=i%cols,r=Math.floor(i/cols),x=B.x+c*(cw+gap),y=B.y+r*(ch+gap);
    s+=`<rect x="${n1(x)}" y="${n1(y)}" width="${n1(cw)}" height="${n1(ch)}" rx="6" fill="#fff" stroke="${HL}" stroke-width="1.6"/>`;
    const lh=stH(it.l,lo);const picH=ch-lh-6;const sc=Math.min(cw/44,picH/36,1.25);
    s+=pic(it.p,x+cw/2,y+3+picH/2,sc);s+=st(x+cw/2,y+ch-lh-3,it.l,lo).s;
    if(it.m) s+=icon({ok:'check',no:'cross',q:'q'}[it.m],x+cw-9,y+9,0.72);});
  if(d.foot) s+=st(B.x+B.w/2,B.y+B.h-fh+4,d.foot,fo).s;return s;};
DIAG.cycle=(d,B)=>{let s='';const n=d.items.length,cx=B.x+B.w/2,r=16;let cy=B.y+B.h/2-4,R=Math.min(B.w*0.34,B.h*0.36);
  if(n===3){const lo0={size:10.5,maxW:70};const lt=stH(d.items[0].l,lo0),lb=Math.max(stH(d.items[1].l,lo0),stH(d.items[2].l,lo0));R=Math.min(B.w*0.34,(B.h-2*r-6-lt-lb)/1.5);cy=B.y+lt+3+r+R;}
  if(n===4){const lo0={size:10.5,maxW:70};const lt=stH(d.items[0].l,lo0),lb=stH(d.items[2].l,lo0);R=Math.min(B.w*0.34,(B.h-2*r-6-lt-lb)/2);cy=B.y+lt+3+r+R;}
  const ang=i=>(-90+360*i/n)*Math.PI/180;const dA=(r+6)/R;
  for(let i=0;i<n;i++){const a1=ang(i)+dA,a2=ang(i+1)-dA;const p1=[cx+R*Math.cos(a1),cy+R*Math.sin(a1)],p2=[cx+R*Math.cos(a2),cy+R*Math.sin(a2)];
    s+=`<path d="M${n1(p1[0])} ${n1(p1[1])} A${n1(R)} ${n1(R)} 0 0 1 ${n1(p2[0])} ${n1(p2[1])}" fill="none" stroke="${HL}" stroke-width="2.4"/>`+ah(p2[0],p2[1],a2+Math.PI/2,HL,8);}
  d.items.forEach((it,i)=>{const a=ang(i),x=cx+R*Math.cos(a),y=cy+R*Math.sin(a);
    s+=`<circle cx="${n1(x)}" cy="${n1(y)}" r="${r}" fill="#fff" stroke="${HL}" stroke-width="2"/>`+icon(it.i,x,y,1);
    const lo={size:10.5,maxW:70,fill:INK};const lh=stH(it.l,lo);
    const ly=Math.sin(a)<-0.5?y-r-lh-2:y+r+2;s+=st(x,ly,it.l,lo).s;});
  if(d.center){const co={size:10.5,maxW:R*1.3,fill:HOT};s+=st(cx,cy-stH(d.center,co)/2+4,d.center,co).s;}
  return s;};
DIAG.neuron=(d,B)=>{let s='';const sx=B.x+B.w-40,sy=B.y+B.h*0.36;const vx=B.x+88;
  d.ins.forEach((it,i)=>{const y=B.y+B.h*(0.14+0.33*i);const lo={size:9.5,maxW:74,a:'start',fill:INK};
    s+=`<line x1="${vx}" y1="${n1(y)}" x2="${n1(sx)}" y2="${n1(sy)}" stroke="${HL}" stroke-width="${1+it.w*0.6}" opacity=".85"/>`;
    s+=st(B.x,y-stH(it.l,lo)/2,it.l,lo).s;
    s+=`<circle cx="${vx}" cy="${n1(y)}" r="9" fill="${it.v?'#FFE45C':'#fff'}" stroke="${INK}" stroke-width="1.5"/><text x="${vx}" y="${n1(y+3.8)}" font-size="10.5" text-anchor="middle" font-weight="700" class="sv-mono" fill="${INK}">${it.v}</text>`;
    const mx=vx+(sx-vx)*0.45,my=y+(sy-y)*0.45;s+=`<rect x="${n1(mx-13)}" y="${n1(my-8)}" width="26" height="15" rx="7" fill="#fff" stroke="${HOT}" stroke-width="1.4"/><text x="${n1(mx)}" y="${n1(my+3.5)}" font-size="10" text-anchor="middle" font-weight="700" fill="${HOT}" class="sv-mono">×${it.w}</text>`;});
  s+=`<circle cx="${n1(sx)}" cy="${n1(sy)}" r="18" fill="#fff" stroke="${INK}" stroke-width="2"/><text x="${n1(sx)}" y="${n1(sy+6)}" font-size="17" text-anchor="middle" font-weight="700" fill="${INK}" class="sv-en">Σ</text>`;
  s+=`<text x="${n1(sx)}" y="${n1(sy+34)}" font-size="12" text-anchor="middle" font-weight="700" fill="${INK}" class="sv-mono">${esc(d.sum)}</text>`;
  s+=st(sx-6,sy+40,d.out,{size:9.5,maxW:84,fill:HOT}).s;return s;};
DIAG.layers=(d,B)=>{let s='';const lo={size:9.5,maxW:B.w/d.sizes.length+16};const lh=Math.max(...d.labels.map(l=>l?stH(l,lo):0));
  const top=B.y+6,bot=B.y+B.h-lh-8;const cols=d.sizes.map((n,i)=>{const x=B.x+B.w*(i+.5)/d.sizes.length;const gap=(bot-top)/n;return [...Array(n)].map((_,k)=>[x,top+gap*(k+.5)]);});
  for(let i=0;i<cols.length-1;i++) cols[i].forEach(p=>cols[i+1].forEach(q=>{s+=`<line x1="${n1(p[0])}" y1="${n1(p[1])}" x2="${n1(q[0])}" y2="${n1(q[1])}" stroke="${HL}" stroke-width="1" opacity=".45"/>`;}));
  cols.forEach((c,i)=>c.forEach(p=>{const f=i===0?'#FFE45C':i===cols.length-1?'#FF8FA3':'#fff';s+=`<circle cx="${n1(p[0])}" cy="${n1(p[1])}" r="8" fill="${f}" stroke="${INK}" stroke-width="1.5"/>`;}));
  d.labels.forEach((l,i)=>{if(l) s+=st(B.x+B.w*(i+.5)/d.sizes.length+(i===1?B.w/d.sizes.length/2:0),bot+6,l,lo).s;});return s;};
DIAG.knobs=(d,B)=>{let s='';const angs=[-40,20,-70,60],nx=angs.length,cw=B.w/nx,ky=B.y+30;
  angs.forEach((a,i)=>{const cx=B.x+cw*(i+.5);const r=14;const rad=(a-90)*Math.PI/180;
    s+=`<circle cx="${n1(cx)}" cy="${ky}" r="${r}" fill="#fff" stroke="${INK}" stroke-width="1.8"/><line x1="${n1(cx)}" y1="${ky}" x2="${n1(cx+(r-3)*Math.cos(rad))}" y2="${n1(ky+(r-3)*Math.sin(rad))}" stroke="${HOT}" stroke-width="2.6" stroke-linecap="round"/>`;
    const dir=i%2?1:-1;s+=`<path d="M${n1(cx-dir*8)} ${ky-r-5} Q${n1(cx)} ${ky-r-11} ${n1(cx+dir*8)} ${ky-r-5}" fill="none" stroke="${TEAL}" stroke-width="2"/>`+ah(cx+dir*8,ky-r-5,dir>0?0.5:Math.PI-0.5,TEAL,6);
    s+=`<text x="${n1(cx)}" y="${ky+r+12}" font-size="9.5" text-anchor="middle" fill="${ZH_T}" class="sv-mono">w${i+1}</text>`;});
  const fo={size:10,maxW:B.w,fill:HOT};const fh=stH(d.foot,fo);const base=B.y+B.h-fh-4,top=ky+34;const hs=[1,.78,.6,.45,.33,.24,.17,.12];const bw=B.w/hs.length;
  hs.forEach((h,i)=>{const bh=(base-top)*h;s+=`<rect x="${n1(B.x+i*bw+3)}" y="${n1(base-bh)}" width="${n1(bw-6)}" height="${n1(bh)}" rx="2" fill="#FF8FA3" stroke="${INK}" stroke-width="1.2"/>`;});
  s+=st(B.x+B.w/2,B.y+B.h-fh,d.foot,fo).s;return s;};
DIAG.tokens=(d,B)=>{let s='';const pal=['#FFE7A3','#CFF5EF','#FFD6D6','#DCE6FF'];let y=B.y+6;
  d.rows.forEach(row=>{let x=B.x;const H=20;row.forEach((t,i)=>{const w=Math.max(24,tw(t[0].replace(/^ /,'·'),12,/^[\x00-\x7F]+$/.test(t[0]))+12);if(x+w>B.x+B.w){x=B.x;y+=40;}
    s+=`<rect x="${n1(x)}" y="${n1(y)}" width="${n1(w)}" height="${H}" rx="4" fill="${pal[i%4]}" stroke="${INK}" stroke-width="1.4"/><text x="${n1(x+w/2)}" y="${n1(y+14.5)}" font-size="12" text-anchor="middle" font-weight="700" fill="${INK}" class="${/^[\x00-\x7F]+$/.test(t[0])?'sv-mono':'sv-zh'}" xml:space="preserve">${esc(t[0].replace(/^ /,'·'))}</text><text x="${n1(x+w/2)}" y="${n1(y+H+11)}" font-size="8.5" text-anchor="middle" fill="${ZH_T}" class="sv-mono">${t[1]}</text>`;x+=w+4;});y+=46;});
  if(d.foot){const fo={size:9,maxW:B.w,fill:ZH_T};s+=st(B.x+B.w/2,B.y+B.h-stH(d.foot,fo),d.foot,fo).s;}return s;};
DIAG.probs=(d,B)=>{let s='';const po={size:11.5,maxW:B.w,fill:INK};const ph=stH(d.prompt,po);s+=st(B.x+B.w/2,B.y+2,d.prompt,po).s;
  const top=B.y+ph+10,rh=(B.h-ph-10)/d.opts.length,lw=60,bx=B.x+lw+4,bmax=B.x+B.w-34-bx;
  d.opts.forEach(([l,p],i)=>{const cy=top+rh*(i+.5);const lo={size:10,maxW:lw,a:'start',fill:INK};s+=st(B.x,cy-stH(l,lo)/2,l,lo).s;
    s+=`<rect x="${n1(bx)}" y="${n1(cy-6)}" width="${n1(bmax)}" height="12" rx="3" fill="#D6F4F7"/><rect x="${n1(bx)}" y="${n1(cy-6)}" width="${n1(Math.max(3,bmax*p/100))}" height="12" rx="3" fill="${i===0?TEAL:'#8FD9E2'}" stroke="${INK}" stroke-width="1.2"/>`;
    s+=`<text x="${n1(B.x+B.w)}" y="${n1(cy+4)}" font-size="11" text-anchor="end" font-weight="700" fill="${INK}" class="sv-mono">${p}%</text>`;});return s;};
DIAG.chat=(d,B)=>{let s='';let y=B.y+4;const bw=B.w*0.8;
  d.msgs.forEach(m=>{const o={size:10.5,maxW:bw-16,a:'start',fill:m.me?'#fff':INK,zfill:m.me?'#DCE9FF':ZH_T};const h=stH(m.l,o)+12;const x=m.me?B.x+B.w-bw:B.x+(m.warn?0:0);
    s+=`<rect x="${n1(x)}" y="${n1(y)}" width="${n1(bw)}" height="${n1(h)}" rx="9" fill="${m.me?'#2F6FD6':'#fff'}" stroke="${INK}" stroke-width="1.5"/>`;
    s+=st(x+8,y+6,m.l,o).s;if(m.warn) s+=icon('warn',x+bw-2,y+h-2,0.9);y+=h+14;});return s;};
DIAG.hub=(d,B)=>{let s='';const n=d.tools.length,cx=B.x+B.w/2,cy=B.y+B.h/2-6,R=Math.min(B.w*0.36,B.h*0.36);
  const pts=d.tools.map((t,i)=>{const a=(-90+360*i/n)*Math.PI/180;return [cx+R*Math.cos(a),cy+R*Math.sin(a)];});
  pts.forEach(p=>{s+=`<line x1="${n1(cx)}" y1="${n1(cy)}" x2="${n1(p[0])}" y2="${n1(p[1])}" stroke="${HL}" stroke-width="2" stroke-dasharray="3 3"/>`;});
  s+=`<circle cx="${n1(cx)}" cy="${n1(cy)}" r="22" fill="#fff" stroke="${HOT}" stroke-width="2.4"/>`+icon('brain',cx,cy-3,1.3)+`<text x="${n1(cx)}" y="${n1(cy+15)}" font-size="7.5" text-anchor="middle" font-weight="700" fill="${HOT}" class="sv-en">LLM</text>`;
  d.tools.forEach((t,i)=>{const p=pts[i];s+=`<circle cx="${n1(p[0])}" cy="${n1(p[1])}" r="14" fill="#fff" stroke="${HL}" stroke-width="2"/>`+icon(t.i,p[0],p[1],0.85);
    const lo={size:9.5,maxW:64,fill:INK};s+=st(p[0],p[1]+16,t.l,lo).s;});return s;};
DIAG.dialog=(d,B)=>{let s='';const x=B.x+2,w=B.w-4,y=B.y+4,h=B.h-8;
  s+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
  const ho={size:10.5,a:'start',fill:INK,maxW:w-36};const hh=stH(d.head,ho)+10;
  s+=`<path d="M${x} ${y+9} Q${x} ${y} ${x+9} ${y} L${x+w-9} ${y} Q${x+w} ${y} ${x+w} ${y+9} L${x+w} ${n1(y+hh)} L${x} ${n1(y+hh)} Z" fill="#FFD84D" stroke="${INK}" stroke-width="2"/>`+icon('lock',x+14,y+hh/2,0.8)+st(x+28,y+5,d.head,ho).s;
  const mo={size:13,maxW:w-16,fill:INK};const mh=stH(d.msg,mo);const btnY=y+h-34;s+=st(x+w/2,y+hh+(btnY-y-hh-mh)/2,d.msg,mo).s;
  const bw=(w-24)/2;[[d.yes,'#2BAE66','#fff'],[d.no,'#E3E8EF',INK]].forEach(([l,bg,fg],i)=>{const bx=x+8+i*(bw+8);s+=`<rect x="${n1(bx)}" y="${n1(btnY)}" width="${n1(bw)}" height="26" rx="13" fill="${bg}" stroke="${INK}" stroke-width="1.6"/>`;
    s+=`<text x="${n1(bx+bw/2)}" y="${n1(btnY+17)}" font-size="${MODE==='both'?9.5:11}" text-anchor="middle" font-weight="700" fill="${fg}" class="${MODE==='zh'?'sv-zh':'sv-en'}">${esc(MODE==='both'?l.en+' '+l.zh:pick(l))}</text>`;});
  s+=`<path d="M${n1(x+8+bw*0.7)} ${n1(btnY+14)} l0 16 l4 -4 l3 7 l3 -1 l-3 -7 l6 0 Z" fill="#fff" stroke="${INK}" stroke-width="1.3" stroke-linejoin="round"/>`;
  return s;};
DIAG.grid=(d,B)=>{let s='';const n=d.items.length,rows=Math.ceil(n/2),rh=B.h/rows,cw=B.w/2;
  d.items.forEach((it,i)=>{const c=Math.floor(i/rows),r=i%rows,x=B.x+c*cw,cy=B.y+rh*(r+.5);
    s+=`<circle cx="${n1(x+8)}" cy="${n1(cy)}" r="7.5" fill="${i===n-1?HOT:HL}"/><text x="${n1(x+8)}" y="${n1(cy+3.3)}" font-size="9" text-anchor="middle" font-weight="700" fill="#fff" class="sv-en">${i+1}</text>`;
    const o={size:9.5,maxW:cw-22,a:'start',fill:INK};s+=st(x+20,cy-stH(it,o)/2,it,o).s;});return s;};

const HOLO={x:104,y:12,w:200,h:200};
function holo(d){const x=d.x??HOLO.x,y=d.y??HOLO.y,w=d.w??HOLO.w,h=d.h??HOLO.h;
  let s=`<g class="holo"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${HF}" fill-opacity=".97" stroke="${HL}" stroke-width="2.5"/>`;
  for(let ly=y+6;ly<y+h-4;ly+=6) s+=`<line x1="${x+3}" y1="${ly}" x2="${x+w-3}" y2="${ly}" stroke="${HL}" stroke-opacity=".07" stroke-width="1"/>`;
  [[x,y,1,1],[x+w,y,-1,1],[x,y+h,1,-1],[x+w,y+h,-1,-1]].forEach(([cx,cy,dx,dy])=>{s+=`<path d="M${cx+dx*4} ${cy+dy*16} L${cx+dx*4} ${cy+dy*4} L${cx+dx*16} ${cy+dy*4}" fill="none" stroke="${HT}" stroke-width="2.6" stroke-linecap="round"/>`;});
  let top=y+9;
  if(d.title){const o={size:12,fill:HT,maxW:w-36};const m=st(x+w/2,top,d.title,o);s+=m.s;top+=m.h+4;s+=`<line x1="${x+16}" y1="${n1(top)}" x2="${x+w-16}" y2="${n1(top)}" stroke="${HL}" stroke-width="1.2" stroke-dasharray="3 3"/>`;top+=6;}
  const B={x:x+10,y:top,w:w-20,h:y+h-9-top};
  if(!DIAG[d.t]) console.warn('LBC: unknown diagram',d.t);
  s+=(DIAG[d.t]||(()=>''))(d,B);
  return s+'</g>';}


// ---------- helpers ----------
const lineS=(x1,y1,x2,y2,c=INK,w=2,extra='')=>`<line x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" ${extra}/>`;
function wedge(cx,cy,r,a1,a2,fill){const p1=[cx+r*Math.cos(a1),cy+r*Math.sin(a1)],p2=[cx+r*Math.cos(a2),cy+r*Math.sin(a2)];const large=Math.abs(a2-a1)>Math.PI?1:0;
  return `<path d="M${n1(cx)} ${n1(cy)} L${n1(p1[0])} ${n1(p1[1])} A${r} ${r} 0 ${large} 1 ${n1(p2[0])} ${n1(p2[1])} Z" fill="${fill}" stroke="${INK}" stroke-width="1.2"/>`;}
function footOf(d,B,size=10.5){const fo={size,maxW:B.w,fill:HOT};const h=d.foot?stH(d.foot,fo)+4:0;return {h,draw:()=>d.foot?st(B.x+B.w/2,B.y+B.h-h+4,d.foot,fo).s:''};}
function seeded(n){let s=n*9301+49297;return()=>{s=(s*9301+49297)%233280;return s/233280;};}

// ---------- math diagrams ----------
DIAG.area=(d,B)=>{let s='';const F=footOf(d,B,11);const S=Math.min(B.w-34,B.h-F.h-16),x0=B.x+(B.w-S)/2+8,y0=B.y+12,a=S*0.62,b=S-a;
  [[x0,y0,a,a,'#CFF5EF','a²'],[x0+a,y0,b,a,'#FFE7A3','ab'],[x0,y0+a,a,b,'#FFE7A3','ab'],[x0+a,y0+a,b,b,'#FFD6D6','b²']].forEach(([x,y,w,h,c,l])=>{
    s+=`<rect x="${n1(x)}" y="${n1(y)}" width="${n1(w)}" height="${n1(h)}" fill="${c}" stroke="${INK}" stroke-width="1.6"/><text x="${n1(x+w/2)}" y="${n1(y+h/2+5)}" font-size="${w>40?16:12}" text-anchor="middle" font-weight="700" fill="${INK}" class="sv-mono">${l}</text>`;});
  const T2=(x,y,t)=>`<text x="${n1(x)}" y="${n1(y)}" font-size="12" text-anchor="middle" font-weight="700" fill="${HOT}" class="sv-mono">${t}</text>`;
  s+=T2(x0+a/2,y0-3,'a')+T2(x0+a+b/2,y0-3,'b')+T2(x0-9,y0+a/2+4,'a')+T2(x0-9,y0+a+b/2+4,'b');
  return s+F.draw();};
DIAG.tiles=(d,B)=>{let s='';const p=d.p,q=d.q,F=footOf(d,B,10.5);const u=13,X=Math.min(62,B.h-F.h-p*u-34),W=X+q*u,H=X+p*u,x0=B.x+(B.w-W)/2+10,y0=B.y+20;
  const R=(x,y,w,h,c)=>`<rect x="${n1(x)}" y="${n1(y)}" width="${n1(w)}" height="${n1(h)}" fill="${c}" stroke="${INK}" stroke-width="1.3"/>`;
  s+=R(x0,y0,X,X,'#CFF5EF')+`<text x="${n1(x0+X/2)}" y="${n1(y0+X/2+6)}" font-size="16" text-anchor="middle" font-weight="700" class="sv-mono" fill="${INK}">x²</text>`;
  for(let i=0;i<q;i++) s+=R(x0+X+i*u,y0,u,X,'#FFE7A3');
  for(let j=0;j<p;j++) s+=R(x0,y0+X+j*u,X,u,'#FFE7A3');
  for(let i=0;i<q;i++) for(let j=0;j<p;j++) s+=R(x0+X+i*u,y0+X+j*u,u,u,'#FFD6D6');
  s+=`<text x="${n1(x0+W/2)}" y="${n1(y0-6)}" font-size="12" text-anchor="middle" font-weight="700" fill="${HOT}" class="sv-mono">x + ${q}</text>`;
  s+=`<text transform="translate(${n1(x0-8)},${n1(y0+H/2)}) rotate(-90)" font-size="12" text-anchor="middle" font-weight="700" fill="${HOT}" class="sv-mono">x + ${p}</text>`;
  return s+F.draw();};
DIAG.sqrt2=(d,B)=>{let s='';const F=footOf(d,B,11);const G=Math.min(B.w*0.62,B.h-F.h-10),c=G/2,x0=B.x+(B.w-G)/2,y0=B.y+4;
  s+=`<rect x="${n1(x0)}" y="${n1(y0)}" width="${n1(G)}" height="${n1(G)}" fill="#fff" stroke="${INK}" stroke-width="1.6"/>`+lineS(x0+c,y0,x0+c,y0+G,'#B9D7DD',1.4)+lineS(x0,y0+c,x0+G,y0+c,'#B9D7DD',1.4);
  s+=`<path d="M${n1(x0+c)} ${n1(y0)} L${n1(x0+G)} ${n1(y0+c)} L${n1(x0+c)} ${n1(y0+G)} L${n1(x0)} ${n1(y0+c)} Z" fill="#FFD6D6" fill-opacity=".85" stroke="${HOT}" stroke-width="2.4"/>`;
  s+=st(x0+c,y0+c-stH(T("area = 2","面积 = 2"),{size:10.5})/2,T("area = 2","面积 = 2"),{size:10.5,fill:HOT}).s;
  s+=`<text x="${n1(x0+c/2)}" y="${n1(y0+G+12)}" font-size="11" text-anchor="middle" font-weight="700" class="sv-mono" fill="${HT}">1</text>`;
  s+=`<text x="${n1(x0+G*0.86)}" y="${n1(y0+G*0.2)}" font-size="13" text-anchor="start" font-weight="700" class="sv-mono" fill="${HOT}">√2</text>`;
  return s+F.draw();};
DIAG.numline2=(d,B)=>{let s='';const lo=d.min,hi=d.max,x0=B.x+8,x1=B.x+B.w-8,y=B.y+B.h*0.5,mp=v=>x0+(v-lo)/(hi-lo)*(x1-x0);
  s+=arrow(x0-4,y,x1+6,y,INK,2);for(let v=lo;v<=hi;v++) s+=lineS(mp(v),y-4,mp(v),y+4,INK,1.6)+`<text x="${n1(mp(v))}" y="${n1(y+16)}" font-size="9.5" text-anchor="middle" class="sv-mono" fill="${ZH_T}">${v<0?'−'+(-v):v}</text>`;
  d.pts.forEach((p,i)=>{const x=mp(p.v),c=p.irr?CORAL:BLUE,up=i%2===0;s+=`<circle cx="${n1(x)}" cy="${n1(y)}" r="5" fill="${c}" stroke="${INK}" stroke-width="1.4"/>`+lineS(x,y-6,x,up?y-24:y-14,c,1.4)+`<text x="${n1(x)}" y="${n1(up?y-28:y-18)}" font-size="13" text-anchor="middle" font-weight="700" class="sv-mono" fill="${c}">${p.l}</text>`;});
  const lo2={size:10,a:'start'};s+=`<circle cx="${B.x+6}" cy="${n1(B.y+B.h-22)}" r="5" fill="${BLUE}"/>`+st(B.x+15,B.y+B.h-30,T("Rational","有理数"),{...lo2,fill:BLUE}).s;
  s+=`<circle cx="${n1(B.x+B.w/2+6)}" cy="${n1(B.y+B.h-22)}" r="5" fill="${CORAL}"/>`+st(B.x+B.w/2+15,B.y+B.h-30,T("Irrational","无理数"),{...lo2,fill:CORAL}).s;return s;};
DIAG.angles=(d,B)=>{let s='';const F=footOf(d,B,10);const H=B.h-F.h,y1=B.y+H*0.32,y2=B.y+H*0.72,xa=B.x+B.w*0.22,ya=B.y+H-4,xb=B.x+B.w*0.72,yb=B.y+6;
  const ix=yy=>xa+(xb-xa)*(ya-yy)/(ya-yb);[y1,y2].forEach(yy=>{s+=lineS(B.x,yy,B.x+B.w,yy,INK,2.2)+`<path d="M${n1(B.x+B.w-26)} ${n1(yy-4)} L${n1(B.x+B.w-20)} ${n1(yy)} L${n1(B.x+B.w-26)} ${n1(yy+4)}" stroke="${INK}" stroke-width="1.8" fill="none"/>`;});
  const t=Math.atan2(ya-yb,xb-xa);[[y1,'1'],[y2,'2']].forEach(([yy,l])=>{const x=ix(yy);s+=wedge(x,yy,16,-t,0,'#FFB8C6');s+=`<text x="${n1(x+20)}" y="${n1(yy-6)}" font-size="12" font-weight="700" class="sv-mono" fill="${HOT}">${l}</text>`;});
  s+=lineS(xa,ya,xb,yb,BLUE,2.4);return s+F.draw();};
DIAG.tri=(d,B)=>{let s='';const F=footOf(d,B,10.5);const H=B.h-F.h,ty=B.y+4;const A=[B.x+14,ty+H*0.5],Bv=[B.x+B.w-14,ty+H*0.5],C=[B.x+B.w*0.38,ty];const cols=['#FFB8C6','#FFE45C','#9FD4F7'];
  const ang=(V,P,Q)=>{const a1=Math.atan2(P[1]-V[1],P[0]-V[0]),a2=Math.atan2(Q[1]-V[1],Q[0]-V[0]);let dA=a2-a1;while(dA<0)dA+=2*Math.PI;if(dA>Math.PI){return [a2,a1+2*Math.PI-0]} return [a1,a2];};
  const angs=[];[[A,Bv,C],[Bv,C,A],[C,A,Bv]].forEach(([V,P,Q],i)=>{let [a1,a2]=ang(V,P,Q);if(a2<a1)a2+=2*Math.PI;angs.push(a2-a1);s+=wedge(V[0],V[1],15,a1,a2,cols[i]);});
  s+=`<path d="M${n1(A[0])} ${n1(A[1])} L${n1(Bv[0])} ${n1(Bv[1])} L${n1(C[0])} ${n1(C[1])} Z" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/>`;
  const px=B.x+B.w/2,py=ty+H-6;s+=lineS(px-60,py,px+60,py,INK,2);let a=Math.PI;angs.forEach((g,i)=>{s+=wedge(px,py,26,a,a+g,cols[i]);a+=g;});
  s+=`<text x="${n1(px)}" y="${n1(py-30)}" font-size="11" text-anchor="middle" font-weight="700" class="sv-mono" fill="${HOT}">180°</text>`;
  s+=arrow(px,ty+H*0.5+10,px,py-32,HL,1.8);return s+F.draw();};
DIAG.truss=(d,B)=>{let s='';const cw=B.w/2,lo={size:9.5,maxW:cw-6,fill:INK};const lh=Math.max(stH(T("Square: squashes","正方形：会变形"),lo),stH(T("Triangle: stays firm","三角形：保持稳固"),lo));
  const base=B.y+B.h-lh-8,side=Math.min(cw-30,base-B.y-26);
  const sx=B.x+(cw-side)/2,sy=base-side;s+=`<rect x="${n1(sx)}" y="${n1(sy)}" width="${n1(side)}" height="${n1(side)}" fill="none" stroke="${INK}" stroke-width="2.4"/>`;
  s+=`<path d="M${n1(sx)} ${n1(base)} L${n1(sx+side)} ${n1(base)} L${n1(sx+side+side*0.45)} ${n1(sy+side*0.15)} L${n1(sx+side*0.45)} ${n1(sy+side*0.15)} Z" fill="none" stroke="${CORAL}" stroke-width="2" stroke-dasharray="4 3"/>`;
  s+=arrow(sx-10,sy+6,sx+12,sy+6,CORAL,2.4)+icon('cross',sx+side+8,sy-4,0.7);
  const tx=B.x+cw+cw/2;s+=`<path d="M${n1(tx-side/2-4)} ${n1(base)} L${n1(tx+side/2+4)} ${n1(base)} L${n1(tx)} ${n1(sy)} Z" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>`+arrow(tx-24,sy+6,tx-4,sy+6,CORAL,2.4)+icon('check',tx+side/2+8,sy-4,0.7);
  s+=st(B.x+cw/2,base+6,T("Square: squashes","正方形：会变形"),lo).s+st(B.x+cw*1.5,base+6,T("Triangle: stays firm","三角形：保持稳固"),lo).s;return s;};
DIAG.coords=(d,B)=>{let s='';const [xa,xb]=d.xr||[0,6],[ya,yb]=d.yr||[0,5];const nx=xb-xa,ny=yb-ya;const c=Math.min((B.w-16)/nx,(B.h-14)/ny);const W=c*nx,H=c*ny,x0=B.x+(B.w-W)/2+4,y0=B.y+4;
  const X=v=>x0+(v-xa)*c,Y=v=>y0+(yb-v)*c;
  for(let v=xa;v<=xb;v++) s+=lineS(X(v),y0,X(v),y0+H,'#C9DDE2',1);for(let v=ya;v<=yb;v++) s+=lineS(x0,Y(v),x0+W,Y(v),'#C9DDE2',1);
  s+=arrow(x0,Y(0),x0+W+6,Y(0),INK,1.8)+arrow(X(0),y0+H,X(0),y0-4,INK,1.8);
  s+=`<text x="${n1(x0+W+4)}" y="${n1(Y(0)+12)}" font-size="10" font-weight="700" class="sv-mono" fill="${INK}">x</text><text x="${n1(X(0)+5)}" y="${n1(y0+4)}" font-size="10" font-weight="700" class="sv-mono" fill="${INK}">y</text><text x="${n1(X(0)-7)}" y="${n1(Y(0)+11)}" font-size="9" class="sv-mono" fill="${ZH_T}">O</text>`;
  for(let v=xa;v<=xb;v++) if(v) s+=`<text x="${n1(X(v))}" y="${n1(Y(0)+11)}" font-size="8" text-anchor="middle" class="sv-mono" fill="${ZH_T}">${v<0?'−'+(-v):v}</text>`;
  for(let v=ya;v<=yb;v++) if(v) s+=`<text x="${n1(X(0)-4)}" y="${n1(Y(v)+3)}" font-size="8" text-anchor="end" class="sv-mono" fill="${ZH_T}">${v<0?'−'+(-v):v}</text>`;
  if(d.walk) s+=`<path d="M${n1(X(0))} ${n1(Y(0))} L${n1(X(d.walk[0]))} ${n1(Y(0))} L${n1(X(d.walk[0]))} ${n1(Y(d.walk[1]))}" fill="none" stroke="${HOT}" stroke-width="2.4" stroke-dasharray="5 3"/>`;
  if(d.poly) s+=`<polygon points="${d.poly.map(p=>n1(X(p[0]))+','+n1(Y(p[1]))).join(' ')}" fill="#FFE7A3" fill-opacity=".8" stroke="${INK}" stroke-width="2"/>`;
  (d.pts||[]).forEach(p=>{const x=X(p.x),y=Y(p.y);s+=`<circle cx="${n1(x)}" cy="${n1(y)}" r="5" fill="${p.c||CORAL}" stroke="${INK}" stroke-width="1.4"/>`;
    if(p.l){const o={size:9,a:p.x>=xb-1?'end':'start',fill:INK,maxW:70};s+=st(x+(o.a==='end'?-6:6),y-stH(p.l,o)-1,p.l,o).s;}});
  return s;};

// ---------- physics diagrams ----------
DIAG.wave=(d,B)=>{let s='';const rh=B.h/d.rows.length;d.rows.forEach((r,i)=>{const y=B.y+rh*i;const lo={size:10,a:'start',maxW:B.w};const lh=stH(r.l,lo);s+=st(B.x,y+1,r.l,lo).s;
  const cy=y+lh+(rh-lh)/2,amp=(rh-lh)*0.36*r.a;let p='';for(let k=0;k<=80;k++){const x=B.x+B.w*k/80,yy=cy-amp*Math.sin(k/80*r.f*2*Math.PI);p+=(k?'L':'M')+n1(x)+' '+n1(yy);}
  s+=lineS(B.x,cy,B.x+B.w,cy,'#C9DDE2',1)+`<path d="${p}" fill="none" stroke="${r.c||HL}" stroke-width="2.4"/>`;});return s;};
DIAG.light=(d,B)=>{let s='';const F=footOf(d,B,10.5);const H=B.h-F.h,cx=B.x+B.w/2;
  if(d.kind==='reflect'){const ym=B.y+H-12;s+=`<rect x="${B.x+8}" y="${n1(ym)}" width="${B.w-16}" height="6" fill="#BFD9E6" stroke="${INK}" stroke-width="1.6"/>`;for(let x=B.x+12;x<B.x+B.w-8;x+=8) s+=lineS(x,ym+6,x-5,ym+12,INK,1);
    s+=lineS(cx,B.y+4,cx,ym,ZH_T,1.4,'stroke-dasharray="4 3"');const L=[cx-62,B.y+12],R=[cx+62,B.y+12];
    s+=lineS(L[0],L[1],cx,ym,GOLD,3)+ah((L[0]+cx)/2,(L[1]+ym)/2,Math.atan2(ym-L[1],cx-L[0]),'#E0A21B',8)+lineS(cx,ym,R[0],R[1],GOLD,3)+ah((R[0]+cx)/2,(R[1]+ym)/2,Math.atan2(R[1]-ym,R[0]-cx),'#E0A21B',8);
    const ai=Math.atan2(L[1]-ym,L[0]-cx),ar=Math.atan2(R[1]-ym,R[0]-cx);s+=wedge(cx,ym,26,ai,-Math.PI/2,'#FFB8C6')+wedge(cx,ym,26,-Math.PI/2,ar,'#9FD4F7');
    s+=`<text x="${n1(cx-14)}" y="${n1(ym-30)}" font-size="11" font-weight="700" class="sv-mono" fill="${HOT}" text-anchor="middle">i</text><text x="${n1(cx+14)}" y="${n1(ym-30)}" font-size="11" font-weight="700" class="sv-mono" fill="${BLUE}" text-anchor="middle">r</text>`;}
  if(d.kind==='refract'){const yw=B.y+H*0.42;s+=`<rect x="${B.x}" y="${n1(yw)}" width="${B.w}" height="${n1(B.y+H-yw)}" fill="#BFE8FF"/>`+lineS(B.x,yw,B.x+B.w,yw,BLUE,1.6);
    const O=[B.x+B.w*0.3,B.y+H-14],S=[B.x+B.w*0.5,yw],E=[B.x+B.w*0.92,B.y+8];const seen=[S[0]-(E[0]-S[0])*((O[1]-yw)/(yw-E[1]))*0.62,O[1]-(O[1]-yw)*0.42];
    s+=lineS(S[0],S[1]-24,S[0],S[1]+30,ZH_T,1.2,'stroke-dasharray="3 3"');
    s+=lineS(O[0],O[1],S[0],S[1],GOLD,3)+lineS(S[0],S[1],E[0],E[1],GOLD,3)+ah((S[0]+E[0])/2,(S[1]+E[1])/2,Math.atan2(E[1]-S[1],E[0]-S[0]),'#E0A21B',8);
    s+=lineS(S[0],S[1],seen[0],seen[1],GOLD,1.6,'stroke-dasharray="4 3" opacity=".9"');
    s+=`<circle cx="${n1(O[0])}" cy="${n1(O[1])}" r="5" fill="${CORAL}" stroke="${INK}" stroke-width="1.4"/><circle cx="${n1(seen[0])}" cy="${n1(seen[1])}" r="5" fill="#fff" stroke="${CORAL}" stroke-width="1.8" stroke-dasharray="2 2"/>`+icon('eye',E[0]-4,E[1]+6,0.8);
    s+=st(O[0]+8,O[1]-12,T("Real","实际位置"),{size:9,a:'start',fill:INK}).s+st(seen[0]+4,seen[1]-8-stH(T("Seen","看起来"),{size:9}),T("Seen","看起来"),{size:9,fill:HOT}).s;}
  if(d.kind==='lens'){const cy=B.y+H/2,lx=cx,lh=Math.min(H*0.42,48);s+=`<path d="M${lx} ${n1(cy-lh)} Q${lx+14} ${n1(cy)} ${lx} ${n1(cy+lh)} Q${lx-14} ${n1(cy)} ${lx} ${n1(cy-lh)} Z" fill="#CFEFFF" stroke="${INK}" stroke-width="2"/>`;
    const fx=lx+B.w*0.32;s+=lineS(B.x,cy,B.x+B.w,cy,'#C9DDE2',1.2);[-0.7,0,0.7].forEach(k=>{const yy=cy+k*lh;s+=lineS(B.x+4,yy,lx,yy,GOLD,2.6)+lineS(lx,yy,fx,cy,GOLD,2.6)+lineS(fx,cy,fx+(fx-lx)*0.35,cy+(cy-yy)*0.35,GOLD,1.4,'opacity=".6"');});
    s+=ah(B.x+30,cy-0.7*lh,0,'#E0A21B',7)+`<circle cx="${n1(fx)}" cy="${n1(cy)}" r="4.5" fill="${CORAL}" stroke="${INK}" stroke-width="1.3"/>`+st(fx,cy+8,T("Focus","焦点"),{size:9.5,fill:HOT}).s;}
  if(d.kind==='prism'){const cy=B.y+H*0.55,pw=60;const P=[[cx,cy-pw*0.55],[cx-pw/2,cy+pw*0.35],[cx+pw/2,cy+pw*0.35]];
    const hit=[cx-pw*0.26,cy-pw*0.08],out=[cx+pw*0.24,cy-pw*0.02];s+=lineS(B.x+2,cy-8,hit[0],hit[1],'#FFFFFF',5)+lineS(B.x+2,cy-8,hit[0],hit[1],'#8A97A8',1.2,'opacity=".4"')+lineS(hit[0],hit[1],out[0],out[1],'#fff',3);
    s+=`<polygon points="${P.map(p=>n1(p[0])+','+n1(p[1])).join(' ')}" fill="#E6F7FF" fill-opacity=".7" stroke="${INK}" stroke-width="2"/>`;
    ['#E53935','#FB8C00','#FDD835','#43A047','#1E88E5','#3949AB','#8E24AA'].forEach((c,i)=>{s+=lineS(out[0],out[1],B.x+B.w-2,out[1]-14+i*9,c,2.6);});
    s+=st(B.x+4,cy-26,T("White light","白光"),{size:9.5,a:'start',fill:INK}).s;}
  return s+F.draw();};
DIAG.spectrum=(d,B)=>{let s='';const C=[['#E53935',T("Red","红")],['#FB8C00',T("Orange","橙")],['#FDD835',T("Yellow","黄")],['#43A047',T("Green","绿")],['#1E88E5',T("Blue","蓝")],['#3949AB',T("Indigo","靛")],['#8E24AA',T("Violet","紫")]];
  const w=B.w/7,lo={size:8,maxW:w+4,fill:INK};const lh=Math.max(...C.map(c=>stH(c[1],lo)));const bh=B.h-lh-14-stH(T("Together they make white","合在一起就是白光"),{size:9.5,maxW:B.w});
  C.forEach(([c,l],i)=>{s+=`<rect x="${n1(B.x+i*w)}" y="${n1(B.y+4)}" width="${n1(w+0.5)}" height="${n1(bh)}" fill="${c}"/>`;s+=st(B.x+i*w+w/2,B.y+bh+8,l,lo).s;});
  s+=`<rect x="${B.x}" y="${n1(B.y+4)}" width="${B.w}" height="${n1(bh)}" fill="none" stroke="${INK}" stroke-width="1.6"/>`;
  const fo={size:9.5,fill:HOT,maxW:B.w};s+=st(B.x+B.w/2,B.y+B.h-stH(T("Together they make white","合在一起就是白光"),fo),T("Together they make white","合在一起就是白光"),fo).s;return s;};
DIAG.graph=(d,B)=>{let s='';const xo={size:9,fill:ZH_T};const xh=stH(d.xl,xo);const x0=B.x+14,y0=B.y+B.h-xh-6,x1=B.x+B.w-6,y1=B.y+16;
  s+=arrow(x0,y0,x1,y0,INK,1.8)+arrow(x0,y0,x0,y1-6,INK,1.8);s+=st((x0+x1)/2,y0+3,d.xl,xo).s+st(x0+4,y1-14,d.yl,{size:9,a:'start',fill:ZH_T}).s;
  d.lines.forEach(L=>{const ex=x0+(x1-x0)*L.x,ey=y0-(y0-y1)*L.y;s+=lineS(x0,y0,ex,ey,L.c,3);s+=st(ex-4,ey-stH(L.l,{size:9.5})-2,L.l,{size:9.5,a:'end',fill:L.c}).s;});return s;};
DIAG.forces=(d,B)=>{let s='';const cx=B.x+B.w/2,gy=B.y+B.h*0.66,bw=46,bh=34;s+=lineS(B.x,gy,B.x+B.w,gy,INK,2);for(let x=B.x+4;x<B.x+B.w;x+=10) s+=lineS(x,gy,x-6,gy+6,INK,1);
  s+=`<rect x="${n1(cx-bw/2)}" y="${n1(gy-bh)}" width="${bw}" height="${bh}" rx="3" fill="#E8C48E" stroke="${INK}" stroke-width="2"/>`;const mY=gy-bh/2,o={size:9.5,fill:INK};
  s+=arrow(cx+bw/2,mY,cx+bw/2+40,mY,CORAL,3)+st(cx+bw/2+22,mY+6,T("Push","推力"),{...o,fill:CORAL}).s;
  s+=arrow(cx-bw/2,gy-6,cx-bw/2-34,gy-6,ORANGE,3)+st(cx-bw/2-18,gy-6-stH(T("Friction","摩擦力"),o)-6,T("Friction","摩擦力"),{...o,fill:'#B45F06'}).s;
  s+=arrow(cx,mY,cx,gy+30,BLUE,3)+st(cx+8,gy+12,T("Gravity","重力"),{...o,a:'start',fill:BLUE}).s;
  s+=arrow(cx,gy-bh,cx,gy-bh-34,TEAL,3)+st(cx+8,gy-bh-36,T("Support","支持力"),{...o,a:'start',fill:'#0F8576'}).s;return s;};
DIAG.tower=(d,B)=>{let s='';const gx=B.x+B.w*0.55,gy=B.y+B.h-6,top=B.y+6,bw=46,tw2=14;
  s+=lineS(B.x,gy,B.x+B.w,gy,INK,2);s+=`<path d="M${n1(gx-bw/2)} ${n1(gy)} Q${n1(gx-bw/2+4)} ${n1((gy+top)/2)} ${n1(gx-tw2/2)} ${n1(top)} L${n1(gx+tw2/2+4)} ${n1(top+6)} Q${n1(gx+bw/2-2)} ${n1((gy+top)/2)} ${n1(gx+bw/2)} ${n1(gy)} Z" fill="#9FB8D9" stroke="${INK}" stroke-width="2"/>`;
  for(let k=1;k<8;k++){const y=gy-(gy-top)*k/8,hw=(bw/2)-(bw/2-tw2/2)*k/8;s+=`<path d="M${n1(gx-hw)} ${n1(y+3)} Q${n1(gx)} ${n1(y-3)} ${n1(gx+hw)} ${n1(y+1)}" stroke="#fff" stroke-width="1.3" fill="none" opacity=".8"/>`;}
  if(d.wind) for(let k=0;k<3;k++){const y=top+30+k*34;s+=arrow(B.x+4,y,gx-bw/2-6+k*3,y,HL,2.4)+`<path d="M${n1(B.x+10)} ${n1(y+8)} q8 -4 16 0" stroke="${HL}" stroke-width="1.4" fill="none"/>`;}
  if(d.damper){const py=top+22;s+=lineS(gx,py-10,gx-6,py+10,INK,1.6)+`<circle cx="${n1(gx-6)}" cy="${n1(py+14)}" r="7" fill="${GOLD}" stroke="${INK}" stroke-width="1.6"/>`;
    s+=`<path d="M${n1(gx-18)} ${n1(py+26)} Q${n1(gx-6)} ${n1(py+32)} ${n1(gx+6)} ${n1(py+26)}" stroke="${HOT}" stroke-width="1.6" fill="none"/>`+ah(gx+6,py+26,-0.5,HOT,6);
    s+=lineS(gx+10,py+14,B.x+B.w-58,py+14,HOT,1.2,'stroke-dasharray="3 2"')+st(B.x+B.w-2,py+2,T("~1,000 t damper","约1000吨阻尼器"),{size:9,a:'end',fill:HOT,maxW:56}).s;}
  s+=st(gx,gy-stH(T("632 m","632米"),{size:10})-4,T("632 m","632米"),{size:10,fill:INK}).s;return s;};

// ---------- chemistry diagrams ----------
DIAG.donut=(d,B)=>{let s='';const r=Math.min(44,B.h/2-6),ri=r*0.55,cx=B.x+r+2,cy=B.y+B.h/2;const tot=d.segs.reduce((a,g)=>a+g.v,0);let a=-Math.PI/2;
  d.segs.forEach(g=>{const a2=a+2*Math.PI*g.v/tot;const p=(rr,t)=>[cx+rr*Math.cos(t),cy+rr*Math.sin(t)];const L=(a2-a)>Math.PI?1:0;const [o1,o2,i1,i2]=[p(r,a),p(r,a2),p(ri,a2),p(ri,a)];
    s+=`<path d="M${n1(o1[0])} ${n1(o1[1])} A${r} ${r} 0 ${L} 1 ${n1(o2[0])} ${n1(o2[1])} L${n1(i1[0])} ${n1(i1[1])} A${n1(ri)} ${n1(ri)} 0 ${L} 0 ${n1(i2[0])} ${n1(i2[1])} Z" fill="${g.c}" stroke="${INK}" stroke-width="1.4"/>`;a=a2;});
  const lx=B.x+2*r+12,lw=B.x+B.w-lx-14;const lo={size:9.5,a:'start',fill:INK,maxW:lw};const hs=d.segs.map(g=>stH(g.l,lo));const tot2=hs.reduce((x,y)=>x+y,0)+8*(hs.length-1);let y=cy-tot2/2;
  d.segs.forEach((g,i)=>{s+=`<rect x="${n1(lx)}" y="${n1(y+2)}" width="10" height="10" fill="${g.c}" stroke="${INK}" stroke-width="1.2"/>`+st(lx+14,y,g.l,lo).s;y+=hs[i]+8;});return s;};
DIAG.states=(d,B)=>{let s='';const cw=B.w/3,lo={size:9,maxW:cw,fill:INK};const L=[T("Ice (solid)","冰（固态）"),T("Water (liquid)","水（液态）"),T("Steam (gas)","水蒸气（气态）")];
  const lh=Math.max(...L.map(l=>stH(l,lo)));const bs=Math.min(cw-14,B.h-lh-26),by=B.y+14;const rnd=seeded(7);
  for(let i=0;i<3;i++){const bx=B.x+cw*i+(cw-bs)/2;s+=`<rect x="${n1(bx)}" y="${n1(by)}" width="${n1(bs)}" height="${n1(bs)}" rx="4" fill="#fff" stroke="${HL}" stroke-width="1.6"/>`;
    const pts=[];if(i===0){for(let r=0;r<4;r++)for(let c=0;c<4;c++)pts.push([bx+bs*(0.17+c*0.22),by+bs*(0.17+r*0.22)]);}
    else if(i===1){for(let k=0;k<13;k++)pts.push([bx+bs*(0.15+rnd()*0.7),by+bs*(0.38+rnd()*0.5)]);} else {for(let k=0;k<6;k++)pts.push([bx+bs*(0.12+rnd()*0.76),by+bs*(0.12+rnd()*0.76)]);}
    pts.forEach(p=>{s+=`<circle cx="${n1(p[0])}" cy="${n1(p[1])}" r="${n1(bs*0.07)}" fill="#7CC6F5" stroke="${INK}" stroke-width="1"/>`;});
    s+=st(bx+bs/2,by+bs+4,L[i],lo).s;if(i<2) s+=arrow(bx+bs+1,by-6,bx+bs+(cw-bs)-1,by-6,HOT,1.6)+`<text x="${n1(bx+bs+(cw-bs)/2)}" y="${n1(by-10)}" font-size="8.5" text-anchor="middle" font-weight="700" class="sv-mono" fill="${HOT}">${i?'100°C':'0°C'}</text>`;}
  return s;};
DIAG.tubes=(d,B)=>{let s='';const lo={size:9.5,fill:INK,maxW:80};const lh=stH(T("Hydrogen ×2","氢气 ×2"),lo);const by=B.y+B.h-lh-6,ty=B.y+6,tw=26,th=by-ty-22;
  s+=`<rect x="${B.x+6}" y="${n1(by-30)}" width="${B.w-12}" height="28" rx="3" fill="#BFE8FF" stroke="${INK}" stroke-width="1.6"/>`;
  [[B.x+B.w*0.3,0.62,T("Hydrogen ×2","氢气 ×2")],[B.x+B.w*0.7,0.31,T("Oxygen ×1","氧气 ×1")]].forEach(([x,f,l])=>{
    s+=`<path d="M${n1(x-tw/2)} ${n1(by-6)} L${n1(x-tw/2)} ${n1(ty+tw/2)} A${tw/2} ${tw/2} 0 0 1 ${n1(x+tw/2)} ${n1(ty+tw/2)} L${n1(x+tw/2)} ${n1(by-6)}" fill="#BFE8FF" stroke="${INK}" stroke-width="1.6"/>`;
    s+=`<path d="M${n1(x-tw/2+1.5)} ${n1(ty+th*f)} L${n1(x-tw/2+1.5)} ${n1(ty+tw/2)} A${tw/2-1.5} ${tw/2-1.5} 0 0 1 ${n1(x+tw/2-1.5)} ${n1(ty+tw/2)} L${n1(x+tw/2-1.5)} ${n1(ty+th*f)} Z" fill="#fff"/>`;
    for(let k=0;k<3;k++) s+=`<circle cx="${n1(x-5+k*5)}" cy="${n1(by-14-k*7)}" r="2" fill="#fff" stroke="${HL}" stroke-width=".8"/>`;
    s+=st(x,by+4,l,lo).s;});
  s+=`<rect x="${n1(B.x+B.w/2-9)}" y="${n1(ty+8)}" width="18" height="12" fill="#2B3A55" stroke="${INK}" stroke-width="1.4"/><text x="${n1(B.x+B.w/2)}" y="${n1(ty+17)}" font-size="8" text-anchor="middle" fill="#FFD84D" class="sv-mono">+ −</text>`;return s;};
const MOL={H2O:{f:'H₂O',n:T("Water","水"),a:[[0,0,11,CORAL],[-11,8,7,'#fff'],[11,8,7,'#fff']]},O2:{f:'O₂',n:T("Oxygen","氧气"),a:[[-8,0,11,CORAL],[8,0,11,CORAL]]},
  CO2:{f:'CO₂',n:T("Carbon dioxide","二氧化碳"),a:[[-17,0,10,CORAL],[17,0,10,CORAL],[0,0,11,'#3A3A44']]},H2:{f:'H₂',n:T("Hydrogen","氢气"),a:[[-6,0,7,'#fff'],[6,0,7,'#fff']]}};
DIAG.mol=(d,B)=>{let s='';const n=d.items.length,cw=B.w/n,F=footOf(d,B,10.5);const big=n===1?1.9:1;const cy=B.y+(B.h-F.h)*0.4;
  d.items.forEach((k,i)=>{const M=MOL[k],cx=B.x+cw*(i+.5);M.a.forEach(([x,y,r,c])=>{s+=`<circle cx="${n1(cx+x*big)}" cy="${n1(cy+y*big)}" r="${n1(r*big)}" fill="${c}" stroke="${INK}" stroke-width="1.6"/>`;});
    const fy=cy+22*big;s+=`<text x="${n1(cx)}" y="${n1(fy+4)}" font-size="${n===1?18:13}" text-anchor="middle" font-weight="700" class="sv-mono" fill="${INK}">${M.f}</text>`;s+=st(cx,fy+8,M.n,{size:9.5,maxW:cw}).s;});
  return s+F.draw();};
DIAG.beakers=(d,B)=>{let s='';const n=d.items.length,cw=B.w/n,F=footOf(d,B,10);const lo={size:10,maxW:cw};const lh=stH(d.items[0].l,lo);const bh=B.h-F.h-lh-12,bw=Math.min(cw-20,bh*0.85);
  d.items.forEach((it,i)=>{const cx=B.x+cw*(i+.5),x=cx-bw/2,y=B.y+4;s+=`<rect x="${n1(x)}" y="${n1(y+bh*0.18)}" width="${n1(bw)}" height="${n1(bh*0.82)}" fill="#DFF4FF"/>`;
    const rnd=seeded(i+3);for(let k=0;k<26;k++){const t=rnd(),ang=rnd()*Math.PI;const rr=t*it.spread*bw*0.55;const px=cx+rr*Math.cos(ang)*(rnd()>.5?1:-1),py=y+bh*0.24+rr*Math.sin(ang)*1.3;
      if(px>x+3&&px<x+bw-3&&py<y+bh-3) s+=`<circle cx="${n1(px)}" cy="${n1(py)}" r="2.2" fill="#3949AB" opacity="${n1(1-t*0.6)}"/>`;}
    s+=`<path d="M${n1(x)} ${n1(y)} L${n1(x)} ${n1(y+bh)} L${n1(x+bw)} ${n1(y+bh)} L${n1(x+bw)} ${n1(y)}" fill="none" stroke="${INK}" stroke-width="2"/>`;s+=st(cx,y+bh+5,it.l,lo).s;});
  return s+F.draw();};
DIAG.elements=(d,B)=>{let s='';const E=[[1,'H',T("Hydrogen","氢")],[6,'C',T("Carbon","碳")],[7,'N',T("Nitrogen","氮")],[8,'O',T("Oxygen","氧")],[11,'Na',T("Sodium","钠")],[26,'Fe',T("Iron","铁")]];
  const cols=3,gap=6,cw=(B.w-gap*2)/3,ch=(B.h-gap)/2;E.forEach(([z,sym,nm],i)=>{const x=B.x+(i%cols)*(cw+gap),y=B.y+Math.floor(i/cols)*(ch+gap);
    s+=`<rect x="${n1(x)}" y="${n1(y)}" width="${n1(cw)}" height="${n1(ch)}" rx="5" fill="${['#FFE7A3','#CFF5EF','#DCE6FF','#FFD6D6','#E9DCFF','#E3E8EF'][i]}" stroke="${INK}" stroke-width="1.5"/>`;
    s+=`<text x="${n1(x+5)}" y="${n1(y+11)}" font-size="9" class="sv-mono" fill="${ZH_T}">${z}</text><text x="${n1(x+cw/2)}" y="${n1(y+ch*0.5+4)}" font-size="20" text-anchor="middle" font-weight="700" class="sv-mono" fill="${INK}">${sym}</text>`;
    const lo={size:8.5,maxW:cw-4,fill:INK};s+=st(x+cw/2,y+ch-stH(nm,lo)-3,nm,lo).s;});return s;};
DIAG.ph=(d,B)=>{let s='';const cols=['#D32F2F','#E53935','#F4511E','#FB8C00','#FFB300','#FDD835','#C0CA33','#7CB342','#43A047','#00897B','#039BE5','#1E88E5','#3949AB','#5E35B1','#8E24AA'];
  const w=B.w/15,sy=B.y+B.h*0.46,sh=20;cols.forEach((c,i)=>{s+=`<rect x="${n1(B.x+i*w)}" y="${n1(sy)}" width="${n1(w+0.4)}" height="${sh}" fill="${c}"/>`;if(i%2===0) s+=`<text x="${n1(B.x+i*w+w/2)}" y="${n1(sy+14)}" font-size="8.5" text-anchor="middle" font-weight="700" fill="#fff" class="sv-mono">${i}</text>`;});
  s+=`<rect x="${B.x}" y="${n1(sy)}" width="${B.w}" height="${sh}" fill="none" stroke="${INK}" stroke-width="1.6"/>`;
  d.items.forEach((it,i)=>{const x=B.x+(it.v+0.5)*w,row=i%2;const ly=sy-8-row*22;s+=lineS(x,sy,x,ly+2,INK,1.2);const lo={size:8.5,fill:INK,maxW:60};s+=st(x,ly-stH(it.l,lo),it.l,lo).s;});
  const lo={size:9.5,maxW:70};s+=st(B.x+2,sy+sh+5,T("Acidic","酸性"),{...lo,a:'start',fill:'#D32F2F'}).s+st(B.x+7.5*w,sy+sh+5,T("Neutral","中性"),{...lo,fill:'#43A047'}).s+st(B.x+B.w-2,sy+sh+5,T("Basic","碱性"),{...lo,a:'end',fill:'#5E35B1'}).s;return s;};

// ---------- engineering diagrams ----------
DIAG.bridges=(d,B)=>{let s='';const L=[T("Beam: simple and short","梁桥：简单、跨度短"),T("Arch: pushes into the banks","拱桥：把力传给两岸"),T("Cable-stayed: towers hold cables","斜拉桥：桥塔拉住钢索")];
  const rh=B.h/3,dw=72;L.forEach((l,i)=>{const y=B.y+rh*i,cy=y+rh*0.6,x=B.x;
    if(i===0) s+=`<rect x="${x+8}" y="${n1(cy)}" width="8" height="${n1(rh*0.3)}" fill="#8A97A8" stroke="${INK}" stroke-width="1.2"/><rect x="${x+dw-16}" y="${n1(cy)}" width="8" height="${n1(rh*0.3)}" fill="#8A97A8" stroke="${INK}" stroke-width="1.2"/>`;
    if(i===1) s+=`<path d="M${x+4} ${n1(cy+rh*0.3)} Q${x+dw/2} ${n1(cy-rh*0.42)} ${x+dw-4} ${n1(cy+rh*0.3)}" fill="none" stroke="${CORAL}" stroke-width="3"/>`;
    if(i===2){s+=lineS(x+dw/2,cy,x+dw/2,cy-rh*0.55,INK,3);[-1,1].forEach(k=>[0.15,0.32,0.48].forEach(f=>{s+=lineS(x+dw/2,cy-rh*0.5,x+dw/2+k*dw*f,cy,HL,1.3);}));}
    s+=`<rect x="${x}" y="${n1(cy-3)}" width="${dw}" height="5" fill="${INK}"/>`;const lo={size:9.5,a:'start',maxW:B.w-dw-10,fill:INK};s+=st(x+dw+8,cy-stH(l,lo)/2-2,l,lo).s;});return s;};
DIAG.lever=(d,B)=>{let s='';const F=footOf(d,B,11);const cx=B.x+B.w/2,by=B.y+(B.h-F.h)*0.62,u=Math.min(38,B.w/5);
  s+=`<path d="M${n1(cx)} ${n1(by+2)} L${n1(cx-14)} ${n1(by+26)} L${n1(cx+14)} ${n1(by+26)} Z" fill="${GOLD}" stroke="${INK}" stroke-width="1.6"/><rect x="${n1(cx-2.3*u)}" y="${n1(by-4)}" width="${n1(4.6*u)}" height="6" rx="2" fill="#B98552" stroke="${INK}" stroke-width="1.6"/>`;
  const box=(x,h,l)=>`<rect x="${n1(x-12)}" y="${n1(by-4-h)}" width="24" height="${h}" fill="${l==='2'?CORAL:BLUE}" stroke="${INK}" stroke-width="1.5"/><text x="${n1(x)}" y="${n1(by-4-h/2+4)}" font-size="11" text-anchor="middle" font-weight="700" fill="#fff" class="sv-mono">${l} kg</text>`;
  s+=box(cx-u,30,'2')+box(cx+2*u,20,'1');
  s+=`<path d="M${n1(cx)} ${n1(by+34)} L${n1(cx-u)} ${n1(by+34)} M${n1(cx)} ${n1(by+34)} L${n1(cx+2*u)} ${n1(by+34)}" stroke="${HT}" stroke-width="1.2"/><text x="${n1(cx-u/2)}" y="${n1(by+46)}" font-size="10" text-anchor="middle" class="sv-mono" fill="${HT}">1 m</text><text x="${n1(cx+u)}" y="${n1(by+46)}" font-size="10" text-anchor="middle" class="sv-mono" fill="${HT}">2 m</text>`;
  return s+F.draw();};
DIAG.pulley=(d,B)=>{let s='';const cw=B.w/2,lo={size:9,maxW:cw-4,fill:INK};const L=[T("Fixed: changes direction","定滑轮：改变方向"),T("Movable: half the force","动滑轮：省一半力")];const lh=Math.max(...L.map(l=>stH(l,lo)));const bot=B.y+B.h-lh-6;
  s+=`<rect x="${B.x}" y="${B.y}" width="${B.w}" height="5" fill="#8A97A8"/>`;
  {const cx=B.x+cw/2,py=B.y+26,r=12;s+=lineS(cx,B.y+5,cx,py,INK,1.6)+lineS(cx-r,py,cx-r,bot-26,INK,1.6)+lineS(cx+r,py,cx+r,bot-8,INK,1.6)+`<circle cx="${n1(cx)}" cy="${py}" r="${r}" fill="#fff" stroke="${INK}" stroke-width="2"/><circle cx="${n1(cx)}" cy="${py}" r="2.5" fill="${INK}"/>`;
    s+=`<rect x="${n1(cx-r-10)}" y="${n1(bot-26)}" width="20" height="18" fill="${BLUE}" stroke="${INK}" stroke-width="1.5"/>`+arrow(cx+r,bot-26,cx+r,bot-6,CORAL,2.4);}
  {const cx=B.x+cw*1.5,py=bot-40,r=12;s+=lineS(cx-r,B.y+5,cx-r,py,INK,1.6)+lineS(cx+r,py,cx+r,B.y+24,INK,1.6)+`<circle cx="${n1(cx)}" cy="${n1(py)}" r="${r}" fill="#fff" stroke="${INK}" stroke-width="2"/><circle cx="${n1(cx)}" cy="${n1(py)}" r="2.5" fill="${INK}"/>`+lineS(cx,py,cx,py+16,INK,1.6);
    s+=`<rect x="${n1(cx-10)}" y="${n1(py+16)}" width="20" height="18" fill="${BLUE}" stroke="${INK}" stroke-width="1.5"/>`+arrow(cx+r,B.y+44,cx+r,B.y+18,CORAL,2.4);}
  s+=st(B.x+cw/2,bot+4,L[0],lo).s+st(B.x+cw*1.5,bot+4,L[1],lo).s;return s;};
DIAG.ramp=(d,B)=>{let s='';const lo={size:9.5,maxW:B.w,fill:INK};const L=[T("Steep: short path, big force","陡坡：路程短，费力"),T("Gentle: long path, small force","缓坡：路程长，省力")];
  const rh=B.h/2;L.forEach((l,i)=>{const lh=stH(l,lo),y0=B.y+rh*i+rh-lh-4,run=i?B.w-30:B.w*0.42,hgt=rh-lh-14,x0=B.x+4;
    s+=`<path d="M${x0} ${n1(y0)} L${n1(x0+run)} ${n1(y0)} L${n1(x0+run)} ${n1(y0-hgt)} Z" fill="#E8C48E" stroke="${INK}" stroke-width="1.6"/>`;
    const t=0.45,bx=x0+run*t,byy=y0-hgt*t,ang=Math.atan2(-hgt,run);s+=`<g transform="translate(${n1(bx)},${n1(byy)}) rotate(${n1(ang*180/Math.PI)})"><rect x="-8" y="-14" width="16" height="14" fill="${BLUE}" stroke="${INK}" stroke-width="1.4"/></g>`;
    const fl=i?20:40;s+=arrow(bx+4,byy-10,bx+4+fl*Math.cos(ang),byy-10+fl*Math.sin(ang),CORAL,i?2:3.4);s+=st(B.x+B.w/2,y0+3,l,lo).s;});return s;};
function battery(x,y){return `<line x1="${x}" y1="${y-9}" x2="${x}" y2="${y+9}" stroke="${INK}" stroke-width="2.4"/><line x1="${x+6}" y1="${y-5}" x2="${x+6}" y2="${y+5}" stroke="${INK}" stroke-width="4"/>`;}
function bulbS(x,y,lit){return (lit?`<circle cx="${x}" cy="${y}" r="13" fill="#FFE45C" opacity=".45"/>`:'')+`<circle cx="${x}" cy="${y}" r="8" fill="${lit?'#FFE45C':'#fff'}" stroke="${INK}" stroke-width="1.8"/><path d="M${x-5} ${y-5} L${x+5} ${y+5} M${x+5} ${y-5} L${x-5} ${y+5}" stroke="${INK}" stroke-width="1.3"/>`;}
DIAG.circuit=(d,B)=>{let s='';const W=(x1,y1,x2,y2)=>lineS(x1,y1,x2,y2,INK,2);
  const loop=(x,y,w,h,par,lab)=>{let g='';const lo={size:9.5,maxW:w+8,fill:INK};const lh=lab?stH(lab,lo):0;h-=lh+6;
    g+=W(x,y,x,y+h/2-11)+battery(x-3,y+h/2)+W(x,y+h/2+11,x,y+h)+W(x,y+h,x+w,y+h)+W(x+w,y+h,x+w,y);
    if(!par){g+=W(x,y,x+w*0.3-8,y)+bulbS(x+w*0.3,y,true)+W(x+w*0.3+8,y,x+w*0.7-8,y)+bulbS(x+w*0.7,y,true)+W(x+w*0.7+8,y,x+w,y);}
    else{const y2=y+h*0.42;g+=W(x,y,x+w*0.5-8,y)+bulbS(x+w*0.5,y,true)+W(x+w*0.5+8,y,x+w,y)+W(x,y2,x+w*0.5-8,y2)+bulbS(x+w*0.5,y2,true)+W(x+w*0.5+8,y2,x+w,y2);}
    g+=`<circle cx="${n1(x+w*0.5)}" cy="${n1(y+h)}" r="3" fill="#fff" stroke="${INK}" stroke-width="1.4"/>`;
    if(lab) g+=st(x+w/2,y+h+8,lab,lo).s;return g;};
  if(d.kind==='simple'){const x=B.x+30,y=B.y+16,w=B.w-60,h=B.h-28;s+=W(x,y,x,y+h/2-11)+battery(x-3,y+h/2)+W(x,y+h/2+11,x,y+h)+W(x,y+h,x+w,y+h)+W(x+w,y+h,x+w,y)+W(x,y,x+w/2-8,y)+bulbS(x+w/2,y,true)+W(x+w/2+8,y,x+w,y);
    s+=st(x-10,y+h/2+14,T("Battery","电池"),{size:9.5,a:'end',fill:INK}).s.replace(/x="[^"]+"/,`x="${n1(x+14)}"`).replace('text-anchor="end"','text-anchor="start"');
    s+=st(x+w/2,y+12,T("Bulb","灯泡"),{size:9.5,fill:INK}).s;[[x+w,y+h*0.25,0],[x+w*0.75,y+h,1],[x,y+h*0.8,2]].forEach(([ax,ay,k])=>{s+=ah(ax,ay,[Math.PI/2,Math.PI,-Math.PI/2][k],HOT,8);});}
  else{const cw=B.w/2;s+=loop(B.x+10,B.y+8,cw-24,B.h-8,false,T("Series: one path","串联：一条路径"))+loop(B.x+cw+12,B.y+8,cw-24,B.h-8,true,T("Parallel: two paths","并联：两条路径"));}
  return s;};

