// ===== Script: 14 episodes, 6 panels each. cast: [who, x, expression, pose, opts] =====
// Episodes live in data/series/ai/ep1.js … ep14.js
LBC.registerSeries({id:'ai',icon:'chip',color:'#22B8A7',t:T("AI & Computers","AI与计算机"),
 desc:T("How computers work, from 0s and 1s to machine learning, large language models, AI agents and AI weather forecasts.","计算机如何工作：从0和1，到机器学习、大语言模型、AI智能体和AI天气预报。"),
 grade:T("Links to information technology in grades 7–9","对应七至九年级信息科技"),
 // Episode titles, one per file data/series/ai/ep<N>.js (in order). Must match each episode's t.
 titles:[
  T("Meet Bit","遇见比特"), // ep1
  T("Zeros and Ones","0和1的秘密"), // ep2
  T("Step by Step","一步一步来"), // ep3
  T("Talking to Computers","和电脑对话"), // ep4
  T("Parcels of Light","光的快递"), // ep5
  T("Data Everywhere","数据无处不在"), // ep6
  T("What Is AI?","什么是人工智能？"), // ep7
  T("Teaching a Machine","教机器学习"), // ep8
  T("A Brain Made of Numbers","数字做的大脑"), // ep9
  T("The Word Predictor","猜词高手"), // ep10
  T("When AI Gets It Wrong","当AI犯错时"), // ep11
  T("AI That Takes Action","会动手的AI"), // ep12
  T("Science Fair Day","科学节到了"), // ep13
  T("Will It Rain on Match Day?","比赛那天会下雨吗？"), // ep14
 ]});
