let inputDir={x: 0, y: 0};

const foodMusic=new Audio("snakegamemusic/eatesnake.mp3");
const gameOver=new Audio("snakegamemusic/snakegameover.wav")
const backgroundMusic=new Audio('snakegamemusic/snakebackground.mp3');
const dirMusic=new Audio('snakegamemusic/turnsnake.mp3');
let index=1;
let score=0;
let speed=7;
let lastPaint=0;
let snakeArr=[
    {x: 13, y: 15}
    ]
 
let food={
    x:6,
    y:5
}

function main(currenttime){

   
     window.requestAnimationFrame(main);
  
     if((currenttime-lastPaint)/1000< 1/speed){
        return;
     }
     lastPaint=currenttime;
     gameEngine();
     
   
}

function isCollide(sarr)
{
    
    for(let i=1;i<sarr.length;i++)
    {
        if(sarr[i].x===sarr[0].x &&sarr[i].y==sarr[0].y)
        {
            return true;
        } 
         
    }
    if((sarr[0].x>=18 ||sarr[0].x<=1) ||(sarr[0].y>=18 ||sarr[0].y<=1))
        {
            return true;
        }  
}
function gameEngine()
 {
      if(isCollide(snakeArr))
    {
        backgroundMusic.pause();
        gameOver.play();
        
        inputDir={x:0, y:0};
        alert ("Game Over");
         snakeArr=[{x:13, y:15}];
        score=0;
        scoreCard.innerHTML= "Score :" + score;
         backgroundMusic.play();
        

    }
    

    //if food eaten increment score and place food again
    if(snakeArr[0].y===food.y&&snakeArr[0].x===food.x)
    {
        foodMusic.play();
        score+=1;
        if(score>hiscoreval)
        {  
            hiscoreval=score;
            localStorage.setItem('highscore',JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML="Highest Score :"+hiscoreval;
        }
        scoreCard.innerHTML= "Score :" + score;
        snakeArr.unshift({x:snakeArr[0].x+inputDir.x ,y:snakeArr[0].y+inputDir.y});
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    }

    //snake movement
    for(let i=snakeArr.length-2;i>=0;i--)
    {
        
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

      
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{

        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;

        if(index===0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        
        document.getElementById('board').append(snakeElement);
        
        
    });

    
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    document.getElementById('board').append(foodElement);


}

 window.addEventListener('keydown',(e)=>{
 
    inputDir={x:0,y:1}       //game start
    dirMusic.play();
    switch(e.key)
    {
        case "ArrowUp":
           console.log("ArrowUp");
           inputDir.x=0;
           inputDir.y=-1;
           break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
             break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;
    
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=1;
            inputDir.y=0;
            break;
            
        default:
            break;

    }
})

let rightmove=document.getElementById('right');
let leftmove=document.getElementById('left');
let downmove=document.getElementById('down');
let upmove=document.getElementById('up');

rightmove.addEventListener('click',()=>{
    inputDir={x:0,y:1}       //game start
    dirMusic.play();
    inputDir.x=1;
    inputDir.y=0;

})

leftmove.addEventListener('click',()=>{
    inputDir={x:0,y:1}       //game start
    dirMusic.play();
    inputDir.x=-1;
    inputDir.y=0;

})

upmove.addEventListener('click',()=>{
    inputDir={x:0,y:1}       //game start
    dirMusic.play();
    inputDir.x=0;
    inputDir.y=-1;

})

downmove.addEventListener('click',()=>{
    inputDir={x:0,y:1}       //game start
    dirMusic.play();
    inputDir.x=0;
    inputDir.y=1;

})

let highscore=localStorage.getItem('');
if(highscore===null)
{    hiscoreval=0;
    localStorage.setItem('highscore',JSON.stringify(hiscoreval));
}
else{
    hiscoreval=JSON.parse(highscore);
    document.getElementById('hiscoreBox').style.innerHTML="Highest Score:"+highscore;
}
window.requestAnimationFrame(main);










document.getElementById('reverse').addEventListener('click',()=>{
    window.close('index2.html');
})