// eng · episode 5 (script marker E5)
LBC.registerEpisode('eng',5,
{t:T("Tall Towers and Wild Winds","高楼与大风"),topic:T("Skyscrapers and wind","高层建筑与风"),
panels:[
{bg:'city',cast:[['leo',115,'surprised','point'],['bit',290,'talk','idle']],
 say:[['leo',"The Shanghai Tower is 632 metres tall! Why doesn't the wind blow it over?","上海中心大厦有632米高！风为什么吹不倒它？"],
      ['bit',"Engineers designed it to handle strong typhoon winds.","工程师专门设计它来抵御强台风。"]]},
{bg:'city',holo:{t:'tower',wind:true,title:T("A twisting shape","螺旋上升的外形")},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"The tower twists as it rises. That breaks up the wind, and its designers say it cuts the wind load by about a quarter.","大厦边升高边旋转，能打乱风的作用。设计师说，这让风荷载减少了约四分之一。"]]},
{bg:'city',holo:{t:'tower',damper:true,title:T("A giant pendulum","巨型阻尼器")},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Near the top hangs a damper of about 1,000 tonnes. When the building sways, it swings the other way and calms the motion.","大厦顶部附近装有约1000吨重的阻尼器。大楼晃动时，它向相反方向摆动，让晃动减小。"]]},
{bg:'class',cast:[['mia',85,'think','think'],['leo',200,'surprised','idle'],['bit',322,'talk','idle']],
 say:[['mia',"So skyscrapers are designed to bend a little, not to be totally stiff?","所以摩天大楼被设计成可以稍微弯一点，而不是完全僵硬？"],
      ['bit',"Right. A little flexibility is much safer than cracking.","对。有一点弹性比开裂安全得多。"]]},
{bg:'city',holo:{t:'list',title:T("Engineers also think about...","工程师还要考虑……"),items:[{i:'user',l:T("People: safe exits and lifts","人：安全出口和电梯")},{i:'bulb',l:T("Energy: saving electricity","能源：节约用电")},{i:'map',l:T("Ground: Shanghai's soft soil","地基：上海的软土")},{i:'warn',l:T("Weather: typhoons and heavy rain","天气：台风和暴雨")}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Shanghai's ground is soft, so very tall buildings stand on deep foundations made of long piles.","上海的地基比较软，所以超高层建筑要打很深的桩基础。"]]},
{bg:'city',cast:[['leo',115,'determined','point'],['bit',290,'happy','wave']],
 say:[['leo',"Maybe I'll design a skyscraper one day!","也许有一天我也会设计摩天大楼！"],
      ['bit',"Start with a tower of paper cups this weekend!","这周末先用纸杯搭座塔吧！"]]}
],
terms:[["Wind load","风荷载","The push of the wind on a building.","风对建筑物产生的作用力。"],
 ["Damper","阻尼器","A device that reduces swaying or shaking.","减少晃动或振动的装置。"],
 ["Foundation","地基","The underground part that spreads a building's weight into the ground.","把建筑重量分散到地下的部分。"]],
tryIt:T("Build the tallest tower you can from 20 paper cups or index cards. Then point a fan at it. How can you make it stand up to the wind?","用20个纸杯或卡片搭一座尽可能高的塔，再用电风扇对着吹。怎样才能让它不被吹倒？")}
);
