var catImg,cat_running;
var mouseImg;
var backgroundImg;
function preload() {
    backgroundImg=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat=createSprite(870,600,50,50);
    cat.addAnimation("catImg",cat1);
    cat.scale=0.2;

    mouse=createSprite(200,600,25,25);
    mouse.addAnimation("mouseImg",mouse1);
    mouse.scale=0.15;

}

function draw() {

    background(backgroundImg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("sittingCat",cat3);
        cat.changeAnimation("sittingCat")
        mouse.addAnimation("lastMouse",mouse3);
        mouse.changeAnimation("lastMouse");
        mouse.scale=0.15;
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode==LEFT_ARROW){
        cat.velocityX=-4;
        cat.addAnimation("movingCat",cat2);
        cat.changeAnimation("movingCat");
        mouse.addAnimation("laughingMouse",mouse2);
        mouse.changeAnimation("laughingMouse");
    }
    


}
