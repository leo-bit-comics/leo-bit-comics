// mathjr · episode 8 (script marker MJ8)
LBC.registerEpisode('mathjr',8,
{t:T("The Pocket Money Limit","零花钱的上限"),topic:T("Linear inequalities in one variable","一元一次不等式"),
panels:[
{bg:'city',cast:[['leo',85,'think','think'],['mia',200,'happy','idle'],['bit',322,'talk','wave']],
 say:[['nar',"The stationery shop. Leo has ¥50.","文具店里，乐乐有50元。"],
      ['leo',"I already need a ¥14 pen. Notebooks are ¥6 each. How many can I buy?","我得先买一支14元的笔。笔记本6元一本。我能买几本？"]]},
{bg:'city',holo:{t:'big',title:T("At most ¥50","最多50元"),rows:[{s:T("x = number of notebooks","x = 笔记本的本数"),size:13},{s:'6x + 14 ≤ 50',size:22,mono:true,fill:'#C2416B'},{s:T("≤ means 'less than or equal to'","≤ 表示“小于或等于”"),size:11}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"It doesn't have to be exactly ¥50, just not more. That's an inequality.","不一定刚好花50元，只要不超过就行。这就是不等式。"]]},
{bg:'city',holo:{t:'flow',dir:'v',title:T("Solve it like an equation","像解方程一样解"),steps:[{i:'pen',l:'6x + 14 ≤ 50'},{i:'calc',l:'6x ≤ 36'},{i:'check',l:'x ≤ 6'}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['mia',"Subtract 14, then divide by 6. So 0 to 6 notebooks!","减去14，再除以6。所以可以买0到6本！"],
      ['bit',"Check 6: 36 + 14 = 50 ✓. Check 7: 42 + 14 = 56, too much.","验算6本：36 + 14 = 50 ✓。7本：42 + 14 = 56，超了。"]]},
{bg:'class',holo:{t:'vs',title:T("Solve −2x > 6","解 −2x > 6"),a:{l:T("x > −3","x > −3"),ok:false},b:{l:T("x < −3 (sign flips!)","x < −3（不等号要变向！）"),ok:true}},
 cast:[['leo',54,'surprised','idle'],['bit',356,'happy','present']],fx:[['!','leo']],
 say:[['bit',"Divide by a NEGATIVE number and the inequality sign turns around. Test x = −4: −2 × (−4) = 8, and 8 > 6 ✓.","两边除以一个负数，不等号要改变方向。试x = −4：−2 × (−4) = 8，8 > 6 ✓。"]]},
{bg:'class',holo:{t:'big',title:T("Why it flips","为什么要变向"),rows:[{s:'2 < 5',size:18,mono:true},{s:T("× (−1) both sides","两边都乘 −1"),size:12},{s:'−2 > −5',size:18,mono:true,fill:'#C2416B'}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['mia',"Right! On the number line, −2 is to the right of −5, so it's bigger.","对！在数轴上，−2在−5的右边，所以更大。"]]},
{bg:'city',cast:[['leo',85,'grin','cheer'],['mia',200,'happy','idle'],['bit',322,'wink','wave']],
 say:[['leo',"6 notebooks and a pen, exactly ¥50. Case closed!","6本笔记本加一支笔，正好50元。结案！"],
      ['bit',"Next time: chickens, rabbits and two unknowns!","下一集：鸡兔同笼，两个未知数！"]]}
],
terms:[["Inequality","不等式","A statement using <, >, ≤ or ≥, like 6x + 14 ≤ 50.","用<、>、≤或≥连接的式子，如6x + 14 ≤ 50。"],
 ["Solution set","解集","All the values that make the inequality true, like x ≤ 6.","使不等式成立的所有值，如x ≤ 6。"],
 ["Flip rule","不等号变向","Multiply or divide both sides by a negative number and the sign turns around.","两边同乘或同除以一个负数，不等号方向改变。"]],
tryIt:T("Budget challenge: pick an amount, say ¥30. Choose one fixed item and one item you can buy several of from a shop or a flyer. Write an inequality, solve it, and check the largest answer.","预算挑战：定一个金额，比如30元。从商店或宣传单上选一件必买商品和一件可以买好几个的商品。列出不等式，解出来，再验算最大的那个答案。")}
);
