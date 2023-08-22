let backgroundMusic=new Audio('ga.Music/background.mp3');
let turnMusic=new Audio('ga.Music/turn.mp3');
let winMusic=new Audio('ga.Music/winner.mp3');
let gameover=false;

let turn ="😊";
const changeTurn=()=>{
    if(turn==="😊")
    {
        return "🤬";
    }
    else{
        return "😊";
    }
}
let x=1;
const checkWin=()=>{
    let count=0;

    let boxtext=Array.from(document.getElementsByClassName("boxText"));
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach((element)=>{
                   
                 if((boxtext[element[0]].innerText===boxtext[element[1]].innerText)&&(boxtext[element[2]].innerText===boxtext[element[1]].innerText)&&(boxtext[element[0]].innerText!==''))
                 {
                    document.querySelector('.info').innerText="Winner is "+boxtext[element[0]].innerText;
                    backgroundMusic.pause();
                    count+=1;
                    document.getElementsByClassName('imagebox')[0].getElementsByTagName('img')[0].style.width="150px";
                    gameover=true;
                    
                 }
                 
    })
    if(x===count)
    {
        winMusic.play();
        x+=1;
           
    }
    }
// backgroundMusic.play();
let boxes=Array.from(document.getElementsByClassName("box"));

boxes.forEach((element)=>{
    let text=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(text.innerText==='')
        {    
             text.innerText=turn;
             turn=changeTurn();
             turnMusic.play();
             checkWin();
             if(!gameover){
             document.getElementsByClassName('info')[0].innerText="Turn for "+ turn;
             }
        }
    })

})


document.getElementById("reset").addEventListener('click',()=>{
    boxes.forEach((element)=>{
        element.querySelector('.boxText').innerText='';
    })
 document.getElementsByClassName('imagebox')[0].getElementsByTagName('img')[0].style.width="0px";
 document.querySelector('.info').innerText="Turn for 😊";
 backgroundMusic.play();
  

})


document.getElementById('back').addEventListener('click',()=>{
    window.close('index1.html');
})