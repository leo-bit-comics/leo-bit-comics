// Bilingual text: T(en,zh), language MODE ('both' | 'en' | 'zh'), UI strings and helpers.
const T=(en,zh)=>({en,zh});
let MODE='both';
const pick=t=>isObj(t)?(MODE==='zh'?t.zh:t.en):t;
function hx(o){if(!isObj(o)) return esc(o);if(MODE==='en') return `<span class="en">${esc(o.en)}</span>`;if(MODE==='zh') return `<span class="zh">${esc(o.zh)}</span>`;return `<span class="en">${esc(o.en)}</span><span class="zh">${esc(o.zh)}</span>`;}
const UI={
  tag:T("Comic series for curious 13-year-olds: AI, math, physics, chemistry and engineering, linked to what they learn at school.","写给13岁好奇少年的系列漫画：人工智能、数学、物理、化学和工程，紧扣校内所学。"),
  cast:T("Meet the cast","主要角色"),series:T("Series","系列"),eps:T("Episodes","剧集"),terms:T("Key words","关键词"),tryIt:T("Try it","动手试试"),
  prev:T("Previous","上一集"),next:T("Next","下一集"),episodes:T("episodes","集"),
  note:T("Parents: read one episode a week together, then do the activity.","家长小贴士：每周一起读一集，再完成这个小活动。"),
  parents:T("For parents: how it links to school","给家长：与校内课程的对应"),
  thS:T("Series","系列"),thL:T("Links to","对应课程"),thT:T("Topics","内容"),
  ai:T("These comics are AI-generated and may contain errors.","本漫画内容由AI生成，可能存在错误。"),
  // navigation (js/app.js)
  home:T("Home","首页"),contents:T("Contents","目录"),close:T("Close","关闭"),lang:T("Language","语言"),where:T("You are here","当前位置"),
  tagShort:T("Comics for curious minds","给好奇心的漫画"),cont:T("Continue reading","继续阅读"),start:T("Start reading","开始阅读"),
  overview:T("Series overview","系列简介"),allEps:T("All episodes","全部剧集"),other:T("Other series","其他系列"),
  readMark:T("read","已读"),loading:T("Loading the episode…","正在加载本集……"),
  foot:T("Leo, Bit and Mia are original characters. Curriculum links checked against Shanghai's 2024–2026 textbook lists and the 2022 national curriculum standards.","乐乐、比特和米娅均为原创角色。课程对应关系参照上海2024—2026年教学用书目录及2022年版义务教育课程标准。"),
};
function epNo(i){return MODE==='zh'?`<span class="zh">第${i+1}集</span>`:MODE==='en'?`<span class="en">EPISODE ${i+1}</span>`:`<span class="en">EPISODE ${i+1}</span><span class="zh">第${i+1}集</span>`;}
function cnt(n){return MODE==='zh'?`${n}集`:MODE==='en'?`${n} episodes`:`${n} episodes · ${n}集`;}
function loadMode(){try{const m=localStorage.getItem('lb-mode');if(m==='en'||m==='zh'||m==='both')MODE=m;}catch(e){}}
function setMode(m){MODE=m;try{localStorage.setItem('lb-mode',MODE);}catch(e){}}
