// ===== Money Lab: money math and how banking technology works (grades 6–8 math + information technology) =====
// Plan: ep1 budgets, needs vs wants · ep2 simple vs compound interest · ep3 how a bank works (deposits, loans, why interest exists)
//       ep4 scan-to-pay: QR codes and encryption · ep5 spotting scams, protecting passwords · ep6 exchange rates and unit conversion
// Episodes live in data/series/money/ep1.js …
LBC.registerSeries({id:'money',icon:'tag',color:'#7B4FD6',t:T("Money Lab","金钱实验室"),
 desc:T("Money math and the technology behind banking: budgets, interest, how banks and digital payments work, and staying safe from scams.","金钱里的数学和银行背后的技术：预算、利息、银行和电子支付怎么运作，以及如何防范诈骗。"),
 grade:T("Money math for grades 6–8: percentages, data and charts, digital safety (math, information technology)","六至八年级的金钱数学：百分比、数据与图表、数字安全（数学、信息科技）"),
 // Episode titles, one per file data/series/money/ep<N>.js (in order). Must match each episode's t.
 titles:[
  T("Where Did My Pocket Money Go?","我的零花钱去哪儿了？"), // ep1
  T("The Interest Snowball","利息滚雪球"), // ep2
  T("How a Bank Works","银行是怎么运作的"), // ep3
  T("Scan to Pay","扫码支付的秘密"), // ep4
  T("Spot the Scam","识破骗局"), // ep5
  T("How Much Is That in Yuan?","换成人民币是多少？"), // ep6
 ]});
