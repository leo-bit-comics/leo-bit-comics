// Math Detectives Junior ep15: Can a Fraction Be a Polynomial? 有分数，也能是整式？
// Shanghai 6th-grade algebra concepts (整式, polynomials)
LBC.registerEpisode('mathjr',15,
{t:T("Can a Fraction Be a Polynomial?","有分数，也能是整式？"),
 topic:T("Monomials and polynomials with fraction coefficients","带分数系数的单项式和多项式"),
panels:[
// Panel 1: Hook — question about fractions in polynomials
{bg:'room',
 cast:[['leo',115,'think','idle'],['mia',290,'happy','idle']],
 props:[['paper',200,170]],
 say:[['nar',"After school, Leo looks at a worksheet.","放学后，乐乐看着一张作业纸。"],
      ['leo',"This question asks about polynomials. But some have fractions!","这道题问的是整式，可有的式子里有分数啊！"],
      ['mia',"Let's figure it out! Bit can help.","一起想想看！让比特帮忙。"]]},

// Panel 2: Simple start - 整式 is a family name, coefficients can be fractions
{bg:'room',
 cast:[['leo',85,'happy','idle'],['mia',200,'surprised','idle'],['bit',322,'talk','wave']],
 props:[['paper',200,170]],
 say:[['bit',"整式 means the family of monomials and polynomials. Coefficients can be fractions!","整式是单项式和多项式的统称。系数可以是分数！"],
      ['leo',"So x/2 equals one-half times x?","那 x/2 就是二分之一乘以 x？"],
      ['bit',"Exactly! The key is WHAT gets divided.","对！关键是看什么在分母里。"]]},

// Panel 3: KEY VISUAL - x cakes ÷ 2 people (polynomial)
{bg:'room',
 holo:{t:'cakeshare',
  top:{title:T("x cakes shared between 2 people","x 块蛋糕分给 2 人"),
       x:2,
       result:'x/2 = (1/2)x'},
  bot:{title:T("1 cake shared between x people (x=2)","1 块蛋糕分给 x 人 (x=2)"),
       x:2,
       result:'1/x = 1/2'}},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Top: x cakes for 2 people. x is cakes; 2 is fixed. That's (1/2)x, a polynomial!","上面：x 块蛋糕分给 2 人。x 是蛋糕数，2 是固定人数。结果是 (1/2)x，是整式！"],
      ['leo',"Bottom: 1 cake for x people. Now x is people count—x is in the denominator!","下面：1 块蛋糕分给 x 人。现在 x 是人数——x 在分母里！"]]},

// Panel 4: Show what happens when x changes in 1/x case
{bg:'room',
 holo:{t:'cakeshare',
  top:{title:T("When x = 4 cakes, 2 people","当 x = 4 块蛋糕时，2 人"),
       x:4,
       result:'4/2 = 2'},
  bot:{title:T("When x = 4 people, 1 cake","当 x = 4 人时，1 块蛋糕"),
       x:4,
       result:'1/4'}},
 cast:[['leo',54,'think','idle'],['bit',356,'talk','present']],
 say:[['bit',"See? When x changes, top gives 2 cakes each. Bottom gives 1/4 cake each.","看到了吗？x 改变时，上面每人 2 块，下面每人 1/4 块。"],
      ['leo',"In 1/x, the variable x is the divisor. That's not a polynomial!","1/x 里，变量 x 是除数，不是整式！"]]},

// Panel 5: Apply to the worksheet - check denominators, pi is constant
{bg:'room',
 holo:{t:'vs',
  a:{l:T("y/π = (1/π)y ✓","y/π = (1/π)y ✓"),ok:true},
  b:{l:T("1/x, −1/(x+y) ✗","1/x、−1/(x+y) ✗"),ok:false}},
 cast:[['leo',54,'happy','idle'],['bit',356,'talk','present']],
 say:[['bit',"For this worksheet: check denominators. π is a constant (~3.14), so y/π counts.","这道题看分母：π 是常数（约 3.14），所以 y/π 算。"],
      ['leo',"But 1/x and −1/(x+y) have variables in denominators!","而 1/x 和 −1/(x+y) 的分母里有变量！"]]},

// Panel 6: Payoff — correctly count 5 polynomials
{bg:'room',
 cast:[['leo',115,'happy','cheer'],['mia',290,'grin','idle']],
 props:[['paper',200,170]],
 fx:[['!','leo']],
 say:[['leo',"Five are polynomials: 0, x, (a+b)/2, y/π, and a²−2ab−b². Answer D!","5 个是整式：0、x、(a+b)/2、y/π、a²−2ab−b²。选 D！"],
      ['mia',"You got it! Position matters.","答对了！位置很重要。"],
      ['leo',"And now I really want cake…","现在我真的好想吃蛋糕……"],
      ['bit',"Knowledge: plus one. Cake: still just a drawing!","知识加一，蛋糕还是画的！"]]},
],
terms:[
 ["Monomial","单项式","A product of numbers and variables, such as 3x or (1/2)y. A number or variable alone counts too.","数与字母的乘积，例如 3x、(1/2)y；单独一个数或字母也算。"],
 ["Polynomial","多项式","An expression formed by adding or subtracting monomials, such as (1/2)a+(1/2)b.","几个单项式相加减组成的式子，例如 (1/2)a+(1/2)b。"],
 ["整式 (Polynomial family)","整式","Monomials and polynomials together. Coefficients can be fractions; the key is no variables in denominators.","单项式和多项式的统称。系数可以是分数；关键是分母里不能有变量。"]
],
tryIt:T("Draw two scenarios with a family member: (1) 4 cookies shared between 2 people—each gets 4/2=2. (2) 1 cookie shared between 4 people—each gets 1/4. Label which scenario has the variable in the denominator. Only paper and pencils needed.","和家人画两个场景：(1) 4 块饼干分给 2 人——每人得 4/2=2 块。(2) 1 块饼干分给 4 人——每人得 1/4 块。标出哪个场景的变量在分母里。只需纸笔。")}
);
