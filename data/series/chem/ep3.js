// chem · episode 3 (script marker C3)
LBC.registerEpisode('chem',3,
{t:T("Water, Inside Out","水的奥秘"),topic:T("Water: its states and what it's made of","水的性质与组成"),
panels:[
{bg:'kitchen',cast:[['leo',115,'happy','idle'],['bit',290,'talk','idle']],
 say:[['leo',"Water is the most ordinary thing in the world.","水是世界上最普通的东西了。"],
      ['bit',"Ordinary? Water is amazing. You see it as a solid, a liquid AND a gas every day.","普通？水可神奇了。你每天都能见到它的固态、液态和气态。"]]},
{bg:'kitchen',holo:{t:'states',title:T("Three states of water","水的三态")},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Heating makes the particles move faster. Ice melts at 0 °C, and at sea level water boils at 100 °C.","加热会让微粒运动得更快。冰在0 °C熔化，在海平面附近水在100 °C沸腾。"]]},
{bg:'lab',props:[['electro',222]],cast:[['leo',70,'surprised','idle',{g:1}],['mia',150,'happy','idle',{g:1}],['wang',335,'talk','point']],
 say:[['nar',"Ms. Wang passes electricity through water. (A teacher-only demo!)","王老师让电流通过水。（仅限老师演示！）"],
      ['mia',"Bubbles at both ends!","两端都冒出了气泡！"]]},
{bg:'lab',holo:{t:'tubes',title:T("Splitting water","电解水")},
 cast:[['mia',54,'think','think',{g:1}],['bit',356,'talk','present']],
 say:[['bit',"Electricity splits water into hydrogen and oxygen. There's always twice as much hydrogen gas as oxygen.","通电后，水分解成氢气和氧气，氢气的体积总是氧气的两倍。"]]},
{bg:'lab',holo:{t:'mol',items:['H2O'],title:T("What water is made of","水的组成"),foot:T("2 hydrogen atoms + 1 oxygen atom","2个氢原子 + 1个氧原子")},
 cast:[['leo',54,'surprised','idle',{g:1}],['bit',356,'happy','present']],
 say:[['leo',"That's why water is H₂O: two H's and one O!","所以水叫H₂O：两个H，一个O！"]]},
{bg:'city',cast:[['leo',115,'think','think'],['bit',290,'talk','idle']],
 say:[['bit',"Clean water is precious. Only a tiny part of Earth's water is fresh water we can use.","干净的水很宝贵。地球上能供我们使用的淡水只占极少一部分。"],
      ['leo',"I'll turn off the tap while I brush my teeth!","我刷牙时会关掉水龙头！"]]}
],
terms:[["States of matter","物质的三态","Solid, liquid and gas.","固态、液态和气态。"],
 ["Electrolysis","电解","Using electricity to split a substance apart.","用电使物质分解。"],
 ["Chemical formula","化学式","Symbols showing which atoms are in a substance, like H₂O.","用元素符号表示物质组成的式子，如H₂O。"]],
tryIt:T("Put an ice cube on a plate in the sun and another in the shade. Time how long each takes to melt and record your results in a table.","把一块冰放在阳光下，另一块放在阴凉处，分别测出它们融化需要多久，把结果记录成表格。")}
);
