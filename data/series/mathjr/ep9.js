// mathjr · episode 9 (script marker MJ9)
LBC.registerEpisode('mathjr',9,
{t:T("Chickens and Rabbits","鸡兔同笼"),topic:T("Systems of linear equations in two variables","二元一次方程组"),
panels:[
{bg:'field',cast:[['leo',85,'surprised','point'],['mia',200,'think','think'],['bit',322,'talk','wave']],
 say:[['nar',"A farm visit outside Shanghai. A pen holds chickens and rabbits.","上海郊区农场一日游。一个围栏里关着鸡和兔子。"],
      ['leo',"The farmer says: 10 heads, 32 legs. How many of each?","农场主说：10个头，32条腿。鸡和兔各有几只？"],
      ['mia',"This is a famous puzzle from an ancient Chinese math book!","这是中国古代算书里的著名题目！"]]},
{bg:'field',holo:{t:'big',title:T("Two unknowns, two clues","两个未知数，两条线索"),rows:[{s:T("x chickens, y rabbits","x只鸡，y只兔"),size:13},{s:'x + y = 10',size:18,mono:true},{s:'2x + 4y = 32',size:18,mono:true,fill:'#C2416B'}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Every animal has one head. Chickens have 2 legs and rabbits have 4. Two clues give two equations.","每只动物一个头。鸡有2条腿，兔有4条腿。两条线索就是两个方程。"]]},
{bg:'field',holo:{t:'flow',dir:'v',title:T("Elimination","加减消元"),steps:[{i:'pen',l:T("①×2: 2x + 2y = 20","①×2：2x + 2y = 20")},{i:'calc',l:T("Subtract: 2y = 12","相减：2y = 12")},{i:'check',l:T("y = 6, so x = 4","y = 6，所以 x = 4")}]},
 cast:[['mia',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Make the x parts match, then subtract. x disappears and only y is left!","让x的系数相同，再相减。x消失了，只剩下y！"]]},
{bg:'field',holo:{t:'table',title:T("Check both clues","两条线索都验算"),head:[T("Clue","线索"),T("Working","计算")],rows:[[T("Heads","头"),'4 + 6 = 10'],[T("Legs","腿"),'8 + 24 = 32']],note:T("Both clues work ✓","两条线索都成立 ✓")},
 cast:[['leo',54,'grin','point'],['bit',356,'happy','present']],fx:[['!','leo']],
 say:[['leo',"4 chickens and 6 rabbits. Both clues work!","4只鸡，6只兔。两条线索都对上了！"]]},
{bg:'field',holo:{t:'vs',title:T("Another way: substitution","另一种方法：代入消元"),a:{l:T("Guess and check forever","一直猜，一直试"),ok:false},b:{l:T("Use x = 10 − y","用 x = 10 − y 代入"),ok:true}},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['mia',"2(10 − y) + 4y = 32, so 20 + 2y = 32, and y = 6 again!","2(10 − y) + 4y = 32，所以20 + 2y = 32，又得到y = 6！"]]},
{bg:'field',cast:[['leo',85,'grin','cheer'],['mia',200,'happy','idle'],['bit',322,'wink','wave']],
 say:[['leo',"Two unknowns need two equations. Case closed!","两个未知数需要两个方程。结案！"],
      ['bit',"Next time, the final case: the mystery of the box!","下一集，最后一案：盒子之谜！"]]}
],
terms:[["System of equations","方程组","Two or more equations that must be true at the same time.","几个方程合在一起，要同时成立。"],
 ["Elimination","加减消元法","Add or subtract equations to get rid of one unknown.","把方程相加或相减，消去一个未知数。"],
 ["Substitution","代入消元法","Write one unknown in terms of the other and put it into the other equation.","用一个未知数表示另一个，再代入另一个方程。"]],
tryIt:T("Make your own puzzle: choose numbers of bikes (2 wheels) and tricycles (3 wheels). Count the total vehicles and total wheels, then give only those two numbers to a family member to solve with a system of equations.","自己出题：想好自行车（2个轮子）和三轮车（3个轮子）各几辆，算出总车数和总轮数，只把这两个数告诉家人，让他们用方程组解出来。")}
);
