// eng · episode 1 (script marker E1)
LBC.registerEpisode('eng',1,
{t:T("Think Like an Engineer","像工程师一样思考"),topic:T("The engineering design process","工程设计流程"),
panels:[
{bg:'room',props:[['desk',285],['stand',285]],cast:[['leo',140,'worried','idle']],fx:[['sweat','leo']],
 say:[['leo',"My phone keeps falling over when I watch videos. So annoying!","我看视频时手机老是倒，烦死了！"],
      ['nar',"Bit pops out of the laptop.","比特从笔记本电脑里蹦了出来。"]]},
{bg:'room',holo:{t:'list',num:true,size:10,title:T("The design process","工程设计流程"),items:[{l:T("Ask: what's the problem?","明确问题：要解决什么？")},{l:T("Imagine: lots of ideas","构思：想出很多点子")},{l:T("Plan: sketch the best one","设计：画出最好的方案")},{l:T("Build a prototype","制作原型")},{l:T("Test it","测试")},{l:T("Improve, then go round again","改进，再来一轮")}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"That's a problem, and engineers love problems! They follow a loop: ask, imagine, plan, build, test, improve. Then go round again.","这是个问题，工程师最爱解决问题了！他们按一个循环工作：明确问题、构思、设计、制作、测试、改进，然后再来一轮。"]]},
{bg:'room',holo:{t:'list',title:T("Requirements","设计要求"),items:[{i:'check',l:T("Holds the phone at a good viewing angle","让手机保持合适的观看角度")},{i:'check',l:T("Made from cardboard I already have","用家里现有的纸板制作")},{i:'check',l:T("Folds flat for my school bag","能折叠放进书包")},{i:'check',l:T("Costs ¥0","零成本")}]},
 cast:[['leo',54,'determined','idle'],['bit',356,'talk','present']],
 say:[['bit',"First, write down what success looks like. These are your requirements and constraints.","先写下什么样算成功。这些就是设计要求和限制条件。"]]},
{bg:'workshop',props:[['stand',205]],cast:[['leo',95,'grin','point'],['mia',305,'smirk','idle']],
 say:[['nar',"Leo sketches three ideas and builds the simplest one first.","乐乐画了三个方案草图，先做了最简单的一个。"],
      ['mia',"It's... leaning a bit.","它……有点歪。"]]},
{bg:'workshop',holo:{t:'vs',title:T("Test and improve","测试与改进"),a:{l:T("Version 1: tips over backwards","第1版：向后翻倒"),ok:false},b:{l:T("Version 2: wider base and a triangle brace","第2版：加宽底座，加三角形支撑"),ok:true}},
 cast:[['leo',54,'determined','idle'],['bit',356,'happy','present']],
 say:[['bit',"Failure isn't the end. It's information! Every test tells you what to fix.","失败不是终点，而是信息！每次测试都告诉你该改进什么。"]]},
{bg:'room',props:[['desk',285],['stand',285]],cast:[['leo',140,'grin','cheer'],['bit',345,'happy','wave',{y:80}]],
 say:[['leo',"Version 2 works! And I used a triangle, just like in math class.","第2版成功了！我还用了三角形，跟数学课学的一样。"],
      ['bit',"Math plus making: that's engineering.","数学加动手，这就是工程。"]]}
],
terms:[["Engineering","工程","Using science and math to design solutions to real problems.","运用科学和数学，为实际问题设计解决方案。"],
 ["Requirements","设计要求","What the design must do.","设计必须达到的目标。"],
 ["Constraints","限制条件","Limits such as cost, time and materials.","成本、时间、材料等方面的限制。"],
 ["Prototype","原型","An early model built to test an idea.","用来测试想法的早期模型。"]],
tryIt:T("Design a phone or tablet stand from one sheet of cardboard. Test it, write down one problem, then build version 2.","用一张纸板设计一个手机或平板支架。测试它，写下一个问题，再做出第2版。")}
);
