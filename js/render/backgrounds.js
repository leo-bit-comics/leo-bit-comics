// Backgrounds (scenes). Register new ones on SCENES.
// ---------- scenes ----------
function skyline(ox,base,k,col,lit,hole){
  let g=`<g transform="translate(${ox},${base}) scale(${k})" fill="${col}">`;
  g+=`<rect x="4" y="-20" width="12" height="20"/><rect x="18" y="-30" width="9" height="30"/>`;
  g+=`<path d="M38 0 L44 -16 L50 0" stroke="${col}" stroke-width="2.4" fill="none"/><line x1="44" y1="0" x2="44" y2="-63" stroke="${col}" stroke-width="2.6"/><circle cx="44" cy="-16" r="7"/><circle cx="44" cy="-42" r="5"/><circle cx="44" cy="-55" r="2.5"/>`;
  g+=`<path d="M60 0 L62 -60 Q66 -68 71 -63 L74 0 Z"/><path d="M80 0 L82 -50 L92 -50 L94 0 Z"/><rect x="84.5" y="-47" width="5" height="4" fill="${hole}"/>`;
  g+=`<path d="M98 0 L99 -38 L102 -46 L105 -38 L106 0 Z"/><line x1="102" y1="-46" x2="102" y2="-54" stroke="${col}" stroke-width="1.2"/><rect x="108" y="-16" width="8" height="16"/>`;
  if(lit) [[7,-16],[11,-10],[20,-24],[22,-14],[64,-40],[67,-24],[85,-30],[89,-18],[100,-26],[110,-10]].forEach(([wx,wy])=>{g+=`<rect x="${wx}" y="${wy}" width="2" height="2.5" fill="#FFE45C"/>`;});
  return g+'</g>';}
function room(night){const wall=night?'#C9D3EC':'#DCE7F7',sky=night?'#1E2B55':'#9FD4F7',bld=night?'#34477A':'#7E95BF';
  let s=`<rect width="400" height="250" fill="${wall}"/>`;
  for(let x=0;x<400;x+=28) s+=`<rect x="${x}" y="0" width="13" height="200" fill="#fff" opacity=".18"/>`;
  s+=`<rect x="18" y="24" width="116" height="88" fill="${sky}"/>`;
  if(night) [[30,36],[52,44],[110,34],[124,52],[78,30],[96,46]].forEach(([a,b])=>{s+=`<circle cx="${a}" cy="${b}" r="1.3" fill="#fff"/>`;});
  if(night) s+=`<circle cx="118" cy="40" r="7" fill="#FFF3B0"/><circle cx="121" cy="38" r="6" fill="${sky}"/>`;
  s+=skyline(18,112,1,bld,night,sky);
  s+=`<rect x="18" y="24" width="116" height="88" fill="none" stroke="#fff" stroke-width="5"/><line x1="76" y1="24" x2="76" y2="112" stroke="#fff" stroke-width="4"/><rect x="18" y="24" width="116" height="88" fill="none" stroke="${INK}" stroke-width="2.5"/><rect x="12" y="110" width="128" height="7" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
  s+=`<g transform="rotate(4 335 75)"><rect x="302" y="32" width="64" height="84" fill="#fff" stroke="${INK}" stroke-width="2.5"/><rect x="306" y="36" width="56" height="54" fill="#6CC56A"/>${ball(334,62,13)}<text x="334" y="108" font-size="14" text-anchor="middle" fill="#FF5D5D" class="sv-disp">GOAL!</text></g>`;
  s+=`<rect x="0" y="198" width="400" height="7" fill="#fff" stroke="${INK}" stroke-width="1.5"/><rect x="0" y="204" width="400" height="46" fill="#C99D6E"/><line x1="0" y1="204" x2="400" y2="204" stroke="${INK}" stroke-width="2.5"/>`;
  for(let x=40;x<400;x+=90) s+=`<line x1="${x}" y1="204" x2="${x-30}" y2="250" stroke="#A97F55" stroke-width="1.5"/>`;
  return s;}
function kitchen(){let s=`<rect width="400" height="250" fill="#EEF3F6"/>`;
  for(let y=52;y<166;y+=18) s+=`<line x1="0" y1="${y}" x2="400" y2="${y}" stroke="#D5DEE6" stroke-width="1.2"/>`;
  for(let x=9;x<400;x+=18) s+=`<line x1="${x}" y1="34" x2="${x}" y2="166" stroke="#D5DEE6" stroke-width="1.2"/>`;
  s+=`<rect x="-2" y="-2" width="404" height="36" fill="#8FC7BE" stroke="${INK}" stroke-width="2.5"/>`;
  for(let x=66;x<400;x+=66) s+=`<line x1="${x}" y1="0" x2="${x}" y2="34" stroke="${INK}" stroke-width="2"/><circle cx="${x-8}" cy="26" r="2" fill="${INK}"/>`;
  s+=`<rect x="0" y="176" width="400" height="74" fill="#E7D5BD"/><rect x="-2" y="166" width="404" height="11" fill="#5E6E86" stroke="${INK}" stroke-width="2.5"/>`;
  for(let x=10;x<400;x+=98) s+=`<rect x="${x}" y="188" width="86" height="54" rx="3" fill="none" stroke="#B89F82" stroke-width="2"/><rect x="${x+36}" y="196" width="14" height="4" rx="2" fill="#B89F82"/>`;
  return s;}
function classroom(){let s=`<rect width="400" height="250" fill="#E2EDDA"/>`;
  s+=`<rect x="34" y="18" width="332" height="126" rx="3" fill="#A8754A" stroke="${INK}" stroke-width="3"/><rect x="42" y="26" width="316" height="110" fill="#2F5D4E"/>`;
  s+=`<g fill="#fff" opacity=".35" class="sv-mono"><text x="58" y="52" font-size="14">0101</text><text x="300" y="60" font-size="22" class="sv-disp">AI</text><text x="70" y="122" font-size="13">x + y = 10</text><text x="250" y="122" font-size="13">if → then</text></g><circle cx="200" cy="60" r="14" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>`;
  s+=`<rect x="40" y="136" width="320" height="6" fill="#8A5E38" stroke="${INK}" stroke-width="1.5"/><rect x="0" y="204" width="400" height="46" fill="#D9C3A0"/><line x1="0" y1="204" x2="400" y2="204" stroke="${INK}" stroke-width="2.5"/>`;
  return s;}
function field(){let s=`<rect width="400" height="250" fill="#BFE3FA"/>`;
  [[70,38,26],[250,26,20],[350,50,16]].forEach(([x,y,r])=>{s+=`<g fill="#fff"><ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r*0.5}"/><ellipse cx="${x+r*0.6}" cy="${y-4}" rx="${r*0.6}" ry="${r*0.45}"/></g>`;});
  s+=`<rect x="0" y="118" width="400" height="34" fill="#9DB4D3"/>`;for(let y=124;y<152;y+=7) s+=`<line x1="0" y1="${y}" x2="400" y2="${y}" stroke="#87A0C4" stroke-width="1.5"/>`;
  s+=`<rect x="0" y="150" width="400" height="100" fill="#6CC56A"/>`;for(let x=0;x<400;x+=60) s+=`<rect x="${x}" y="150" width="30" height="100" fill="#62B860"/>`;
  s+=`<line x1="0" y1="150" x2="400" y2="150" stroke="${INK}" stroke-width="2.5"/>`;
  s+=`<g fill="none" stroke-linecap="round"><path d="M304 172 L304 108 L392 108 L392 172" stroke="${INK}" stroke-width="7"/><path d="M304 172 L304 108 L392 108 L392 172" stroke="#fff" stroke-width="4"/></g>`;
  for(let x=314;x<392;x+=10) s+=`<line x1="${x}" y1="110" x2="${x}" y2="170" stroke="#fff" stroke-width=".8" opacity=".7"/>`;
  for(let y=118;y<172;y+=10) s+=`<line x1="306" y1="${y}" x2="390" y2="${y}" stroke="#fff" stroke-width=".8" opacity=".7"/>`;
  return s;}
function city(){let s=`<rect width="400" height="250" fill="#FFD6B5"/><rect y="62" width="400" height="48" fill="#FFC7A6"/><rect y="110" width="400" height="42" fill="#F9B39E"/><circle cx="330" cy="112" r="26" fill="#FFE08A" opacity=".9"/>`;
  [[6,104,22],[30,118,18],[50,96,20],[318,100,20],[340,112,24],[366,92,22]].forEach(([x,y,w])=>{s+=`<rect x="${x}" y="${y}" width="${w}" height="${150-y}" fill="#5D5F8C"/>`;});
  s+=skyline(84,150,2,'#4B4E7A',false,'#F9B39E');
  s+=`<rect x="0" y="150" width="400" height="46" fill="#5F7FA8"/>`;[[40,160,60],[160,170,90],[290,162,70],[90,184,50],[250,186,80]].forEach(([x,y,w])=>{s+=`<line x1="${x}" y1="${y}" x2="${x+w}" y2="${y}" stroke="#FFD6B5" stroke-width="2" opacity=".55" stroke-linecap="round"/>`;});
  s+=`<rect x="0" y="196" width="400" height="54" fill="#CDBFA9"/><line x1="0" y1="182" x2="400" y2="182" stroke="${INK}" stroke-width="2.5"/><line x1="0" y1="196" x2="400" y2="196" stroke="${INK}" stroke-width="2.5"/>`;
  for(let x=10;x<400;x+=30) s+=`<line x1="${x}" y1="182" x2="${x}" y2="196" stroke="${INK}" stroke-width="2"/>`;
  return s;}
function cyber(){let s=`<rect width="400" height="250" fill="#0E1A33"/>`;
  for(let x=0;x<=400;x+=25) s+=`<line x1="${x}" y1="0" x2="${x}" y2="250" stroke="#1C3360" stroke-width="1"/>`;
  for(let y=0;y<=250;y+=25) s+=`<line x1="0" y1="${y}" x2="400" y2="${y}" stroke="#1C3360" stroke-width="1"/>`;
  s+=`<g fill="none" stroke="${TEAL}" stroke-width="2" opacity=".6"><path d="M0 50 H75 V100 H150"/><path d="M400 75 H325 V25 H250"/><path d="M0 175 H50 V150 H125"/><path d="M400 150 H350 V200 H275"/></g>`;
  [[150,100],[250,25],[125,150],[275,200],[75,50],[325,75]].forEach(([x,y])=>{s+=`<circle cx="${x}" cy="${y}" r="4" fill="#7DF9FF"/>`;});
  s+=`<rect x="0" y="210" width="400" height="40" fill="#13264A"/><line x1="0" y1="210" x2="400" y2="210" stroke="#7DF9FF" stroke-width="1.5" opacity=".6"/>`;return s;}
function fair(){let s=`<rect width="400" height="250" fill="#FCE8EE"/>`;
  s+=`<rect x="8" y="112" width="84" height="60" fill="#fff" stroke="${INK}" stroke-width="2"/><rect x="16" y="120" width="68" height="10" fill="#9FD4F7"/><rect x="16" y="136" width="40" height="28" fill="#FFE7A3"/><rect x="0" y="172" width="104" height="8" fill="#A8754A" stroke="${INK}" stroke-width="2"/>`;
  s+=`<path d="M0 10 Q100 34 200 14 Q300 34 400 10" stroke="${INK}" stroke-width="1.5" fill="none"/>`;
  const cols=['#FF5D5D','#FFD84D','#22B8A7','#2F6FD6'];for(let i=0;i<16;i++){const x=12+i*25;const t=(x%200)/200;const y=(x<200?10+(14-10)*t:14+(10-14)*t)+ (4*t*(1-t))*20*2;s+=`<path d="M${x-7} ${n1(y)} L${x+7} ${n1(y)} L${x} ${n1(y+13)} Z" fill="${cols[i%4]}" stroke="${INK}" stroke-width="1.2"/>`;}
  s+=`<rect x="122" y="34" width="156" height="30" rx="4" fill="#2F6FD6" stroke="${INK}" stroke-width="2.5"/><text x="178" y="55" font-size="15" text-anchor="middle" fill="#fff" class="sv-disp">SCIENCE FAIR</text><text x="252" y="55" font-size="13" text-anchor="middle" fill="#FFD84D" class="sv-zhd">科学节</text>`;
  s+=`<rect x="0" y="204" width="400" height="46" fill="#D9C3A0"/><line x1="0" y1="204" x2="400" y2="204" stroke="${INK}" stroke-width="2.5"/>`;return s;}
function burst(){let s=`<rect width="400" height="250" fill="#FFE36E"/>`;
  for(let i=0;i<24;i+=2){const a1=i*15*Math.PI/180,a2=(i+1)*15*Math.PI/180;s+=`<polygon points="200,140 ${n1(200+500*Math.cos(a1))},${n1(140+500*Math.sin(a1))} ${n1(200+500*Math.cos(a2))},${n1(140+500*Math.sin(a2))}" fill="#FFD23F"/>`;}
  return s;}
const SCENES={'room':{top:'#DCE7F7',draw:()=>room(false)},'room-night':{top:'#C9D3EC',draw:()=>room(true)},kitchen:{top:'#EEF3F6',draw:kitchen},class:{top:'#E2EDDA',draw:classroom},field:{top:'#BFE3FA',draw:field},city:{top:'#FFD6B5',draw:city},cyber:{top:'#0E1A33',draw:cyber},fair:{top:'#FCE8EE',draw:fair},burst:{top:'#FFE36E',draw:burst}};


// ---------- scenes ----------
function lab(){let s=`<rect width="400" height="250" fill="#E3EEF2"/>`;
  s+=`<rect x="20" y="30" width="150" height="8" fill="#A8754A" stroke="${INK}" stroke-width="2"/><rect x="20" y="86" width="150" height="8" fill="#A8754A" stroke="${INK}" stroke-width="2"/>`;
  [[34,'#FF8FB1'],[62,'#7CC6F5'],[92,'#FFE45C'],[124,'#3FB8A0'],[150,'#C9A2F0']].forEach(([x,c],i)=>{const y=i%2?86:30;s+=`<path d="M${x-6} ${y} L${x-6} ${y-14} L${x-10} ${y-26} L${x+10} ${y-26} L${x+6} ${y-14} L${x+6} ${y}" fill="#fff" fill-opacity=".7" stroke="${INK}" stroke-width="1.6" transform="scale(1,1)"/><rect x="${x-6}" y="${y-10}" width="12" height="10" fill="${c}"/>`;});
  [[40,86,'#FFE45C'],[104,86,'#FF8FB1'],[80,30,'#3FB8A0']].forEach(([x,y,c])=>{s+=`<rect x="${x-7}" y="${y-22}" width="14" height="22" rx="3" fill="#fff" fill-opacity=".7" stroke="${INK}" stroke-width="1.5"/><rect x="${x-7}" y="${y-10}" width="14" height="10" fill="${c}"/>`;});
  s+=`<rect x="300" y="26" width="72" height="92" fill="#fff" stroke="${INK}" stroke-width="2.5"/><rect x="300" y="26" width="72" height="20" fill="#FFD84D" stroke="${INK}" stroke-width="2.5"/><text x="336" y="41" font-size="11" text-anchor="middle" class="sv-disp" fill="${INK}">SAFETY</text>`;
  s+=`<path d="M312 72 Q312 62 322 62 L350 62 Q360 62 360 72 Q360 82 350 82 L342 82 Q336 76 330 82 L322 82 Q312 82 312 72 Z" fill="#9FD4F7" stroke="${INK}" stroke-width="2"/><text x="336" y="106" font-size="11" text-anchor="middle" class="sv-zhd" fill="${HOT}">安全第一</text>`;
  s+=`<rect x="0" y="176" width="400" height="74" fill="#C9D3DE"/><rect x="-2" y="166" width="404" height="11" fill="#2B3A55" stroke="${INK}" stroke-width="2.5"/>`;
  for(let x=10;x<400;x+=98) s+=`<rect x="${x}" y="188" width="86" height="54" rx="3" fill="none" stroke="#9AA6B4" stroke-width="2"/><rect x="${x+36}" y="196" width="14" height="4" rx="2" fill="#9AA6B4"/>`;return s;}
function workshop(){let s=`<rect width="400" height="250" fill="#F1E6D6"/>`;
  s+=`<rect x="24" y="22" width="190" height="110" fill="#D9B98E" stroke="${INK}" stroke-width="2.5"/>`;for(let x=36;x<214;x+=14) for(let y=32;y<132;y+=14) s+=`<circle cx="${x}" cy="${y}" r="1.4" fill="#A8875E"/>`;
  s+=`<g stroke="${INK}" stroke-width="2"><rect x="44" y="40" width="10" height="44" rx="2" fill="#A8754A"/><rect x="34" y="34" width="30" height="12" rx="2" fill="#8A97A8"/>`;
  s+=`<path d="M84 44 L120 44 L120 56 L84 72 Z" fill="#C9CCD6"/><rect x="118" y="40" width="12" height="20" rx="3" fill="${CORAL}"/>`;
  s+=`<rect x="146" y="40" width="8" height="58" rx="2" fill="#8A97A8"/><circle cx="150" cy="40" r="9" fill="none"/><rect x="170" y="38" width="14" height="80" fill="${GOLD}"/></g>`;
  s+=`<rect x="250" y="40" width="120" height="8" fill="#A8754A" stroke="${INK}" stroke-width="2"/><rect x="262" y="16" width="30" height="24" fill="#E8C48E" stroke="${INK}" stroke-width="2"/><rect x="300" y="22" width="24" height="18" fill="#9FD4F7" stroke="${INK}" stroke-width="2"/><rect x="332" y="12" width="28" height="28" fill="#FFD6D6" stroke="${INK}" stroke-width="2"/>`;
  s+=`<rect x="0" y="176" width="400" height="74" fill="#C99D6E"/><rect x="-2" y="164" width="404" height="13" fill="#B98552" stroke="${INK}" stroke-width="2.5"/>`;for(let x=60;x<400;x+=110) s+=`<rect x="${x}" y="177" width="10" height="73" fill="#8A5E38" stroke="${INK}" stroke-width="2"/>`;return s;}
SCENES.lab={top:'#E3EEF2',draw:lab};SCENES.workshop={top:'#F1E6D6',draw:workshop};

