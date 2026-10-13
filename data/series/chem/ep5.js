// chem · episode 5 (script marker C5)
LBC.registerEpisode('chem',5,
{t:T("Fizz! Chemical Reactions","嘶嘶！化学反应"),topic:T("Chemical changes and how to write them","化学变化及其表示"),
panels:[
{bg:'kitchen',props:[['fizzcup',205]],cast:[['leo',100,'grin','idle'],['mia',300,'surprised','idle']],
 say:[['nar',"With Leo's dad watching, they mix baking soda and vinegar in a cup.","在乐乐爸爸的看护下，他们在杯子里把小苏打和白醋混在一起。"],
      ['mia',"Whoa, it's fizzing like crazy!","哇，它冒泡冒得好厉害！"]]},
{bg:'kitchen',holo:{t:'flow',title:T("What happened?","发生了什么？"),steps:[{i:'solid',l:T("Baking soda","小苏打")},{i:'drop',l:T("Vinegar","白醋")},{i:'bubbles',l:T("CO₂ gas + water + a salt","二氧化碳 + 水 + 一种盐")}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"The two react and make new substances, including carbon dioxide gas. That's the bubbles!","两者发生反应，生成了新物质，其中包括二氧化碳气体，就是那些气泡！"]]},
{bg:'class',holo:{t:'big',title:T("Writing a reaction","表示化学反应"),rows:[{s:T("Carbon + oxygen → carbon dioxide","碳 + 氧气 → 二氧化碳"),size:12},{s:'C + O₂ → CO₂',size:19,mono:true,fill:'#C2416B'},{s:T("Reactants → products","反应物 → 生成物"),size:12}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Chemists write reactions like sentences: reactants on the left, products on the right.","化学家像写句子一样写反应：左边是反应物，右边是生成物。"]]},
{bg:'kitchen',holo:{t:'big',title:T("Nothing disappears","质量守恒"),rows:[{s:T("Atoms just swap partners","原子只是重新组合"),size:12},{s:T("Total mass before = total mass after","反应前总质量 = 反应后总质量"),size:12,fill:'#C2416B'},{s:T("(as long as no gas escapes)","（只要没有气体跑掉）"),size:11}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['mia',"But our cup got lighter after it fizzed!","可我们的杯子冒完泡变轻了！"],
      ['bit',"Because the carbon dioxide escaped into the air. Catch the gas in a balloon and the total mass stays the same.","因为二氧化碳跑到空气里去了。如果用气球把气体收集起来，总质量就不会变。"]]},
{bg:'kitchen',holo:{t:'cards',cols:2,title:T("Reactions all around","身边的化学反应"),items:[{p:'toast',l:T("Toast browning","面包烤黄")},{p:'egg',l:T("Cooking an egg","煎鸡蛋")},{p:'nail',l:T("Iron rusting","铁生锈")},{p:'leaf',l:T("Leaves turning yellow","树叶变黄")}]},
 cast:[['leo',54,'grin','point'],['bit',356,'happy','present']],
 say:[['leo',"Even my breakfast egg is a chemical reaction!","连我早餐的鸡蛋都是化学反应！"]]},
{bg:'kitchen',cast:[['leo',100,'determined','idle'],['mia',210,'happy','idle'],['bit',322,'talk','idle',{y:96}]],
 say:[['bit',"Golden rule: never mix household cleaning products. Some combinations make dangerous gases.","黄金法则：千万不要把家用清洁剂混在一起，有些组合会产生危险气体。"],
      ['leo',"Only safe kitchen chemistry, with an adult. Promise!","只做安全的厨房化学，而且有大人在。我保证！"]]}
],
terms:[["Chemical reaction","化学反应","A change that makes new substances.","生成新物质的变化。"],
 ["Reactants and products","反应物与生成物","What you start with, and what you end up with.","反应开始时的物质，和反应后得到的物质。"],
 ["Conservation of mass","质量守恒定律","Atoms are rearranged, never lost, so total mass stays the same.","原子只是重新组合，不会消失，所以总质量不变。"]],
tryIt:T("With an adult: pour some vinegar into an empty bottle, put 2 spoons of baking soda into a balloon, stretch the balloon over the bottle's neck, then lift it so the soda drops in. Watch the balloon fill with carbon dioxide!","在大人陪同下：往空瓶里倒些白醋，把两勺小苏打装进气球，把气球口套在瓶口上，再把气球竖起来让小苏打落进瓶里。看气球被二氧化碳吹大！")}
);
