const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,computer,playerArcher,computerArcher;
var playerArrows=[];
var computerArrows=[];
var arrow

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerBase = new ComputerBase (width-300,random(450,height-300),180,150);
  computer = new Computer(width-300,computerBase.body.position.y-153,50,180);
  computerArcher = new ComputerArcher(width-350,computer.body.position.y-10,120,120);
  playerBase = new PlayerBase(300,random(450,height-300),180,150);
  player = new Player(285,playerBase.body.position.y-153,50,180);
  playerArcher = new PlayerArcher(345,player.body.position.y-10,120,120);
  player_arrow = new PlayerArrow(playerArcher.body.position.x,playerArcher.body.position.y,100,10,playerArcher.body.angle);
 }

function draw() {

  background(180);

  Engine.update(engine);
  
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   computerBase.display();

   //display Player and computerplayer and players hands
   playerArcher.display();
   computerArcher.display();
   computer.display();
   player.display();

   //player arrow
   player_arrow.display();
}
function keyPressed(){
  if(keyCode===32){
    player_arrow.shoot(playerArcher.body.angle);
}
}