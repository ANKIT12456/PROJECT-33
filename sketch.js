const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle,count=0;
var particles=[];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0,gameState="play";
function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);


 
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
  
   textSize(30);
   text("500",15,660);
   text("500",95,660);
   text("200",175,660);
   text("200",255,660);
   text("100",335,660);
   text("100",415,660);
   text("200",495,660);
   text("200",575,660);
   text("500",655,660);
   text("500",735,660)

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>600)
     {
       if(particle.body.position.x>10 && particle.body.position.x<180
        || particle.body.position.x>660 && particle.body.position.x<820)
        {
          score=score+500;
          particle=null;
          if(count>=5)
          {
              gameState="end";
          }
        }

        else if(particle.body.position.x>180 && particle.body.position.x<340
          ||  particle.body.position.x>500  && particle.body.position.x<660)
          {
            score=score+200;
            particle=null;
            if(count>=5){
              gameState="end";
            }
          }

          else if(particle.body.position.x>340 && particle.body.position.x<500){
            score=score+100;
            particle=null;
            if(count>=5){
              gameState="end";
            }
          }

     }
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function keyPressed(){
  if(keyCode===32 && gameState!=="end"){
    particle=new Particle(random(width-30, width/2+30), 10,10);
    count++;
  }
}