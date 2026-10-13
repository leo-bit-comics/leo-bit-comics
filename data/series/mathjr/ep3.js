// mathjr · episode 3 (script marker MJ3)
LBC.registerEpisode('mathjr',3,
{t:T("The Party Bag Puzzle","礼包分装之谜"),topic:T("Factors, multiples, primes, HCF and LCM","数的整除：因数、倍数、素数、最大公因数与最小公倍数"),
panels:[
{bg:'kitchen',cast:[['leo',85,'think','think'],['mia',200,'happy','idle'],['bit',322,'talk','wave']],
 say:[['nar',"Class party prep. On the table: 24 cookies and 36 candies.","为班级聚会做准备。桌上有24块饼干和36颗糖。"],
      ['mia',"We want identical bags, nothing left over. How many bags can we make at most?","我们想把它们分成完全一样的礼包，一个不剩。最多能分几包？"]]},
{bg:'kitchen',holo:{t:'big',title:T("Break into primes","分解质因数"),rows:[{s:'24 = 2 × 2 × 2 × 3',size:16,mono:true},{s:'36 = 2 × 2 × 3 × 3',size:16,mono:true},{s:T("Shared: 2 × 2 × 3 = 12","公有：2 × 2 × 3 = 12"),size:15,fill:'#C2416B'}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"A prime has exactly two factors: 1 and itself, like 2, 3, 5, 7. Every whole number above 1 is built from primes.","素数只有1和它本身两个因数，比如2、3、5、7。每个大于1的整数都能由素数相乘得到。"]]},
{bg:'kitchen',holo:{t:'table',title:T("12 bags","12个礼包"),head:[T("Item","物品"),T("Total","总数"),T("Per bag","每包")],rows:[[T("Cookies","饼干"),'24','÷ 12 → 2'],[T("Candies","糖"),'36','÷ 12 → 3']],note:T("HCF(24, 36) = 12","24和36的最大公因数是12")},
 cast:[['mia',54,'surprised','idle'],['bit',356,'talk','present']],fx:[['!','mia']],
 say:[['mia',"12 bags, each with 2 cookies and 3 candies. Nothing left!","12包，每包2块饼干、3颗糖。一个不剩！"]]},
{bg:'city',holo:{t:'big',title:T("When do the buses meet?","两路公交何时再相遇？"),rows:[{s:T("Bus A: every 6 min","A路：每6分钟一班"),size:13},{s:T("Bus B: every 8 min","B路：每8分钟一班"),size:13},{s:'6: 6, 12, 18, 24 …',size:13,mono:true},{s:'8: 8, 16, 24 …',size:13,mono:true},{s:T("LCM(6, 8) = 24 min","最小公倍数 = 24分钟"),size:15,fill:'#C2416B'}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['leo',"Both buses just left together. When will that happen again?","两路车刚刚同时发车，下次再同时发车是什么时候？"],
      ['bit',"List the multiples and find the first one they share: 24 minutes.","列出倍数，找第一个公共的：24分钟后。"]]},
{bg:'class',holo:{t:'list',title:T("Quick divisibility tests","整除的快速判断"),items:[{i:'check',l:T("By 2: last digit is even","被2整除：个位是偶数")},{i:'check',l:T("By 5: last digit is 0 or 5","被5整除：个位是0或5")},{i:'calc',l:T("By 3: digit sum divides by 3","被3整除：数字和是3的倍数")}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Try 471: 4 + 7 + 1 = 12, and 12 divides by 3, so 471 does too. 471 ÷ 3 = 157.","试试471：4 + 7 + 1 = 12，12能被3整除，所以471也能。471 ÷ 3 = 157。"]]},
{bg:'kitchen',cast:[['leo',85,'grin','cheer'],['mia',200,'happy','idle'],['bit',322,'wink','wave']],
 say:[['leo',"HCF for sharing things out, LCM for things that repeat. Case closed!","分东西用最大公因数，重复出现的事用最小公倍数。结案！"],
      ['bit',"Next time: the pizza fraction mystery!","下一集：比萨里的分数之谜！"]]}
],
terms:[["Factor / Multiple","因数 / 倍数","3 is a factor of 12; 12 is a multiple of 3.","3是12的因数，12是3的倍数。"],
 ["Prime number","素数（质数）","A whole number above 1 with only two factors: 1 and itself.","大于1、只有1和它本身两个因数的整数。"],
 ["HCF / LCM","最大公因数 / 最小公倍数","The biggest shared factor / the smallest shared multiple.","几个数公有的因数中最大的 / 公有的倍数中最小的。"]],
tryIt:T("Bag planner: count two kinds of snacks or stickers at home. Find the HCF to plan the most identical bags with nothing left over, then check by sharing them out.","礼包规划师：数一数家里两种零食或贴纸的数量，用最大公因数算出最多能分成几份完全一样的礼包，再动手分一分验证。")}
);
