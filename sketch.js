var trex, trex_running, edges;
var groundImage;
var Solo;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  Solo=createSprite(200,180,400,20)
  Solo.velocityX=-2
  Solo.addImage(groundImage)
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 40
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
if (Solo.x<0){
  Solo.x=Solo.width/2
}

  //registrando a posição y do trex
  console.log(Solo.x)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
 //impedir que o trex caia
  trex.collide(Solo)
  drawSprites();
}