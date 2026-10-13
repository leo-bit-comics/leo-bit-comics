// Icon set (icon) and card pictures (pic), plus extension sets ICON2 / PIC2.
// ---------- icons (drawn in a ±11 box) ----------
function icon(name,cx,cy,s=1){
  const I=INK;let g='';
  switch(name){
    case 'key': g=`<rect x="-11" y="-10" width="22" height="20" rx="4" fill="#fff" stroke="${I}" stroke-width="1.8"/><rect x="-8" y="-7" width="16" height="11" rx="2" fill="#EEF2F7"/><text x="0" y="3" font-size="11" text-anchor="middle" font-weight="700" class="sv-en" fill="${I}">W</text>`;break;
    case 'chip': g=`<g stroke="${I}" stroke-width="1.6">${[-4,0,4].map(v=>`<line x1="${v}" y1="-11" x2="${v}" y2="11"/><line x1="-11" y1="${v}" x2="11" y2="${v}"/>`).join('')}</g><rect x="-8" y="-8" width="16" height="16" rx="2" fill="#2B3A55" stroke="${I}" stroke-width="1.6"/><text x="0" y="2" font-size="5" text-anchor="middle" fill="#7DF9FF" font-weight="700" class="sv-en">CPU</text>`;break;
    case 'screen': g=`<rect x="-11" y="-9" width="22" height="15" rx="2" fill="#13213C" stroke="${I}" stroke-width="1.6"/><rect x="-8" y="-6" width="16" height="9" fill="#7DF9FF" opacity=".55"/><line x1="0" y1="6" x2="0" y2="9" stroke="${I}" stroke-width="2"/><line x1="-5" y1="10" x2="5" y2="10" stroke="${I}" stroke-width="2" stroke-linecap="round"/>`;break;
    case 'desk': g=`<rect x="-6" y="-9" width="9" height="7" fill="#fff" stroke="${I}" stroke-width="1.2" transform="rotate(-8)"/><rect x="0" y="-8" width="8" height="6" fill="#FFE7A3" stroke="${I}" stroke-width="1.2"/><rect x="-11" y="-2" width="22" height="4" rx="1" fill="#A8754A" stroke="${I}" stroke-width="1.4"/><line x1="-8" y1="2" x2="-8" y2="10" stroke="${I}" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="10" stroke="${I}" stroke-width="2"/>`;break;
    case 'shelf': g=`<rect x="-10" y="-11" width="20" height="22" fill="#F3E3C8" stroke="${I}" stroke-width="1.5"/><line x1="-10" y1="0" x2="10" y2="0" stroke="${I}" stroke-width="1.5"/>`+[['#FF5D5D',-8,-10],['#2F6FD6',-4,-9],['#22B8A7',0,-10],['#FFD84D',-8,1],['#C2416B',-4,2],['#2F6FD6',1,1]].map(b=>`<rect x="${b[1]}" y="${b[2]}" width="3.4" height="${b[2]<0?-1-b[2]:10-b[2]}" fill="${b[0]}"/>`).join('');break;
    case 'bulb': g=`<circle cx="0" cy="-3" r="7.5" fill="#FFE45C" stroke="${I}" stroke-width="1.6"/><rect x="-3.5" y="4" width="7" height="5" fill="#8A97A8" stroke="${I}" stroke-width="1.4"/>`;break;
    case 'eye': g=`<path d="M-11 0 Q0 -10 11 0 Q0 10 -11 0 Z" fill="#fff" stroke="${I}" stroke-width="1.6"/><circle r="4.2" fill="${HL}"/><circle r="2" fill="${I}"/>`;break;
    case 'brain': g=`<path d="M-10 2 C-13 -4 -8 -10 -3 -8 C-1 -12 6 -11 7 -7 C12 -7 13 0 10 3 C12 8 5 11 2 8 C-1 11 -8 10 -8 6 C-11 6 -12 4 -10 2 Z" fill="#FFB8C6" stroke="${I}" stroke-width="1.6"/><path d="M-5 -3 Q-2 0 -5 3 M2 -5 Q5 -1 2 2 M0 4 Q4 6 6 3" stroke="${I}" stroke-width="1.2" fill="none"/>`;break;
    case 'photo': g=`<rect x="-11" y="-8" width="22" height="16" rx="2" fill="#BFE3FA" stroke="${I}" stroke-width="1.6"/><path d="M-11 8 L-3 -1 L3 5 L6 2 L11 8 Z" fill="#6CC56A" stroke="${I}" stroke-width="1.2"/><circle cx="6" cy="-3" r="2.4" fill="#FFD84D"/>`;break;
    case 'tag': g=`<path d="M-11 -6 L4 -6 L11 0 L4 6 L-11 6 Z" fill="#FFD84D" stroke="${I}" stroke-width="1.6"/><circle cx="4" cy="0" r="1.8" fill="#fff" stroke="${I}"/>`;break;
    case 'check': g=`<circle r="10" fill="#2BAE66" stroke="${I}" stroke-width="1.6"/><path d="M-5 0 L-1 4.5 L6 -4" stroke="#fff" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;break;
    case 'cross': g=`<circle r="10" fill="#FF5D5D" stroke="${I}" stroke-width="1.6"/><path d="M-4.5 -4.5 L4.5 4.5 M4.5 -4.5 L-4.5 4.5" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/>`;break;
    case 'q': g=`<circle r="10" fill="#FFD84D" stroke="${I}" stroke-width="1.6"/><text x="0" y="5" font-size="14" text-anchor="middle" font-weight="700" class="sv-en" fill="${I}">?</text>`;break;
    case 'search': g=`<circle cx="-2" cy="-2" r="6.5" fill="#fff" stroke="${I}" stroke-width="2.2"/><line x1="3" y1="3" x2="10" y2="10" stroke="${I}" stroke-width="3.2" stroke-linecap="round"/>`;break;
    case 'calc': g=`<rect x="-8" y="-11" width="16" height="22" rx="2.5" fill="#2B3A55" stroke="${I}" stroke-width="1.5"/><rect x="-5.5" y="-8.5" width="11" height="5" fill="#7DF9FF"/>`+[-4,0,4].map(x=>[0,4,8].map(y=>`<circle cx="${x}" cy="${y-1}" r="1.2" fill="#fff"/>`).join('')).join('');break;
    case 'cal': g=`<rect x="-10" y="-8" width="20" height="18" rx="2" fill="#fff" stroke="${I}" stroke-width="1.6"/><rect x="-10" y="-8" width="20" height="5" fill="#FF5D5D" stroke="${I}" stroke-width="1.6"/><line x1="-5" y1="-11" x2="-5" y2="-6" stroke="${I}" stroke-width="2"/><line x1="5" y1="-11" x2="5" y2="-6" stroke="${I}" stroke-width="2"/>`+[-5,0,5].map(x=>[1,6].map(y=>`<rect x="${x-1.5}" y="${y-1.5}" width="3" height="3" fill="${HL}"/>`).join('')).join('');break;
    case 'code': g=`<rect x="-11" y="-9" width="22" height="18" rx="3" fill="#13213C" stroke="${I}" stroke-width="1.5"/><text x="0" y="3.5" font-size="9" text-anchor="middle" font-weight="700" class="sv-mono" fill="#7DF9FF">&lt;/&gt;</text>`;break;
    case 'globe': g=`<circle r="10" fill="#9FD4F7" stroke="${I}" stroke-width="1.6"/><ellipse rx="4.5" ry="10" fill="none" stroke="${I}" stroke-width="1.3"/><line x1="-10" y1="0" x2="10" y2="0" stroke="${I}" stroke-width="1.3"/><path d="M-8 -5 Q0 -3 8 -5 M-8 5 Q0 3 8 5" stroke="${I}" stroke-width="1" fill="none"/>`;break;
    case 'play': g=`<rect x="-11" y="-8" width="22" height="16" rx="4" fill="#FF5D5D" stroke="${I}" stroke-width="1.6"/><path d="M-3 -4.5 L5 0 L-3 4.5 Z" fill="#fff"/>`;break;
    case 'mic': g=`<rect x="-4" y="-11" width="8" height="13" rx="4" fill="#2B3A55" stroke="${I}" stroke-width="1.5"/><path d="M-7.5 -1 Q-7.5 7 0 7 Q7.5 7 7.5 -1" stroke="${I}" stroke-width="1.6" fill="none"/><line x1="0" y1="7" x2="0" y2="11" stroke="${I}" stroke-width="1.8"/>`;break;
    case 'map': g=`<path d="M0 11 C-8 2 -8 -2 -8 -4 A8 8 0 1 1 8 -4 C8 -2 8 2 0 11 Z" fill="#FF5D5D" stroke="${I}" stroke-width="1.6"/><circle cx="0" cy="-4" r="3" fill="#fff"/>`;break;
    case 'book': g=`<path d="M0 -6 Q-6 -10 -11 -8 L-11 8 Q-6 6 0 9 Q6 6 11 8 L11 -8 Q6 -10 0 -6 Z" fill="#fff" stroke="${I}" stroke-width="1.6"/><line x1="0" y1="-6" x2="0" y2="9" stroke="${I}" stroke-width="1.4"/><path d="M-8 -4 L-3 -3 M-8 0 L-3 1 M3 -3 L8 -4 M3 1 L8 0" stroke="${HL}" stroke-width="1.2"/>`;break;
    case 'chat': g=`<path d="M-11 -8 Q-11 -10 -9 -10 L9 -10 Q11 -10 11 -8 L11 3 Q11 5 9 5 L-2 5 L-7 10 L-6 5 L-9 5 Q-11 5 -11 3 Z" fill="#fff" stroke="${I}" stroke-width="1.6"/><circle cx="-5" cy="-2.5" r="1.6" fill="${HL}"/><circle cx="0" cy="-2.5" r="1.6" fill="${HL}"/><circle cx="5" cy="-2.5" r="1.6" fill="${HL}"/>`;break;
    case 'data': g=`<path d="M-9 -7 L-9 7 A9 3.5 0 0 0 9 7 L9 -7" fill="#CFF5EF" stroke="${I}" stroke-width="1.6"/><ellipse cx="0" cy="-7" rx="9" ry="3.5" fill="#E9FFFB" stroke="${I}" stroke-width="1.6"/><path d="M-9 0 A9 3.5 0 0 0 9 0" fill="none" stroke="${I}" stroke-width="1.3"/>`;break;
    case 'game': g=`<path d="M-11 2 Q-11 -6 -5 -6 L5 -6 Q11 -6 11 2 Q11 9 6 7 L3 4 L-3 4 L-6 7 Q-11 9 -11 2 Z" fill="#2B3A55" stroke="${I}" stroke-width="1.5"/><path d="M-7 -1 L-3 -1 M-5 -3 L-5 1" stroke="#fff" stroke-width="1.6"/><circle cx="4" cy="-2" r="1.5" fill="#FF5D5D"/><circle cx="7" cy="1" r="1.5" fill="#FFD84D"/>`;break;
    case 'warn': g=`<path d="M0 -10 L11 9 L-11 9 Z" fill="#FFD84D" stroke="${I}" stroke-width="1.6" stroke-linejoin="round"/><text x="0" y="7" font-size="12" text-anchor="middle" font-weight="700" class="sv-en" fill="${I}">!</text>`;break;
    case 'lock': g=`<path d="M-5 -2 L-5 -6 A5 5 0 0 1 5 -6 L5 -2" fill="none" stroke="${I}" stroke-width="2.2"/><rect x="-8" y="-2" width="16" height="12" rx="2" fill="#FFD84D" stroke="${I}" stroke-width="1.6"/><circle cx="0" cy="4" r="1.8" fill="${I}"/>`;break;
    case 'pen': g=`<path d="M-9 9 L-7 3 L5 -9 L9 -5 L-3 7 Z" fill="#FFD84D" stroke="${I}" stroke-width="1.6" stroke-linejoin="round"/><path d="M-9 9 L-7 3 L-3 7 Z" fill="#F5CBA7" stroke="${I}" stroke-width="1.2"/>`;break;
    case 'gear': g=`<g fill="#8A97A8" stroke="${I}" stroke-width="1.4">${[0,45,90,135].map(a=>`<rect x="-2.5" y="-11" width="5" height="22" rx="1" transform="rotate(${a})"/>`).join('')}<circle r="7.5"/></g><circle r="3" fill="#fff" stroke="${I}" stroke-width="1.4"/>`;break;
    case 'laptop': g=`<rect x="-10" y="-9" width="20" height="13" rx="2" fill="#13213C" stroke="${I}" stroke-width="1.5"/><rect x="-7.5" y="-6.5" width="15" height="8" fill="#7DF9FF" opacity=".6"/><path d="M-13 6 L13 6 L11 4 L-11 4 Z" fill="#AEB6C6" stroke="${I}" stroke-width="1.4"/>`;break;
    default: if(typeof ICON2!=='undefined'&&ICON2[name]) g=ICON2[name](); else {console.warn('LBC: unknown icon',name);g=`<circle r="6" fill="${HL}"/>`;}
  }
  return `<g transform="translate(${n1(cx)},${n1(cy)}) scale(${n1(s*100)/100})">${g}</g>`;
}

// ---------- little pictures for cards (±20 x ±16) ----------
function pic(name,cx,cy,s=1){
  const I=INK;let g='';
  const catHead=(fill,folded)=>{
    let e=folded?`<path d="M-11 -6 Q-12 -13 -5 -10 Z" fill="${fill}" stroke="${I}" stroke-width="1.6"/><path d="M11 -6 Q12 -13 5 -10 Z" fill="${fill}" stroke="${I}" stroke-width="1.6"/>`
      :`<path d="M-11 -4 L-10 -16 L-3 -9 Z" fill="${fill}" stroke="${I}" stroke-width="1.6" stroke-linejoin="round"/><path d="M11 -4 L10 -16 L3 -9 Z" fill="${fill}" stroke="${I}" stroke-width="1.6" stroke-linejoin="round"/>`;
    return e+`<ellipse cx="0" cy="0" rx="12" ry="10.5" fill="${fill}" stroke="${I}" stroke-width="1.6"/><circle cx="-4.5" cy="-1.5" r="1.7" fill="${I}"/><circle cx="4.5" cy="-1.5" r="1.7" fill="${I}"/><path d="M-1.5 2 L1.5 2 L0 3.8 Z" fill="#FF8FA3"/><path d="M-6 3 L-17 1 M-6 5 L-17 6 M6 3 L17 1 M6 5 L17 6" stroke="${I}" stroke-width=".9"/>`;};
  switch(name){
    case 'cat': g=catHead('#F2A65A',false);break;
    case 'foldcat': g=catHead('#C9CCD6',true);break;
    case 'fox': g=`<path d="M-12 -2 L-12 -16 L-3 -9 Z M12 -2 L12 -16 L3 -9 Z" fill="#F07B2B" stroke="${I}" stroke-width="1.6" stroke-linejoin="round"/><path d="M-13 -4 Q-13 -11 0 -11 Q13 -11 13 -4 Q10 6 0 11 Q-10 6 -13 -4 Z" fill="#F07B2B" stroke="${I}" stroke-width="1.6"/><path d="M-11 -1 Q-6 8 0 11 Q6 8 11 -1 Q5 3 0 3 Q-5 3 -11 -1 Z" fill="#fff"/><circle cx="-5" cy="-3" r="1.7" fill="${I}"/><circle cx="5" cy="-3" r="1.7" fill="${I}"/><circle cx="0" cy="9" r="1.8" fill="${I}"/><path d="M-5 5 L-16 3 M5 5 L16 3" stroke="${I}" stroke-width=".9"/>`;break;
    case 'banana': g=`<path d="M-15 -6 Q-12 12 14 6 Q17 4 15 2 Q-4 6 -10 -8 Z" fill="#FFD23F" stroke="${I}" stroke-width="1.6" stroke-linejoin="round"/><path d="M-15 -6 L-13 -10 L-10 -8" fill="#6B4A1E" stroke="${I}" stroke-width="1.4"/><path d="M14 6 L17 6" stroke="#6B4A1E" stroke-width="2.4"/><circle cx="2" cy="5" r="1.1" fill="#8B5A2B"/><circle cx="-4" cy="2" r="1" fill="#8B5A2B"/>`;break;
    case 'bottle': g=`<path d="M-5 -10 L-5 -7 Q-9 -4 -9 1 L-9 13 Q-9 15 -7 15 L7 15 Q9 15 9 13 L9 1 Q9 -4 5 -7 L5 -10 Z" fill="#BFE8FF" stroke="${I}" stroke-width="1.6"/><rect x="-5.5" y="-15" width="11" height="5" rx="1" fill="#2D6CDF" stroke="${I}" stroke-width="1.4"/><rect x="-9" y="2" width="18" height="6" fill="#fff" opacity=".8"/><line x1="-5" y1="-4" x2="-5" y2="12" stroke="#fff" stroke-width="1.6" opacity=".8"/>`;break;
    case 'medicine': g=`<rect x="-8" y="-9" width="16" height="22" rx="3" fill="#FFB347" stroke="${I}" stroke-width="1.6"/><rect x="-9.5" y="-15" width="19" height="7" rx="1.5" fill="#fff" stroke="${I}" stroke-width="1.6"/><rect x="-8" y="-3" width="16" height="10" fill="#fff"/><path d="M0 -1.5 L0 5.5 M-3.5 2 L3.5 2" stroke="#E04848" stroke-width="2.2"/>`;break;
    case 'tissue': g=`<path d="M-12 4 L-9 -8 L-2 -12 L6 -9 L12 -2 L10 9 L1 12 L-8 10 Z" fill="#fff" stroke="${I}" stroke-width="1.6" stroke-linejoin="round"/><path d="M-6 -4 L0 1 L5 -5 M-3 6 L2 2 L7 5 M-8 2 L-4 0" stroke="#AEB6C6" stroke-width="1.2" fill="none"/>`;break;
    case 'table': g=`<rect x="-19" y="-6" width="38" height="20" rx="2" fill="#B98552" stroke="${I}" stroke-width="1.6"/><path d="M-16 0 Q-4 -2 6 1 T17 0 M-17 7 Q-5 5 5 8 T17 7" stroke="#8A5E38" stroke-width="1.1" fill="none"/>`;break;
    default: if(typeof PIC2!=='undefined'&&PIC2[name]) g=PIC2[name](); else console.warn('LBC: unknown picture',name); break;
    case 'bananaT': g=pic('table',0,0,1)+`<g transform="translate(0,-4) scale(.8)">${pic('banana',0,0,1)}</g>`;return `<g transform="translate(${n1(cx)},${n1(cy)}) scale(${n1(s*100)/100})">${g}</g>`;
  }
  return `<g transform="translate(${n1(cx)},${n1(cy)}) scale(${n1(s*100)/100})">${g}</g>`;
}


// ---------- extra icons (±11 box) ----------
const ICON2={
  ice:()=>`<rect x="-10" y="-10" width="20" height="20" rx="4" fill="#D8F3FF" stroke="${INK}" stroke-width="1.6"/><path d="M-6 -6 L0 -6 M-6 -2 L-3 -2" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M4 3 L7 6" stroke="#7CC6F5" stroke-width="1.6" stroke-linecap="round"/>`,
  user:()=>`<circle cx="0" cy="-5" r="5" fill="${BLUE}" stroke="${INK}" stroke-width="1.5"/><path d="M-9 10 Q-9 1 0 1 Q9 1 9 10 Z" fill="${BLUE}" stroke="${INK}" stroke-width="1.5"/>`,
  speaker:()=>`<path d="M-10 -4 L-5 -4 L2 -10 L2 10 L-5 4 L-10 4 Z" fill="#2B3A55" stroke="${INK}" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 -5 Q9 0 5 5 M7 -9 Q14 0 7 9" stroke="${INK}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`,
  ear:()=>`<path d="M5 9 Q0 11 -1 6 Q-2 2 -5 0 Q-9 -4 -6 -8 Q-2 -12 4 -10 Q9 -8 9 -2 Q9 2 6 4 Q4 6 5 9 Z" fill="#F5CBA7" stroke="${INK}" stroke-width="1.5"/><path d="M-2 -5 Q2 -8 5 -4 Q6 0 2 1" stroke="${INK}" stroke-width="1.3" fill="none"/>`,
  wave:()=>`<path d="M-11 0 Q-8 -8 -5 0 T1 0 T7 0 T11 -3" stroke="${HL}" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M-11 6 Q-8 1 -5 6 T1 6 T7 6" stroke="${HL}" stroke-width="1.4" fill="none" opacity=".6"/>`,
  drop:()=>`<path d="M0 -11 C6 -3 8 1 8 4 A8 8 0 0 1 -8 4 C-8 1 -6 -3 0 -11 Z" fill="#7CC6F5" stroke="${INK}" stroke-width="1.5"/><path d="M-3 3 Q-3 6 0 7" stroke="#fff" stroke-width="1.5" fill="none"/>`,
  bubbles:()=>`<circle cx="-4" cy="3" r="6" fill="#E6F7FF" stroke="${INK}" stroke-width="1.4"/><circle cx="5" cy="-4" r="4.5" fill="#E6F7FF" stroke="${INK}" stroke-width="1.4"/><circle cx="6" cy="6" r="3" fill="#E6F7FF" stroke="${INK}" stroke-width="1.3"/>`,
  flame:()=>`<path d="M0 11 C-8 11 -10 3 -6 -3 C-5 1 -3 2 -2 1 C-4 -5 0 -9 2 -11 C3 -6 8 -3 8 3 C8 8 5 11 0 11 Z" fill="${ORANGE}" stroke="${INK}" stroke-width="1.4"/><path d="M0 10 C-3 10 -4 6 -2 3 C-1 5 1 4 2 2 C4 5 4 10 0 10 Z" fill="#FFE45C"/>`,
  leaf:()=>`<path d="M-9 9 C-10 -4 -2 -10 10 -10 C10 2 4 10 -9 9 Z" fill="#6CC56A" stroke="${INK}" stroke-width="1.5"/><path d="M-9 9 L5 -5" stroke="${INK}" stroke-width="1.2"/>`,
  palette:()=>`<path d="M0 -10 C8 -10 11 -4 11 0 C11 4 7 4 5 4 C3 4 2 6 3 8 C4 10 2 11 0 11 C-7 11 -11 6 -11 0 C-11 -6 -6 -10 0 -10 Z" fill="#F3E3C8" stroke="${INK}" stroke-width="1.4"/><circle cx="-5" cy="-3" r="2.2" fill="${CORAL}"/><circle cx="1" cy="-6" r="2.2" fill="${GOLD}"/><circle cx="6" cy="-2" r="2.2" fill="${BLUE}"/><circle cx="-5" cy="4" r="2.2" fill="${GREEN}"/>`,
  solid:()=>`<rect x="-9" y="-2" width="8" height="8" fill="#fff" stroke="${INK}" stroke-width="1.3"/><rect x="1" y="-2" width="8" height="8" fill="#fff" stroke="${INK}" stroke-width="1.3"/><rect x="-4" y="-10" width="8" height="8" fill="#fff" stroke="${INK}" stroke-width="1.3"/>`,
  bike:()=>`<circle cx="-6" cy="4" r="5" fill="none" stroke="${INK}" stroke-width="1.6"/><circle cx="7" cy="4" r="5" fill="none" stroke="${INK}" stroke-width="1.6"/><path d="M-6 4 L-1 -4 L5 -4 L7 4 M-1 -4 L1 4 L5 -4 M-3 -7 L1 -7" stroke="${CORAL}" stroke-width="1.6" fill="none"/>`,
  train:()=>`<path d="M-11 6 L-11 -2 Q-11 -7 -4 -7 L6 -7 Q11 -7 11 0 L11 6 Z" fill="#fff" stroke="${INK}" stroke-width="1.5"/><path d="M4 -6 Q10 -6 10 -1 L4 -1 Z" fill="#7DF9FF"/><line x1="-11" y1="2" x2="11" y2="2" stroke="${CORAL}" stroke-width="2"/><line x1="-12" y1="9" x2="12" y2="9" stroke="${INK}" stroke-width="1.6"/>`,
  ruler:()=>`<rect x="-11" y="-4" width="22" height="8" fill="${GOLD}" stroke="${INK}" stroke-width="1.4"/>`+[-8,-4,0,4,8].map(x=>`<line x1="${x}" y1="-4" x2="${x}" y2="${x%8===0?1:-1}" stroke="${INK}" stroke-width="1"/>`).join(''),
};

// ---------- extra pictures (±20 x ±16) ----------
const PIC2={
  apple:()=>`<path d="M0 -8 C-6 -13 -15 -9 -14 0 C-13 9 -6 14 0 11 C6 14 13 9 14 0 C15 -9 6 -13 0 -8 Z" fill="${CORAL}" stroke="${INK}" stroke-width="1.6"/><path d="M0 -8 Q1 -13 4 -15" stroke="${INK}" stroke-width="1.8" fill="none"/><path d="M2 -12 Q8 -16 10 -11 Q6 -9 2 -12 Z" fill="#6CC56A" stroke="${INK}" stroke-width="1.2"/>`,
  orange:()=>`<circle cx="0" cy="1" r="13" fill="${ORANGE}" stroke="${INK}" stroke-width="1.6"/><circle cx="-4" cy="-3" r="1" fill="#C96A12"/><circle cx="4" cy="3" r="1" fill="#C96A12"/><circle cx="2" cy="-6" r="1" fill="#C96A12"/><path d="M0 -12 L2 -15" stroke="${INK}" stroke-width="1.6"/>`,
  ice:()=>`<rect x="-11" y="-10" width="20" height="18" rx="3" fill="#D8F3FF" stroke="${INK}" stroke-width="1.6"/><path d="M-7 -6 L-2 -6" stroke="#fff" stroke-width="2"/><path d="M-14 12 Q-4 8 4 12 T16 12" fill="none" stroke="#7CC6F5" stroke-width="2.2"/>`,
  toast:()=>`<path d="M-12 12 L-12 -4 Q-15 -12 -6 -13 L6 -13 Q15 -12 12 -4 L12 12 Z" fill="#D9A15A" stroke="${INK}" stroke-width="1.6"/><path d="M-8 9 L-8 -3 Q-10 -9 -4 -9 L4 -9 Q10 -9 8 -3 L8 9 Z" fill="#5A3A1E"/>`,
  egg:()=>`<path d="M-15 2 Q-16 -9 -5 -10 Q2 -15 9 -9 Q17 -6 14 4 Q12 13 0 12 Q-14 13 -15 2 Z" fill="#fff" stroke="${INK}" stroke-width="1.6"/><circle cx="0" cy="0" r="6" fill="#FFC83D" stroke="${INK}" stroke-width="1.3"/>`,
  paper:()=>`<path d="M-14 -11 L-2 -11 L-4 -4 L0 2 L-3 12 L-14 12 Z" fill="#fff" stroke="${INK}" stroke-width="1.5"/><path d="M2 -11 L14 -11 L14 12 L1 12 L4 2 L0 -4 Z" fill="#fff" stroke="${INK}" stroke-width="1.5"/><path d="M-11 -6 L-6 -6 M-11 -1 L-6 -1 M6 -6 L11 -6 M6 4 L11 4" stroke="#AEB6C6" stroke-width="1.2"/>`,
  nail:()=>`<rect x="-15" y="-3" width="26" height="6" fill="#B9601F" stroke="${INK}" stroke-width="1.5"/><path d="M11 -3 L17 0 L11 3 Z" fill="#8A97A8" stroke="${INK}" stroke-width="1.3"/><rect x="-18" y="-7" width="4" height="14" rx="1" fill="#8A97A8" stroke="${INK}" stroke-width="1.4"/><circle cx="-6" cy="0" r="1.6" fill="#7A3A10"/><circle cx="3" cy="-1" r="1.4" fill="#7A3A10"/>`,
  leaf:()=>`<path d="M-13 10 C-15 -6 -3 -13 13 -12 C13 3 4 12 -13 10 Z" fill="${GOLD}" stroke="${INK}" stroke-width="1.6"/><path d="M-13 10 L7 -6 M-5 3 L-6 -4 M1 -2 L6 1" stroke="#B9601F" stroke-width="1.3" fill="none"/>`,
  cupR:()=>cup('#FF8FB1'), cupP:()=>cup('#8E5BC8'), cupG:()=>cup('#3FB8A0'),
};
function cup(c){return `<path d="M-10 -12 L10 -12 L8 13 L-8 13 Z" fill="#fff" fill-opacity=".6" stroke="${INK}" stroke-width="1.6"/><path d="M-9 -4 L9 -4 L8 13 L-8 13 Z" fill="${c}"/><path d="M-10 -12 L10 -12 L8 13 L-8 13 Z" fill="none" stroke="${INK}" stroke-width="1.6"/>`;}

