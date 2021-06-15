const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
     getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if (backgroundImg){
        background(backgroundImg);
    }
    
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJson = await response.json();

    // write code slice the datetime
    dayTime = responseJson.datetime;
    r = dayTime.slice(11, 13);



    // add conditions to change the background images from sunrise to sunset
    if (r > 06 && r <= 08){
        bg = "sunrise1.png";
    }
    else if (r > 08 && r <= 09){
        bg = "sunrise2.png";
    }
    else if (r > 09 && r <= 10){
        bg = "sunrise3.png";
    }
    else if (r > 10 && r <= 11){
        bg = "sunrise4.png";
    }
    else if (r > 11 && r <= 12){
        bg = "sunrise5.png";
    }
    else if (r > 12 && r <= 13){
        bg = "sunrise6.png";
    }
    else if (r > 13 && r <= 14){
        bg = "sunset7.png";
    }
    else if (r > 14 && r <= 15 ){
        bg = "sunset8.png";
    }
    else if (r > 15 && r <= 16){
        bg = "sunset9.png";
    }
    else if (r > 16 && r <= 17){
        bg = "sunset10.png";
    }
    else if (r > 17 && r <= 18){
        bg = "sunset11.png";
    }
    else if (r > 18 && r <= 24){
        bg = "sunset12.png";
    }
    else if (r > 0 && r <= 06){
        bg = "sunset12.png";
    }




    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
