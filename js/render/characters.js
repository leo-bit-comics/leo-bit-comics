// Characters: poses, hair, faces, person() and bit().
// ---------- characters ----------
const POSES={
  idle:{b:[[-22,-104],[-31,-82],[-29,-60]],f:[[22,-104],[31,-82],[29,-60]]},
  point:{b:[[-22,-104],[-31,-82],[-29,-60]],f:[[22,-104],[44,-102],[64,-112]]},
  wave:{b:[[-22,-104],[-31,-82],[-29,-60]],f:[[22,-104],[44,-118],[44,-148]]},
  cheer:{b:[[-22,-104],[-42,-122],[-46,-152]],f:[[22,-104],[42,-122],[46,-152]]},
  think:{b:[[-22,-104],[-8,-84],[12,-88]],f:[[22,-104],[36,-96],[18,-120]]},
  hold:{b:[[-22,-104],[-31,-82],[-29,-60]],f:[[22,-104],[38,-88],[52,-94]]},
  talk:{b:[[-22,-104],[-31,-82],[-29,-60]],f:[[22,-104],[40,-92],[54,-100]]},
};
const hairLeo=L=>`<path d="M-35 -148 C-38 -178 -18 -192 2 -190 C24 -190 41 -176 37 -148 L31 -162 L23 -165 L17 -173 L9 -167 L3 -177 L-5 -168 L-13 -175 L-20 -166 L-28 -169 Z" fill="${L.hair}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/><path d="M-12 -187 L-6 -199 L0 -189 L8 -201 L12 -188" fill="${L.hair}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`;
const hairMiaBack=L=>`<path d="M-22 -172 C-54 -176 -64 -138 -52 -100 C-46 -120 -38 -138 -26 -150 Z" fill="${L.hair}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/><circle cx="-30" cy="-168" r="5" fill="#22B8A7" stroke="${INK}" stroke-width="2"/>`;
const hairMiaFront=L=>`<path d="M-34 -136 C-40 -178 -16 -192 2 -190 C24 -190 42 -178 37 -136 C35 -150 33 -160 26 -165 C18 -159 6 -159 -2 -166 C-10 -159 -22 -159 -28 -164 C-32 -156 -33 -146 -34 -136 Z" fill="${L.hair}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`;
const hairWangBack=L=>`<circle cx="2" cy="-188" r="13" fill="${L.hair}" stroke="${INK}" stroke-width="2.5"/>`;
const hairWangFront=L=>`<path d="M-31 -144 C-36 -178 -14 -186 2 -185 C20 -186 40 -176 35 -144 C30 -164 16 -170 2 -168 C-12 -170 -26 -164 -31 -144 Z" fill="${L.hair}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>`;
const LOOK={
  leo:{skin:'#F5CBA7',hair:'#1E1B24',jacket:'#2F6FD6',trim:'#FFFFFF',pants:'#22305A',shoe:'#FFFFFF',hairF:hairLeo,s:0.92},
  mia:{skin:'#F7D2B6',hair:'#3B2418',jacket:'#2F6FD6',trim:'#FFFFFF',pants:'#22305A',shoe:'#FF8FA3',hairB:hairMiaBack,hairF:hairMiaFront,glasses:true,s:0.88},
  wang:{skin:'#EFC4A0',hair:'#2A2230',jacket:'#8C3B52',trim:'#F3D9DF',pants:'#3A3F55',shoe:'#3A3F55',hairB:hairWangBack,hairF:hairWangFront,glasses:true,s:1.0},
};
function face(e){
  const E=INK;
  const brow=(a,b,c,d)=>`<path d="M-14 ${-158+a} L-3 ${-159+b} M9 ${-159+c} L20 ${-158+d}" stroke="${E}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`;
  const eyes=(rx,ry,ox=0,oy=0)=>[-8,14].map(cx=>`<ellipse cx="${cx+ox}" cy="${-147+oy}" rx="${rx}" ry="${ry}" fill="${E}"/><circle cx="${cx+ox+1.3}" cy="${-149.5+oy}" r="1.4" fill="#fff"/>`).join('');
  const arcs=()=>[-8,14].map(cx=>`<path d="M${cx-5} -145 Q${cx} -153 ${cx+5} -145" stroke="${E}" stroke-width="2.7" fill="none" stroke-linecap="round"/>`).join('');
  const blush=`<ellipse cx="-17" cy="-136" rx="5" ry="3" fill="#FF7C8A" opacity=".45"/><ellipse cx="25" cy="-136" rx="5" ry="3" fill="#FF7C8A" opacity=".45"/>`;
  const M={talk:`<ellipse cx="4" cy="-130" rx="5.5" ry="4" fill="#8E2B3A" stroke="${E}" stroke-width="2"/>`,
    happy:`<path d="M-4 -133 Q4 -125 12 -133" stroke="${E}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
    grin:`<path d="M-6 -134 Q4 -118 14 -134 Z" fill="#8E2B3A" stroke="${E}" stroke-width="2.2" stroke-linejoin="round"/>`,
    o:`<ellipse cx="4" cy="-129" rx="4.5" ry="6" fill="#8E2B3A" stroke="${E}" stroke-width="2"/>`,
    flat:`<path d="M-1 -130 L10 -132" stroke="${E}" stroke-width="2.6" stroke-linecap="round"/>`,
    wavy:`<path d="M-4 -129 Q-1 -132 2 -129 Q5 -126 8 -129 Q10 -131 12 -129" stroke="${E}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    smirk:`<path d="M-2 -131 Q6 -127 13 -135" stroke="${E}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`};
  switch(e){
    case 'surprised': return brow(-5,-6,-6,-5)+eyes(4.4,6.2)+M.o;
    case 'happy': return brow(0,0,0,0)+eyes(3.6,5)+M.happy+blush;
    case 'grin': return brow(-2,-3,-3,-2)+arcs()+M.grin+blush;
    case 'think': return brow(0,-4,0,0)+eyes(3.4,4.8,2,-2)+M.flat;
    case 'worried': return brow(2,-3,-3,2)+eyes(3.6,5)+M.wavy;
    case 'determined': return brow(-3,2,2,-3)+eyes(3.6,4.4)+M.happy;
    case 'smirk': return brow(0,0,-4,-3)+eyes(3.4,4.6)+M.smirk;
    case 'dizzy': return brow(2,-3,-3,2)+[-8,14].map(cx=>`<circle cx="${cx}" cy="-147" r="5" fill="none" stroke="${E}" stroke-width="2"/><circle cx="${cx}" cy="-147" r="1.8" fill="${E}"/>`).join('')+M.wavy;
    default: return brow(0,0,0,0)+eyes(3.6,5)+M.talk;
  }
}
function arm(pts,L){const p=pts.map(q=>q.join(',')).join(' ');const h=pts[2];
  return `<polyline points="${p}" fill="none" stroke="${INK}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><polyline points="${p}" fill="none" stroke="${L.jacket}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${h[0]}" cy="${h[1]}" r="6.5" fill="${L.skin}" stroke="${INK}" stroke-width="2.5"/>`;}
function person(who,x,y,f,s,expr,pose,gog){
  const L=LOOK[who],P=POSES[pose]||POSES.idle,W=`stroke="${INK}" stroke-width="2.5"`;
  let g=`<g transform="translate(${x},${y}) scale(${n1(f*s*100)/100},${n1(s*100)/100})" stroke-linejoin="round">`;
  g+=`<ellipse cx="0" cy="0" rx="32" ry="5" fill="#000" opacity=".12"/>`;
  g+=`<rect x="-17" y="-56" width="14" height="50" rx="4" fill="${L.pants}" ${W}/><rect x="3" y="-56" width="14" height="50" rx="4" fill="${L.pants}" ${W}/>`;
  g+=`<path d="M-22 -1 Q-22 -11 -10 -11 L-3 -11 L-3 -1 Z" fill="${L.shoe}" ${W}/><path d="M3 -1 L3 -11 L12 -11 Q25 -11 25 -1 Z" fill="${L.shoe}" ${W}/>`;
  if(L.hairB) g+=L.hairB(L);
  g+=`<rect x="-26" y="-114" width="52" height="64" rx="15" fill="${L.jacket}" ${W}/>`;
  g+=`<rect x="-24" y="-62" width="48" height="9" rx="4" fill="${L.trim}" stroke="${INK}" stroke-width="2"/>`;
  g+=`<path d="M-13 -113 L0 -99 L13 -113" fill="none" stroke="${L.trim}" stroke-width="4.5"/><line x1="0" y1="-99" x2="0" y2="-62" stroke="${INK}" stroke-width="1.6" opacity=".45"/>`;
  g+=arm(P.b,L)+arm(P.f,L);
  g+=`<rect x="-7" y="-124" width="14" height="12" fill="${L.skin}" ${W}/>`;
  g+=`<circle cx="-31" cy="-148" r="7" fill="${L.skin}" ${W}/><circle cx="35" cy="-148" r="7" fill="${L.skin}" ${W}/>`;
  g+=`<circle cx="2" cy="-150" r="33" fill="${L.skin}" ${W}/>`;
  g+=face(expr)+L.hairF(L);
  if(L.glasses) g+=`<g fill="#fff" fill-opacity=".18" stroke="${INK}" stroke-width="2"><circle cx="-8" cy="-147" r="8.5"/><circle cx="14" cy="-147" r="8.5"/></g><path d="M0.5 -148 L5.5 -148 M-16.5 -148 L-29 -150" stroke="${INK}" stroke-width="2" fill="none"/>`;
  if(gog) g+=`<rect x="-22" y="-158" width="48" height="21" rx="9" fill="#BFE8FF" fill-opacity=".55" stroke="${INK}" stroke-width="2.5"/><path d="M-22 -150 L-31 -152 M26 -150 L35 -152" stroke="${INK}" stroke-width="3"/>`;
  return g+'</g>';}
function bit(x,y,f,s,expr,pose){
  const T1=TEAL,TD='#178F82',C='#7DF9FF';
  let g=`<g transform="translate(${x},${y}) scale(${n1(f*s*100)/100},${n1(s*100)/100})" stroke-linejoin="round">`;
  g+=`<ellipse cx="0" cy="40" rx="17" ry="4.5" fill="${C}" opacity=".5"/><path d="M-7 25 Q0 44 7 25 Z" fill="#FFD84D" stroke="${INK}" stroke-width="2"/>`;
  const A={idle:{b:[-29,6,-42,16],f:[29,6,42,16]},wave:{b:[-29,6,-42,16],f:[29,0,44,-18]},present:{b:[-29,6,-42,16],f:[29,2,50,-6]},cheer:{b:[-29,0,-44,-18],f:[29,0,44,-18]}}[pose]||{b:[-29,6,-42,16],f:[29,6,42,16]};
  const armD=a=>`<line x1="${a[0]}" y1="${a[1]}" x2="${a[2]}" y2="${a[3]}" stroke="${INK}" stroke-width="8" stroke-linecap="round"/><line x1="${a[0]}" y1="${a[1]}" x2="${a[2]}" y2="${a[3]}" stroke="${T1}" stroke-width="4" stroke-linecap="round"/><circle cx="${a[2]}" cy="${a[3]}" r="5" fill="${T1}" stroke="${INK}" stroke-width="2"/>`;
  g+=armD(A.b)+armD(A.f);
  g+=`<line x1="0" y1="-26" x2="0" y2="-39" stroke="${INK}" stroke-width="2.5"/><circle cx="0" cy="-43" r="5" fill="#FFD84D" stroke="${INK}" stroke-width="2.5"/>`;
  g+=`<rect x="-36" y="-10" width="8" height="16" rx="3" fill="${TD}" stroke="${INK}" stroke-width="2"/><rect x="28" y="-10" width="8" height="16" rx="3" fill="${TD}" stroke="${INK}" stroke-width="2"/>`;
  g+=`<rect x="-30" y="-26" width="60" height="52" rx="18" fill="${T1}" stroke="${INK}" stroke-width="2.5"/><path d="M-22 -20 Q-12 -25 0 -24" stroke="#fff" stroke-width="2.5" opacity=".5" fill="none" stroke-linecap="round"/>`;
  g+=`<rect x="-22" y="-18" width="44" height="28" rx="9" fill="#13213C" stroke="${INK}" stroke-width="2"/>`;
  const heart=(cx,cy)=>`<path d="M${cx} ${cy+4} C${cx-7} ${cy-1} ${cx-4} ${cy-7} ${cx} ${cy-3} C${cx+4} ${cy-7} ${cx+7} ${cy-1} ${cx} ${cy+4} Z" fill="#FF8FA3"/>`;
  const sm=`<path d="M-5 2 Q0 7 5 2" stroke="${C}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  const EY={talk:`<circle cx="-9" cy="-5" r="4" fill="${C}"/><circle cx="9" cy="-5" r="4" fill="${C}"/><path d="M-4 3 Q0 6 4 3" stroke="${C}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    happy:`<path d="M-14 -3 Q-9 -11 -4 -3 M4 -3 Q9 -11 14 -3" stroke="${C}" stroke-width="3" fill="none" stroke-linecap="round"/>`+sm,
    wow:`<circle cx="-9" cy="-5" r="6" fill="none" stroke="${C}" stroke-width="2.4"/><circle cx="-9" cy="-5" r="2.2" fill="${C}"/><circle cx="9" cy="-5" r="6" fill="none" stroke="${C}" stroke-width="2.4"/><circle cx="9" cy="-5" r="2.2" fill="${C}"/><circle cx="0" cy="5" r="2.2" fill="${C}"/>`,
    think:`<circle cx="-6" cy="-8" r="3.4" fill="${C}"/><circle cx="12" cy="-8" r="3.4" fill="${C}"/><path d="M-3 4 L5 3" stroke="${C}" stroke-width="2" stroke-linecap="round"/>`,
    wink:`<path d="M-14 -4 Q-9 -10 -4 -4" stroke="${C}" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="9" cy="-5" r="4" fill="${C}"/>`+sm,
    error:`<path d="M-13 -9 L-5 -1 M-5 -9 L-13 -1 M5 -9 L13 -1 M13 -9 L5 -1" stroke="#FF6B6B" stroke-width="2.6" stroke-linecap="round"/><path d="M-6 5 L-3 3 L0 5 L3 3 L6 5" stroke="#FF6B6B" stroke-width="2" fill="none"/>`,
    love:heart(-9,-5)+heart(9,-5)+sm};
  g+=EY[expr]||EY.talk;
  g+='</g>';
  g+=`<text x="${x}" y="${n1(y+20*s)}" font-size="${n1(8*s)}" text-anchor="middle" fill="#E9FFFB" font-weight="700" class="sv-mono" letter-spacing="1">01</text>`;
  return g;}

