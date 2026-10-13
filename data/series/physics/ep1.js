// physics · episode 1 (script marker P1)
LBC.registerEpisode('physics',1,
{t:T("Measuring the World","测量世界"),topic:T("Measurement and units","测量与单位"),
panels:[
{bg:'class',cast:[['leo',85,'grin','idle'],['mia',200,'think','think'],['bit',322,'talk','idle']],
 say:[['nar',"Leo and Mia measure the classroom with their feet.","乐乐和米娅用脚步量教室。"],
      ['leo',"The room is 30 of my feet long!","教室有30只我的脚那么长！"],
      ['mia',"And 34 of mine. So who's right?","我量的是34只脚。那谁对？"]]},
{bg:'class',holo:{t:'big',title:T("Why we need standard units","为什么需要统一单位"),rows:[{s:T("Leo: 30 feet","乐乐：30脚"),size:13},{s:T("Mia: 34 feet","米娅：34脚"),size:13},{s:T("Tape measure: 7.8 metres","卷尺：7.8米"),size:15,fill:'#C2416B'}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Everyone's feet are different. That's why scientists agreed on standard units, like the metre.","每个人的脚长都不一样。所以科学家约定了统一的单位，比如米。"]]},
{bg:'class',holo:{t:'table',title:T("SI base units","国际单位"),head:[T("Quantity","物理量"),T("Unit","单位"),T("Symbol","符号")],rows:[[T("Length","长度"),T("metre","米"),'m'],[T("Mass","质量"),T("kilogram","千克"),'kg'],[T("Time","时间"),T("second","秒"),'s']]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Length in metres, mass in kilograms, time in seconds. Scientists everywhere use the same units.","长度用米，质量用千克，时间用秒。全世界的科学家都用同一套单位。"]]},
{bg:'class',holo:{t:'list',title:T("How to measure well","测量的诀窍"),items:[{i:'ruler',l:T("Line up the zero mark","零刻度线对准起点")},{i:'eye',l:T("Look straight at the scale","视线正对刻度")},{i:'pen',l:T("Write the number AND the unit","数字和单位都要写")},{i:'check',l:T("Measure 3 times and take the average","测3次，取平均值")}]},
 cast:[['mia',54,'think','think'],['bit',356,'talk','present']],
 say:[['mia',"So '7.8' on its own means nothing. It needs 'metres'!","所以光写“7.8”没有意义，得写上“米”！"]]},
{bg:'class',holo:{t:'big',title:T("Estimate first","先估测"),rows:[{s:T("A door ≈ 2 m tall","门高 ≈ 2米"),size:13},{s:T("A football ≈ 0.4 kg","足球 ≈ 0.4千克"),size:13},{s:T("One heartbeat ≈ 1 s","心跳一次 ≈ 1秒"),size:13},{s:T("Estimates catch silly mistakes","估测能发现低级错误"),size:11,fill:'#C2416B'}]},
 cast:[['leo',54,'grin','point'],['bit',356,'happy','present']],
 say:[['leo',"If I measure the door as 20 m, I'll know something's wrong!","要是我量出门高20米，就知道肯定错了！"]]},
{bg:'class',cast:[['leo',115,'happy','idle'],['bit',290,'talk','wave']],
 say:[['bit',"Physics starts with measuring. Next stop: sound!","物理从测量开始。下一站：声音！"]]}
],
terms:[["Unit","单位","An agreed amount used for measuring, like the metre.","约定好的测量标准，比如米。"],
 ["SI units","国际单位制","The worldwide system: metre, kilogram, second and more.","全世界通用的单位制：米、千克、秒等。"],
 ["Estimate","估测","A sensible rough value before you measure.","测量前给出的合理大概值。"]],
tryIt:T("Find your own 'body ruler': measure your hand span, stride and height in centimetres. Then estimate the length of your room and check it.","找到你的“身体尺子”：用厘米量出你的一拃、一步和身高，然后估测房间长度，再实际测量验证。")}
);
