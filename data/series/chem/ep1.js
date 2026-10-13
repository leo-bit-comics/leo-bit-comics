// chem · episode 1 (script marker C1)
LBC.registerEpisode('chem',1,
{t:T("Safety First!","安全第一！"),topic:T("Lab safety, physical and chemical changes","实验安全、物理变化与化学变化"),
panels:[
{bg:'lab',cast:[['leo',85,'surprised','idle',{g:1}],['mia',190,'happy','idle',{g:1}],['wang',310,'happy','point']],
 say:[['nar',"The first chemistry club meeting, in the school lab.","化学社团第一次活动，在学校实验室。"],
      ['wang',"Before we do anything: goggles on!","开始之前，先戴好护目镜！"]]},
{bg:'lab',holo:{t:'list',size:10,title:T("Lab rules","实验室规则"),items:[{i:'eye',l:T("Always wear goggles","始终戴好护目镜")},{i:'cross',l:T("Never taste or directly sniff chemicals","不尝、不直接闻化学品")},{i:'user',l:T("Only experiment with a teacher or adult","只在老师或大人陪同下做实验")},{i:'warn',l:T("Spill? Tell an adult right away","有东西洒出，马上告诉大人")},{i:'drop',l:T("Wash your hands afterwards","实验后洗手")}]},
 cast:[['leo',54,'determined','idle',{g:1}],['bit',356,'talk','present']],
 say:[['bit',"Chemists are careful people. These rules keep everyone safe.","化学家都是很细心的人。这些规则保护每一个人。"]]},
{bg:'lab',holo:{t:'cards',cols:2,title:T("Physical or chemical?","物理变化还是化学变化？"),items:[{p:'ice',l:T("Ice melting: physical","冰融化：物理变化")},{p:'paper',l:T("Tearing paper: physical","撕纸：物理变化")},{p:'toast',l:T("Toast burning: chemical","面包烤焦：化学变化")},{p:'egg',l:T("Frying an egg: chemical","煎鸡蛋：化学变化")}]},
 cast:[['leo',54,'think','think',{g:1}],['bit',356,'talk','present']],
 say:[['bit',"In a physical change, the substance stays the same. In a chemical change, new substances form.","物理变化中，物质本身不变；化学变化中，会生成新物质。"]]},
{bg:'lab',holo:{t:'list',title:T("Signs of a chemical change","化学变化的迹象"),items:[{i:'palette',l:T("A new colour","颜色改变")},{i:'bubbles',l:T("Bubbles of gas","产生气体")},{i:'flame',l:T("Heat or light given off","放热或发光")},{i:'solid',l:T("A new solid appears","生成沉淀")}]},
 cast:[['mia',54,'think','think',{g:1}],['bit',356,'talk','present']],
 say:[['mia',"When toast turns black, that's a new colour AND a new substance!","面包烤焦变黑，是新颜色，也是新物质！"]]},
{bg:'kitchen',cast:[['leo',110,'grin','point'],['bit',300,'wink','idle',{y:96}]],
 say:[['nar',"At home, Leo looks around the kitchen with new eyes.","回到家，乐乐用全新的眼光打量厨房。"],
      ['leo',"Cooking rice, frying eggs, a rusty old pan... there's chemistry everywhere in here!","煮米饭、煎鸡蛋、生锈的旧锅……厨房里到处都是化学！"]]},
{bg:'lab',cast:[['wang',110,'happy','point'],['leo',230,'grin','idle',{g:1}]],
 say:[['wang',"Remember: in chemistry, curiosity plus safety is the perfect mix.","记住：在化学里，好奇心加安全意识，才是最完美的配方。"],
      ['leo',"Got it, Ms. Wang!","明白，王老师！"]]}
],
terms:[["Physical change","物理变化","The shape or state changes, but no new substance forms.","形状或状态改变，但没有生成新物质。"],
 ["Chemical change","化学变化","New substances form, like when toast burns.","生成了新物质，比如面包烤焦。"],
 ["Lab safety","实验安全","Goggles on, no tasting, and an adult always present.","戴护目镜、不品尝、始终有大人在场。"]],
tryIt:T("List 5 changes you see in your kitchen today. Sort them into physical and chemical changes. No experiments needed!","列出今天在厨房里看到的5种变化，把它们分成物理变化和化学变化。不用做实验！")}
);
