// mathjr · episode 10 (script marker MJ10)
LBC.registerEpisode('mathjr',10,
{t:T("The Mystery of the Box","盒子之谜"),topic:T("Rectangular solids: volume and surface area","长方体的体积与表面积"),
panels:[
{bg:'room',cast:[['leo',85,'think','think'],['mia',200,'happy','idle'],['bit',322,'talk','wave']],
 say:[['nar',"Leo is setting up a glass tank for a class water-plant project: 30 cm long, 20 cm wide, 10 cm high.","乐乐为班级水生植物小项目准备一个玻璃缸：长30厘米，宽20厘米，高10厘米。"],
      ['leo',"How much water fits? And how much glass did it take?","能装多少水？又用了多少玻璃？"]]},
{bg:'room',holo:{t:'big',title:T("Volume of a box","长方体的体积"),rows:[{s:T("length × width × height","长 × 宽 × 高"),size:13},{s:'30 × 20 × 10',size:18,mono:true},{s:'= 6 000 cm³',size:20,mono:true,fill:'#C2416B'}]},
 cast:[['leo',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Volume counts how many 1 cm cubes fit inside. One layer is 30 × 20 = 600 cubes, and there are 10 layers.","体积就是能装下多少个1立方厘米的小方块。一层是30 × 20 = 600个，一共10层。"]]},
{bg:'room',holo:{t:'big',title:T("From cm³ to litres","从立方厘米到升"),rows:[{s:'1 L = 1 000 cm³',size:16,mono:true},{s:'6 000 cm³ = 6 L',size:17,mono:true,fill:'#C2416B'},{s:T("6 L of water ≈ 6 kg","6升水约重6千克"),size:13}]},
 cast:[['mia',54,'surprised','idle'],['bit',356,'talk','present']],fx:[['!','mia']],
 say:[['mia',"Six big bottles of water. That's heavy! An adult should help carry it.","相当于六大瓶水，好重！要请大人帮忙搬。"]]},
{bg:'room',holo:{t:'table',title:T("Surface area: 6 faces","表面积：6个面"),head:[T("Pair of faces","一对面"),T("Area (cm²)","面积（cm²）")],rows:[[T("Top + bottom","上 + 下"),'1 200'],[T("Front + back","前 + 后"),'600'],[T("Left + right","左 + 右"),'400']],note:T("Total 2 200 cm²","合计2 200平方厘米")},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[["bit","Opposite faces match: 30 × 20 = 600, 30 × 10 = 300, 20 × 10 = 200. Double each and add.","相对的面完全一样：30 × 20 = 600，30 × 10 = 300，20 × 10 = 200。各乘2再相加。"]]},
{bg:'room',holo:{t:'vs',title:T("An open tank (no lid)","没有盖子的鱼缸"),a:{l:T("Still 2 200 cm² of glass","还是2 200平方厘米玻璃"),ok:false},b:{l:'2 200 − 600 = 1 600 cm²',ok:true}},
 cast:[['leo',54,'grin','point'],['bit',356,'happy','present']],
 say:[['leo',"No lid means one 30 × 20 face is missing!","没有盖子，就少了一个30 × 20的面！"]]},
{bg:'room',cast:[['leo',85,'grin','cheer'],['mia',200,'happy','idle'],['bit',322,'wink','wave']],
 say:[['mia',"Volume for what's inside, surface area for the outside. Case closed!","体积管里面装多少，表面积管外面有多大。结案！"],
      ['leo',"That's every case from 6th grade. The Junior Detectives are ready for 7th!","六年级的案子全破了。小侦探们准备好上七年级啦！"],
      ['bit',"See you in Math Detectives!","数学侦探见！"]]}
],
terms:[["Volume","体积","How much space a solid takes up: length × width × height for a box.","物体所占空间的大小，长方体体积 = 长 × 宽 × 高。"],
 ["Surface area","表面积","The total area of all faces of a solid.","立体图形所有面的面积之和。"],
 ["Litre","升","A unit of volume: 1 L = 1 000 cm³.","容积单位：1升 = 1 000立方厘米。"]],
tryIt:T("Box detective: measure an empty cereal or tissue box with a ruler. Work out its volume and its surface area. Then carefully open it out flat (with an adult) and check the area by measuring the flat pieces.","盒子侦探：用尺子量一个空的麦片盒或纸巾盒，算出它的体积和表面积。再在大人帮助下小心地把盒子拆开摊平，量一量平面上的各块，验证表面积。")}
);
