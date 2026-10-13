// TEMPLATE — copy to data/series/<id>/ep<N>.js (N = 1, 2, 3 … in reading order, no gaps).
// Not loaded by the site. See README.md "How to add an episode". No <script> tag needed: the site loads
// this file on demand. Do add the same t to the titles list in data/series/<id>.js.
LBC.registerEpisode('myseries',1,
{t:T("Episode title","剧集标题"),topic:T("Topic line","本集主题"),
panels:[
// Each panel: bg = scene name; cast = [who, x(0–400), expression, pose, opts]; say = [who|'nar', en, zh];
// optional holo = hologram diagram {t:<DIAG type>, title:T(...), ...}; optional fx / props.
{bg:'room',cast:[['leo',125,'happy','wave'],['bit',295,'talk','idle']],
 say:[['nar',"Narration in English.","中文旁白。"],
      ['leo',"Leo speaks.","乐乐说话。"]]},
{bg:'room',holo:{t:'list',title:T("Three things","三件事"),items:[{i:'chip',l:T("One","一")},{i:'search',l:T("Two","二")},{i:'globe',l:T("Three","三")}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Bit explains.","比特解释。"]]}
// …usually 6 panels
],
terms:[["Word","词语","English definition.","中文解释。"]],
tryIt:T("A safe hands-on activity.","一个安全的动手小活动。")}
);
