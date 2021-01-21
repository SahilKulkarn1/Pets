//Create variables here
var database; 
var dog;
var happyDog, sadDog;
var foodS;
var foodStock



function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png")
  sadDog = loadImage("images/dogImg.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  
dog = createSprite(250,250)
dog.addImage(sadDog)
dog.scale = 0.2
foodStock=database.ref("food")
foodStock.on("value",readStock)


}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }

  drawSprites();



  fill(255)
  text("Note : Press Up Arrow to feed dog!:) " ,150,70)

  text("Food Remaing : " +foodS, 270, 100)


} 

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
  food:x
  })



}
