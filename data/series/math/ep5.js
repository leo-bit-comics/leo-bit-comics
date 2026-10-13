// math · episode 5 (script marker M5)
LBC.registerEpisode('math',5,
{t:T("The Never-Ending Number","永远写不完的数"),topic:T("Real numbers and square roots","实数"),
panels:[
{bg:'room',cast:[['leo',115,'think','think'],['bit',290,'talk','idle']],
 say:[['nar',"Leo looks at a square floor tile. Each side is 1 unit long.","乐乐看着一块正方形地砖，边长是1个单位。"],
      ['leo',"So how long is the diagonal?","那它的对角线有多长？"]]},
{bg:'room',holo:{t:'sqrt2',title:T("Four tiles and a diamond","四块砖和一个菱形"),foot:T("The diamond's side is the diagonal: √2","菱形的边长就是对角线：√2")},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Draw a square on the diagonal. It's made of four half-tiles, so its area is 2. The diagonal is √2: the number that makes 2 when squared.","以对角线为边画正方形，它由四个半块砖组成，面积是2。所以对角线长√2，也就是平方等于2的那个数。"]]},
{bg:'room',holo:{t:'big',title:'√2 = 1.41421356…',rows:[{s:T("The digits never end","小数永远写不完"),size:13},{s:T("and never repeat","也永远不循环"),size:13},{s:T("It can't be written as a fraction","它不能写成分数"),size:12,fill:'#C2416B'}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['leo',"It goes on forever?!","它永远写不完？！"],
      ['bit',"Forever, with no repeating pattern. That makes √2 an irrational number.","永远，而且不循环。所以√2是无理数。"]]},
{bg:'class',holo:{t:'numline2',title:T("Real numbers","实数"),min:-2,max:4,pts:[{v:-1.5,l:'−1.5'},{v:0.5,l:'½'},{v:1.414,l:'√2',irr:true},{v:3.1416,l:'π',irr:true}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Rational numbers (fractions) and irrational numbers like √2 and π fill the whole number line. Together they're the real numbers.","有理数（能写成分数的数）和√2、π这样的无理数一起铺满整条数轴，合起来叫实数。"]]},
{bg:'class',holo:{t:'big',title:T("Square roots","平方根"),rows:[{s:'√16 = 4',size:16,mono:true},{s:'√25 = 5',size:16,mono:true},{s:'∛8 = 2',size:16,mono:true},{s:T("√2 is between 1.4 and 1.5","√2 在1.4和1.5之间"),size:11,fill:'#C2416B'}]},
 cast:[['mia',54,'grin','point'],['bit',356,'happy','present']],
 say:[['mia',"So √ undoes squaring, the way subtraction undoes addition.","所以开平方是平方的逆运算，就像减法是加法的逆运算。"]]},
{bg:'class',cast:[['leo',85,'grin','idle'],['mia',200,'happy','idle'],['bit',322,'wink','idle']],
 say:[['nar',"Fun fact: the ancient Chinese book The Nine Chapters on the Mathematical Art already explained how to find square roots.","冷知识：中国古代数学著作《九章算术》里就已经介绍了开平方的方法。"],
      ['leo',"Mathematicians were figuring this out about 2,000 years ago!","大约2000年前，数学家们就在研究这个了！"]]}
],
terms:[["Square root","平方根","A number that gives x when squared: √9 = 3.","平方后等于 x 的数：√9 = 3。"],
 ["Irrational number","无理数","A decimal that never ends and never repeats, like √2 or π.","无限不循环小数，比如√2和π。"],
 ["Real numbers","实数","All rational and irrational numbers together.","有理数和无理数的统称。"]],
tryIt:T("Without a calculator, find √2 to two decimal places by guessing: 1.4² = ? 1.5² = ? Keep narrowing it down, like binary search!","不用计算器，用试算法求√2到两位小数：1.4² = ？1.5² = ？一步步缩小范围，就像二分查找！")}
);
