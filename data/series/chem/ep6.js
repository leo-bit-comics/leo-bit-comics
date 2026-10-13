// chem · episode 6 (script marker C6)
LBC.registerEpisode('chem',6,
{t:T("Acids and Bases","酸和碱"),topic:T("Acids, bases and indicators (a bonus topic)","酸、碱与指示剂（拓展）"),
panels:[
{bg:'kitchen',props:[['lemon',146,158]],cast:[['mia',100,'smirk','hold'],['leo',215,'worried','idle'],['bit',325,'talk','idle',{y:96}]],
 say:[['mia',"Lemon juice is sour. Soap feels slippery. Why are they so different?","柠檬汁是酸的，肥皂摸起来滑滑的。它们为什么这么不同？"],
      ['bit',"Lemon juice is an acid and soap is a base. They're chemical opposites!","柠檬汁是酸性的，肥皂是碱性的。它们在化学上是一对“对头”！"]]},
{bg:'kitchen',holo:{t:'ph',title:T("The pH scale","pH值"),items:[{v:2,l:T("Lemon","柠檬汁")},{v:3,l:T("Vinegar","白醋")},{v:7,l:T("Water","清水")},{v:8,l:T("Baking soda","小苏打水")},{v:10,l:T("Soap","肥皂水")}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"The pH scale runs from 0 to 14. Below 7 is acidic, 7 is neutral, and above 7 is basic.","pH值从0到14。小于7是酸性，等于7是中性，大于7是碱性。"]]},
{bg:'kitchen',props:[['cabbage',148,154]],cast:[['leo',100,'grin','hold'],['mia',215,'surprised','idle']],
 say:[['nar',"With Leo's mum's help, they make purple cabbage juice to use as a colour indicator.","在乐乐妈妈的帮助下，他们做了紫甘蓝汁，用来当颜色指示剂。"],
      ['leo',"Look, it's purple!","看，是紫色的！"]]},
{bg:'kitchen',holo:{t:'cards',cols:3,title:T("Cabbage juice colour test","紫甘蓝变色实验"),items:[{p:'cupR',l:T("Lemon: pink (acid)","柠檬汁：粉红（酸性）")},{p:'cupP',l:T("Water: purple (neutral)","清水：紫色（中性）")},{p:'cupG',l:T("Baking soda: green-blue (base)","小苏打水：蓝绿（碱性）")}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Cabbage juice changes colour with pH: pink for acids, green-blue for bases!","紫甘蓝汁会随pH值变色：遇酸变粉红，遇碱变蓝绿！"]]},
{bg:'class',holo:{t:'big',title:T("Neutralisation","中和反应"),rows:[{s:T("Acid + base → salt + water","酸 + 碱 → 盐 + 水"),size:13,fill:'#C2416B'},{s:T("Antacid tablets calm extra stomach acid","胃药能中和过多的胃酸"),size:11},{s:T("Toothpaste helps protect teeth from acid","牙膏帮助牙齿抵御酸的侵蚀"),size:11}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Acids and bases cancel each other out. That's neutralisation, and it happens in your body every day.","酸和碱会相互抵消，这叫中和反应，你的身体里每天都在发生。"]]},
{bg:'kitchen',cast:[['leo',100,'grin','point'],['mia',210,'smirk','idle'],['bit',322,'wink','idle',{y:96}]],
 say:[['leo',"Chemistry is basically cooking with science!","化学基本上就是用科学做饭！"],
      ['mia',"Just don't eat the experiments.","只是做实验的东西别吃。"]]}
],
terms:[["Acid","酸","pH below 7. Many taste sour, but never taste lab chemicals!","pH小于7。很多酸尝起来是酸的，但绝不能尝实验室化学品！"],
 ["Base","碱","pH above 7. Soapy solutions are basic.","pH大于7，肥皂水就是碱性的。"],
 ["Indicator","指示剂","A substance that changes colour with pH.","随pH值变色的物质。"],
 ["Neutralisation","中和反应","Acid + base → salt + water.","酸 + 碱 → 盐 + 水。"]],
tryIt:T("With an adult, chop some purple cabbage, soak it in hot water and strain out the purple juice. Test lemon juice, vinegar, water and baking soda water, and record the colours!","在大人陪同下，把紫甘蓝切碎泡在热水里，滤出紫色汁液。测试柠檬汁、白醋、清水和小苏打水，记录颜色变化！")}
);
