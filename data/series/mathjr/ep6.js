// mathjr · episode 6 (script marker MJ6)
LBC.registerEpisode('mathjr',6,
{t:T("One Big Pizza or Two Small?","一个大比萨还是两个小比萨？"),topic:T("Circles and sectors","圆和扇形"),
panels:[
{bg:'city',cast:[['leo',85,'grin','point'],['mia',200,'think','think'],['bit',322,'talk','wave']],
 say:[['nar',"At a pizza shop: one 30 cm pizza, or two 20 cm pizzas for the same price.","比萨店里：一个30厘米的比萨，和两个20厘米的比萨价格一样。"],
      ['leo',"Two pizzas! 20 + 20 = 40, and that beats 30.","选两个！20 + 20 = 40，比30大。"],
      ['mia',"Hmm, but those are diameters, not amounts of pizza.","嗯，可那是直径，不是比萨的多少。"]]},
{bg:'city',holo:{t:'big',title:T("Circle formulas","圆的公式"),rows:[{s:T("Circumference C = πd","周长 C = πd"),size:15},{s:T("Area S = πr²","面积 S = πr²"),size:15,fill:'#C2416B'},{s:'π ≈ 3.14',size:14,mono:true}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Around any circle, the circumference is about 3.14 times the diameter. That number is π.","任何一个圆，周长都约是直径的3.14倍。这个数就是π。"]]},
{bg:'city',holo:{t:'table',title:T("Compare the pizza","比一比比萨"),head:[T("Pizza","比萨"),T("Area (cm²)","面积（cm²）")],rows:[[T("One 30 cm","一个30厘米"),'706.5'],[T("One 20 cm","一个20厘米"),'314'],[T("Two 20 cm","两个20厘米"),'628']],note:T("The big one has 78.5 cm² more","大的多78.5平方厘米")},
 cast:[['mia',54,'surprised','idle'],['bit',356,'talk','present']],fx:[['!','mia']],
 say:[['bit',"Use the radius, half the diameter. 15 × 15 = 225, and 225 × 3.14 = 706.5.","要用半径，也就是直径的一半。15 × 15 = 225，225 × 3.14 = 706.5。"]]},
{bg:'city',holo:{t:'vs',title:T("Double the diameter…","直径扩大到2倍……"),a:{l:T("…area doubles","……面积扩大到2倍"),ok:false},b:{l:T("…area is 4 times as big","……面积扩大到4倍"),ok:true}},
 cast:[['leo',54,'surprised','idle'],['bit',356,'happy','present']],
 say:[['leo',"Because the radius gets squared!","因为半径要平方！"]]},
{bg:'city',holo:{t:'big',title:T("A 90° slice (sector)","90°的一块（扇形）"),rows:[{s:T("90° is 1/4 of 360°","90°是360°的1/4"),size:13},{s:'706.5 ÷ 4 ≈ 176.6',size:16,mono:true,fill:'#C2416B'},{s:T("cm² of pizza","平方厘米"),size:11},{s:T("Arc: 94.2 ÷ 4 ≈ 23.6 cm","弧长：94.2 ÷ 4 ≈ 23.6厘米"),size:13}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"A sector is a slice of a circle. Its share of the area and arc is its angle out of 360°. The whole crust is 3.14 × 30 = 94.2 cm.","扇形就是圆的一块。它占整个圆面积和周长的比例，等于圆心角占360°的比例。整圈饼边是3.14 × 30 = 94.2厘米。"]]},
{bg:'city',cast:[['leo',85,'grin','cheer'],['mia',200,'happy','idle'],['bit',322,'wink','wave']],
 say:[['leo',"One big pizza! More food for the same money. Case closed!","选一个大比萨！花一样的钱吃得更多。结案！"],
      ['bit',"Next time: the mystery number in an equation!","下一集：方程里的神秘数字！"]]}
],
terms:[["Radius / Diameter","半径 / 直径","The radius goes from the centre to the edge; the diameter is twice as long.","半径从圆心到圆上；直径是半径的2倍。"],
 ["Pi (π)","圆周率（π）","Circumference ÷ diameter for every circle, about 3.14.","任何圆的周长与直径的比，约等于3.14。"],
 ["Sector","扇形","A slice of a circle between two radii.","圆上两条半径和它们之间的弧围成的图形。"]],
tryIt:T("Find π at home: wrap a string around a round can or plate, measure the string, then measure the diameter. Divide circumference by diameter. Is your answer close to 3.14?","在家找π：用一根绳子绕圆罐或盘子一圈，量出绳长，再量出直径。周长除以直径，结果接近3.14吗？")}
);
