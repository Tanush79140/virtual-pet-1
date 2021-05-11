var dog,happyDog,dogImage;
var database;
var foodS;
var foodStock;


function preload()
{
	dogImage = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  foodStock= database.ref('Food');
  foodStock.on("value",readStock);
  foodStock.set(20)

dog = createSprite(250,350,10,60)
dog.addImage(dogImage)
dog.scale=0.2;


}

function draw() {  
background(46,139,87);

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);

}
 
  //add styles here
  fill("white")
  textSize(20);
text("Note: Press UP_ARROW key To Feed Milk",80,50)
text("Food Remaining: 19",150,200)

stroke(255);


drawSprites();

}

//function to read foodStock

function readStock(data){
  foodS=data.val();
}

//function for writestock

function writeStock(x){

  if(x<=0){
x=0;
  }else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  });
}


