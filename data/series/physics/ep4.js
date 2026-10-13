// physics · episode 4 (script marker P4)
LBC.registerEpisode('physics',4,
{t:T("Where Rainbows Come From","彩虹从哪里来"),topic:T("Colour and dispersion","光的色散"),
panels:[
{bg:'city',props:[['rainbow']],cast:[['leo',110,'grin','cheer'],['mia',220,'happy','point']],
 say:[['nar',"After the rain, a rainbow appears over the river.","雨后，江面上出现了一道彩虹。"],
      ['leo',"A rainbow! Where do the colours come from?","彩虹！这些颜色是从哪里来的？"]]},
{bg:'class',holo:{t:'light',kind:'prism',title:T("Dispersion","光的色散")},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"White sunlight is really a mix of colours. A prism bends each colour by a different amount and spreads them out.","白色的阳光其实是多种色光混合而成的。三棱镜让每种颜色偏折的程度不同，于是把它们分开了。"]]},
{bg:'city',holo:{t:'big',title:T("Raindrops are tiny prisms","雨滴是小三棱镜"),rows:[{s:T("Sun behind you","太阳在你身后"),size:13},{s:T("Raindrops in front of you","雨滴在你前方"),size:13},{s:T("→ a rainbow!","→ 彩虹！"),size:17,fill:'#C2416B'}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Millions of raindrops split the sunlight. That's why you see a rainbow with the Sun behind you.","千千万万的雨滴把阳光分开。所以要背对太阳才能看到彩虹。"]]},
{bg:'class',holo:{t:'spectrum',title:T("The colours in white light","白光里的颜色")},
 cast:[['mia',54,'grin','point'],['bit',356,'happy','present']],
 say:[['mia',"Red, orange, yellow, green, blue, indigo, violet!","红、橙、黄、绿、蓝、靛、紫！"]]},
{bg:'field',holo:{t:'big',title:T("Why is a leaf green?","叶子为什么是绿色的？"),rows:[{s:T("A leaf absorbs most colours","叶子吸收了大部分色光"),size:12},{s:T("and reflects green","把绿光反射出来"),size:12},{s:T("We see the colour that bounces back","我们看到的是被反射回来的颜色"),size:11,fill:'#C2416B'}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Objects absorb some colours and reflect others. A leaf reflects green light, so it looks green.","物体吸收一部分色光，反射另一部分。叶子反射绿光，所以看起来是绿色的。"]]},
{bg:'room',cast:[['leo',115,'grin','point'],['bit',290,'happy','wave']],
 say:[['leo',"So my blue jacket is blue because it reflects blue light!","所以我的蓝外套是蓝色的，因为它反射蓝光！"],
      ['bit',"Exactly. Physics explains even your school uniform!","完全正确。物理连你的校服都能解释！"]]}
],
terms:[["Dispersion","色散","White light splitting into colours.","白光分解成各种色光的现象。"],
 ["Spectrum","光谱","The band of colours from red to violet.","从红到紫排列的彩色光带。"],
 ["Colour by reflection","反射与颜色","We see an object's colour from the light it reflects.","我们看到的物体颜色，是它反射的光的颜色。"]],
tryIt:T("On a sunny morning, stand with your back to the Sun and spray a fine mist from a plant sprayer. Can you make your own rainbow?","晴朗的早晨，背对太阳，用喷壶喷出细细的水雾。你能造出一道彩虹吗？")}
);
