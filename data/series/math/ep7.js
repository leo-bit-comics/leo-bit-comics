// math · episode 7 (script marker M7)
LBC.registerEpisode('math',7,
{t:T("Treasure Map","藏宝图"),topic:T("The coordinate plane","平面直角坐标系"),
panels:[
{bg:'field',props:[['paper',148,155]],cast:[['leo',100,'grin','hold'],['mia',215,'happy','idle'],['bit',325,'talk','wave',{y:96}]],
 say:[['nar',"Ms. Wang has hidden 'treasure' around the sports field for a math game.","王老师在运动场上藏了“宝藏”，玩一场数学游戏。"],
      ['mia',"The clue says: go to (4, 3). What does that mean?","线索说：去 (4, 3)。这是什么意思？"]]},
{bg:'field',holo:{t:'coords',title:T("The coordinate plane","平面直角坐标系"),xr:[0,6],yr:[0,4],walk:[4,3],pts:[{x:0,y:0,c:'#22B8A7'},{x:4,y:3,l:T("Treasure","宝藏")}]},
 cast:[['leo',54,'think','think'],['bit',356,'talk','present']],
 say:[['bit',"Start at the origin (0, 0). Walk 4 along the x-axis, then 3 up the y-axis. The first number is always x!","从原点(0, 0)出发，沿x轴走4格，再沿y轴向上走3格。第一个数永远是x！"]]},
{bg:'field',holo:{t:'coords',title:T("Four quadrants","四个象限"),xr:[-3,4],yr:[-2,4],pts:[{x:4,y:3,l:T("Treasure","宝藏")},{x:-2,y:2,l:T("Goal","球门"),c:'#2F6FD6'},{x:2,y:-1,l:T("Bench","长椅"),c:'#22B8A7'}]},
 cast:[['mia',54,'surprised','idle'],['bit',356,'talk','present']],
 say:[['bit',"Negative numbers go left and down. The two axes split the plane into four quadrants.","负数往左、往下。两条坐标轴把平面分成四个象限。"]]},
{bg:'room',holo:{t:'list',title:T("Coordinates everywhere","坐标无处不在"),items:[{i:'game',l:T("Video games track every character with (x, y)","游戏用(x, y)记录每个角色的位置")},{i:'screen',l:T("Every pixel on a screen has a position","屏幕上每个像素都有位置")},{i:'map',l:T("Maps use longitude and latitude","地图用经纬度定位")},{i:'chip',l:T("Robots and drones navigate with them","机器人和无人机靠坐标导航")}]},
 cast:[['leo',54,'grin','point'],['bit',356,'happy','present']],
 say:[['leo',"So my game knows where my player is using x and y!","所以游戏是用x和y知道我的角色在哪儿！"]]},
{bg:'class',holo:{t:'coords',title:T("Draw with coordinates","用坐标画图"),xr:[0,6],yr:[0,5],poly:[[1,1],[5,1],[3,4]],pts:[{x:1,y:1},{x:5,y:1},{x:3,y:4}]},
 cast:[['mia',54,'grin','point'],['bit',356,'happy','present']],
 say:[['mia',"Connect (1, 1), (5, 1) and (3, 4)... it's a triangle! Everything in math connects.","连接(1, 1)、(5, 1)和(3, 4)……是个三角形！数学知识都是相通的。"]]},
{bg:'field',cast:[['leo',90,'grin','cheer'],['mia',205,'grin','cheer'],['bit',325,'happy','wave',{y:96}]],fx:[['sparkles',150,90]],
 say:[['nar',"At (4, 3) they find the treasure: a box of math puzzle cards!","他们在(4, 3)找到了宝藏：一盒数学谜题卡！"],
      ['leo',"Next time I'll hide one for you, Bit!","下次我藏一个让你找，比特！"],
      ['bit',"Give me the coordinates and I'll be there in a second!","给我坐标，我一秒就到！"]]}
],
terms:[["Coordinate plane","平面直角坐标系","Two number lines, the x-axis and y-axis, crossing at the origin.","两条在原点相交的数轴：x轴和y轴。"],
 ["Ordered pair","有序数对","(x, y): x first, then y.","(x, y)：先写x，再写y。"],
 ["Quadrant","象限","One of the four regions made by the axes.","坐标轴把平面分成的四个区域之一。"]],
tryIt:T("Draw a coordinate grid on paper and make a treasure map of your home or a park. Give a family member three clues as coordinates.","在纸上画坐标网格，做一张家里或公园的藏宝图，用坐标给家人出三条线索。")}
);
