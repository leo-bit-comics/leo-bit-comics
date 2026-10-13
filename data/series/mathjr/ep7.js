// mathjr · episode 7 (script marker MJ7)
LBC.registerEpisode('mathjr',7,
{t:T("The Missing Price","消失的价格"),topic:T("Linear equations in one variable","一元一次方程"),
panels:[
{bg:'room',cast:[['leo',85,'think','think'],['mia',200,'talk','idle'],['bit',322,'talk','wave']],
 say:[['nar',"Leo finds a crumpled delivery receipt.","乐乐找到一张皱巴巴的外卖小票。"],
      ['leo',"3 bubble teas + ¥5 delivery = ¥41. But the price of one tea is smudged!","3杯奶茶 + 5元配送费 = 41元。可一杯奶茶的价格被弄花了！"],
      ['mia',"A missing number? Let's call it x.","有个未知数？就叫它x吧。"]]},
{bg:'room',holo:{t:'big',title:T("Write the equation","列方程"),rows:[{s:T("price of one tea = x","一杯奶茶的价格 = x"),size:13},{s:'3x + 5 = 41',size:22,mono:true,fill:'#C2416B'}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"An equation is a balance. Whatever you do to one side, do the same to the other side and it stays level.","方程就像天平。一边做什么，另一边也做同样的事，天平就保持平衡。"]]},
{bg:'room',holo:{t:'flow',dir:'v',title:T("Solve step by step","一步一步解"),steps:[{i:'pen',l:'3x + 5 = 41'},{i:'calc',l:T("−5 both sides: 3x = 36","两边都减5：3x = 36")},{i:'calc',l:T("÷3 both sides: x = 12","两边都除以3：x = 12")}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['mia',"Undo the +5 first, then undo the ×3.","先撤销“加5”，再撤销“乘3”。"]]},
{bg:'room',holo:{t:'big',title:T("Check!","验算！"),rows:[{s:'3 × 12 + 5',size:18,mono:true},{s:'= 36 + 5 = 41 ✓',size:18,mono:true,fill:'#C2416B'}]},
 cast:[['leo',54,'grin','point'],['bit',356,'happy','present']],fx:[['!','leo']],
 say:[['leo',"Each tea was ¥12. Plugging it back in proves it!","每杯奶茶12元。代回去一算就证明了！"]]},
{bg:'room',holo:{t:'vs',title:T("Solve 2(x − 3) = 14","解 2(x − 3) = 14"),a:{l:T("2x − 3 = 14, so x = 8.5","2x − 3 = 14，所以 x = 8.5"),ok:false},b:{l:T("x − 3 = 7, so x = 10","x − 3 = 7，所以 x = 10"),ok:true}},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"The 2 multiplies EVERYTHING in the bracket. Divide both sides by 2 first. Check: 2 × (10 − 3) = 14.","2要乘括号里的每一项。先两边同时除以2。验算：2 × (10 − 3) = 14。"]]},
{bg:'room',cast:[['leo',85,'grin','cheer'],['mia',200,'happy','idle'],['bit',322,'wink','wave']],
 say:[['mia',"Name the unknown, write the equation, solve, then check. Case closed!","设未知数、列方程、解方程、再验算。结案！"],
      ['bit',"Next time: how many notebooks can you afford?","下一集：零花钱能买几本笔记本？"]]}
],
terms:[["Equation","方程","A statement with an unknown where two sides are equal, like 3x + 5 = 41.","含有未知数的等式，如3x + 5 = 41。"],
 ["Solution","方程的解","The value of the unknown that makes both sides equal: here x = 12.","使方程左右两边相等的未知数的值，这里x = 12。"],
 ["Inverse operation","逆运算","The step that undoes another: − undoes +, ÷ undoes ×.","可以撤销另一个运算的运算：减法撤销加法，除法撤销乘法。"]],
tryIt:T("Receipt riddle: look at a real shopping receipt with an adult. Cover up one price, write an equation for it using the total, and solve it. Then uncover it and check!","小票谜题：和大人一起看一张真实的购物小票。遮住其中一个价格，根据总价列方程求出它。再揭开看看对不对！")}
);
