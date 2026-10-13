// chem · episode 2 (script marker C2)
LBC.registerEpisode('chem',2,
{t:T("The Air Around Us","我们身边的空气"),topic:T("Air, oxygen and carbon dioxide","空气、氧气和二氧化碳"),
panels:[
{bg:'city',cast:[['leo',115,'think','think'],['bit',290,'talk','idle']],
 say:[['leo',"Air is just... nothing, right?","空气就是……什么都没有，对吧？"],
      ['bit',"Air is a mix of gases. You breathe thousands of litres of it every day!","空气是多种气体的混合物。你每天要呼吸上千升空气！"]]},
{bg:'class',holo:{t:'donut',title:T("What's in air?","空气的成分"),segs:[{v:78,c:'#2F6FD6',l:T("Nitrogen 78%","氮气 78%")},{v:21,c:'#FF5D5D',l:T("Oxygen 21%","氧气 21%")},{v:1,c:'#FFC83D',l:T("Argon, CO₂ and others 1%","稀有气体、二氧化碳等 1%")}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Most of the air is nitrogen. Only about a fifth is oxygen, the gas we need to breathe.","空气里大部分是氮气，只有约五分之一是我们呼吸需要的氧气。"]]},
{bg:'lab',props:[['jar',235]],cast:[['leo',75,'surprised','idle',{g:1}],['mia',160,'think','think',{g:1}],['wang',325,'talk','point']],
 say:[['nar',"Ms. Wang covers a lit candle with a glass jar. (A teacher-only demo!)","王老师用玻璃罩罩住一支点燃的蜡烛。（仅限老师演示！）"],
      ['mia',"The flame went out!","火焰熄灭了！"]]},
{bg:'lab',holo:{t:'big',title:T("Fire needs oxygen","燃烧需要氧气"),rows:[{s:T("Fuel + oxygen + heat = fire","可燃物 + 氧气 + 温度 = 燃烧"),size:12},{s:T("Take one away → the fire goes out","去掉一个 → 火就熄灭"),size:12},{s:T("That's how fire safety works","这就是灭火的原理"),size:12,fill:'#C2416B'}]},
 cast:[['mia',54,'think','think',{g:1}],['bit',356,'talk','present']],
 say:[['bit',"The candle used up most of the oxygen in the jar, so it went out. Take away the fuel, the oxygen or the heat, and a fire stops.","蜡烛把罩子里的大部分氧气用掉了，所以熄灭。去掉可燃物、氧气或温度中的任何一个，燃烧就会停止。"]]},
{bg:'field',holo:{t:'cycle',title:T("Oxygen and carbon dioxide","氧气与二氧化碳"),items:[{i:'user',l:T("We breathe in O₂","人吸入氧气")},{i:'bubbles',l:T("We breathe out CO₂","人呼出二氧化碳")},{i:'leaf',l:T("Plants: CO₂ → O₂","植物：CO₂ → O₂")}],center:T("in sunlight","在阳光下")},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"We breathe in oxygen and breathe out carbon dioxide. In sunlight, plants do the opposite.","我们吸入氧气、呼出二氧化碳；植物在阳光下正好相反。"]]},
{bg:'class',cast:[['mia',85,'happy','point'],['leo',200,'grin','idle'],['bit',322,'happy','idle']],
 say:[['mia',"So plants and people are a team!","所以植物和人类是一个团队！"],
      ['leo',"I'm putting a plant on my desk.","我要在书桌上放一盆植物。"]]}
],
terms:[["Mixture","混合物","Several substances mixed together, like air.","由多种物质混合而成，比如空气。"],
 ["Oxygen","氧气","About 21% of air. Needed for breathing and burning.","约占空气的21%，呼吸和燃烧都需要它。"],
 ["Carbon dioxide","二氧化碳","A gas we breathe out. Plants use it to make food.","我们呼出的气体，植物用它制造养分。"],
 ["Fire triangle","燃烧三要素","Fuel, oxygen and heat.","可燃物、氧气、温度。"]],
tryIt:T("Breathe on a cold mirror. Why does it fog up? Then go through your home's fire safety plan with your parents: where is the nearest exit?","对着冰凉的镜子哈气，为什么会起雾？再和爸妈一起了解家里的消防安全：最近的出口在哪里？")}
);
