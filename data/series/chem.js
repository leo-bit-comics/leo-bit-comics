// ===== Chemistry Kitchen: preview of Shanghai 8th-grade chemistry. Fire and electricity appear only as teacher demos. =====
// Episodes live in data/series/chem/ep1.js … ep12.js
// Plan notes: ep11 mixtures and separation (filtration, distillation, molecular fabric) · ep12 supernova dust chemistry (silica vs carbon; elements and compounds; Webb / Cas A)
LBC.registerSeries({id:'chem',icon:'flame',color:'#C2416B',t:T("Chemistry Kitchen","化学小厨房"),
 desc:T("Lab safety, air, water, atoms and molecules, chemical reactions, acids and bases, solutions and crystals, reaction rate and catalysts, fluorescence and carbon-dot glow, mixtures and how to separate them, and dust left by an exploded star (silica and carbon). Every home activity is safe and done with an adult.","实验安全、空气、水、原子和分子、化学反应、酸和碱、溶液和结晶、反应速率与催化剂、荧光与碳点发光、混合物及其分离，以及恒星爆炸后留下的尘埃（二氧化硅和碳）。所有家庭小实验都安全，并需大人陪同。"),
 grade:T("A preview of Shanghai 8th-grade chemistry","上海八年级化学预习"),
 // Episode titles, one per file data/series/chem/ep<N>.js (in order). Must match each episode's t.
 titles:[
  T("Safety First!","安全第一！"), // ep1
  T("The Air Around Us","我们身边的空气"), // ep2
  T("Water, Inside Out","水的奥秘"), // ep3
  T("Too Small to See","看不见的微粒"), // ep4
  T("Fizz! Chemical Reactions","嘶嘶！化学反应"), // ep5
  T("Acids and Bases","酸和碱"), // ep6
  T("Mirror-Image Molecules","镜像分子"), // ep7
  T("Where Did the Sugar Go?","糖去哪儿了？"), // ep8
  T("Speed It Up!","让反应加速！"), // ep9
  T("Glow That Changes Color","会变色的荧光"), // ep10
  T("A Cloth That Picks One","会挑分子的布"), // ep11
  T("Two Kinds of Star Dust","两种星尘"), // ep12
 ]});
