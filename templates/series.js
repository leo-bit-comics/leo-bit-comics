// TEMPLATE — copy to data/series/<id>.js (id: lowercase letters only, used in URLs like #<id>-1).
// Not loaded by the site. See README.md "How to add a series".
// titles: one T(...) per episode file data/series/<id>/ep<N>.js, in order, each exactly equal to that
// episode's t. Menus use it without loading the episodes; scripts/check.py checks it.
LBC.registerSeries({id:'myseries',icon:'globe',color:'#2F9E5B',t:T("Series title","系列名"),
 desc:T("One-sentence description shown above the episode picker.","显示在剧集列表上方的一句话简介。"),
 grade:T("What it links to at school (parents' table)","对应的校内课程（家长表格）"),
 titles:[
  T("Episode title","剧集标题"), // ep1
 ]});
