// mathjr · episode 5 (script marker MJ5)
LBC.registerEpisode('mathjr',5,
{t:T("The Juice Ratio Mystery","果汁配比之谜"),topic:T("Ratio and proportion","比和比例"),
panels:[
{bg:'kitchen',props:[['glass',205]],cast:[['leo',85,'worried','idle'],['mia',200,'think','think'],['bit',322,'talk','wave']],
 say:[['nar',"Leo is making juice from concentrate for his friends.","乐乐用浓缩果汁给朋友们兑饮料。"],
      ['leo',"The label says 1 part concentrate to 4 parts water. My glass tastes like plain water!","标签上写着浓缩汁和水按1比4兑。我这杯喝起来像白开水！"]]},
{bg:'kitchen',holo:{t:'big',title:T("Ratio 1 : 4","比 1 : 4"),rows:[{s:T("1 juice : 4 water","1份果汁 : 4份水"),size:14},{s:T("5 parts in total","一共5份"),size:14},{s:'1 : 4 = 2 : 8',size:16,mono:true,fill:'#C2416B'}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"A ratio compares two amounts. Multiply both parts by the same number and the taste stays the same.","比是用来比较两个量的。前项和后项同时乘同一个数，味道不变。"]]},
{bg:'kitchen',holo:{t:'table',title:T("A 750 mL jug","750毫升一壶"),head:[T("Liquid","液体"),T("Parts","份数"),T("mL","毫升")],rows:[[T("Juice","果汁"),'1','150'],[T("Water","水"),'4','600'],[T("Total","合计"),'5','750']],note:T("1 part = 750 ÷ 5 = 150 mL","每份 = 750 ÷ 5 = 150毫升")},
 cast:[['mia',54,'surprised','idle'],['bit',356,'talk','present']],fx:[['!','mia']],
 say:[['mia',"Leo, you only poured about 50 mL of concentrate. That's 1 : 14!","乐乐，你只倒了大约50毫升浓缩汁，那是1 : 14！"]]},
{bg:'kitchen',holo:{t:'vs',title:T("Proportion? 2 : 3 = 6 : 9","2 : 3 = 6 : 9 成比例吗？"),a:{l:T("No, different numbers","不成，数字都不一样"),ok:false},b:{l:T("Yes! 2 × 9 = 3 × 6 = 18","成！2 × 9 = 3 × 6 = 18"),ok:true}},
 cast:[['leo',54,'grin','point'],['bit',356,'happy','present']],
 say:[['bit',"In a proportion, the outer terms multiply to the same answer as the inner terms.","在比例里，两个外项的积等于两个内项的积。"]]},
{bg:'city',holo:{t:'big',title:T("Map scale 1 : 50 000","比例尺 1 : 50 000"),rows:[{s:'4 cm × 50 000',size:15,mono:true},{s:'= 200 000 cm',size:15,mono:true},{s:'= 2 000 m = 2 km',size:17,mono:true,fill:'#C2416B'}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Maps use ratios too. Every 1 cm on this map is 50 000 cm in real life.","地图也用比。这张地图上的1厘米代表实际的50 000厘米。"]]},
{bg:'kitchen',props:[['glass',205]],cast:[['leo',85,'grin','cheer'],['mia',200,'happy','idle'],['bit',322,'wink','wave']],
 say:[['leo',"150 mL of juice, 600 mL of water. Perfect! Case closed.","150毫升果汁，600毫升水。完美！结案。"],
      ['bit',"Next time: the secrets of circles!","下一集：圆的秘密！"]]}
],
terms:[["Ratio","比","A comparison of two amounts, such as 1 : 4.","两个数相除又叫两个数的比，如1 : 4。"],
 ["Proportion","比例","Two equal ratios, such as 2 : 3 = 6 : 9.","表示两个比相等的式子，如2 : 3 = 6 : 9。"],
 ["Scale","比例尺","The ratio of a length on a map to the real length.","图上距离与实际距离的比。"]],
tryIt:T("With an adult, mix two small cups of squash or juice concentrate: one at 1 : 4 and one at 1 : 8, using a measuring cup. Taste both. Then double the 1 : 4 recipe and check that it tastes the same.","在大人陪同下，用量杯兑两小杯浓缩果汁：一杯按1 : 4，一杯按1 : 8。尝一尝有什么不同。再把1 : 4的配方加倍，看看味道是否一样。")}
);
