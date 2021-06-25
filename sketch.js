//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg,happyDogimg;

function preload()
{
	//load images here
dogImg=loadImage("Dog.png");
happyDogImg=loadImage("happydog.png")

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(dogImg)
  dog.scale=0.2
  database=firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
}
function draw() {  
background (46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}
  drawSprites();
  //add styles here
textSize(20)
fill("cyan");
stroke(2);
text("Press Up Arrow to feed Drago Milk",125,50)
text("foodRemaining"+foodS,125,75)
}


function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref("/").update({
  })
}