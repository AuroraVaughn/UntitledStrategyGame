const tileTypes = [
{name:"nwGrass",x:0, y:0},
{name:"nGrass",x:32, y:0},
{name:"neGrass",x:64, y:0},
{name:"wGrass",x:0, y:32},
{name:"cDirt",x:32, y:32},
{name:"eGrass",x:64, y:32},
{name:"swGrass",x:0, y:64},
{name:"sGrass",x:32, y:64},
{name:"seGrass",x:64, y:64},
{name:"grass1",x:96, y:0},
{name:"grass2",x:128, y:0},
{name:"grass3",x:160, y:0},
{name:"grass4",x:96, y:32},
{name:"grass5",x:128, y:32},
{name:"grass6",x:160, y:32},
{name:"grass7",x:96, y:64},
{name:"grass8",x:128, y:64},
{name:"grass9",x:160, y:64},
{name:"redRock1",x:192, y:0},
{name:"redRock2",x:224, y:0},
{name:"redRock3",x:192, y:32},
{name:"redRock4",x:224, y:32},
{name:"grayStone1",x:256, y:0},
{name:"grayStone2",x:288, y:0},
{name:"grayStone3",x:256, y:32},
{name:"grayStone4",x:288, y:32},
{name:"sand1",x:192, y:64},
{name:"sand2",x:224, y:64},
{name:"sand3",x:256, y:64},
{name:"sand4",x:288, y:64},
{name:"blueStone1",x:320, y:0},
{name:"blueStone2",x:320, y:32},
{name:"blueStone3",x:320, y:64},
{name:"blueStone4",x:352, y:0},
{name:"blueStone5",x:352, y:32},
{name:"blueStone6",x:352, y:64},
{name:"blueWater",x:384, y:0},
{name:"greenWater",x:384, y:32},
{name:"deepWater",x:384, y:64}
];

const units = [
{name:"mushroom1",x:0, y:96},
{name:"grayWhip",x:32, y:96},
{name:"greenWhip",x:64, y:96},
{name:"tree",x:96, y:96},
{name:"mushroom2",x:128, y:96},
{name:"puffball",x:160, y:96},
{name:"centipede",x:192, y:96},
{name:"beetle",x:224, y:96},
{name:"caterpillar",x:256, y:96},
{name:"scorpion",x:288, y:96},
{name:"spinyWorm",x:320, y:96},
{name:"spider",x:352, y:96},
{name:"spearman",x:0, y:160},
{name:"magus",x:32, y:160},
{name:"archer",x:64, y:160},
{name:"axeman",x:96, y:160},
{name:"grenadier",x:128, y:160}
];

const projectiles = [
{name:"explosion",x:384, y:96},
{name:"poisonBomb",x:416, y:96},
{name:"poisonCloud",x:448, y:96},
{name:"fireball",x:480, y:96},
{name:"nArrow",x:0, y:128},
{name:"neArrow",x:32, y:128},
{name:"eArrow",x:64, y:128},
{name:"seArrow",x:96, y:128},
{name:"sArrow",x:128, y:128},
{name:"swArrow",x:160, y:128},
{name:"wArrow",x:192, y:128},
{name:"nwArrow",x:0, y:128}
];

export default {tiles,units,projectiles};