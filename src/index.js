let score = 0;


document.onkeydown = function(e){
    
    if(e.keyCode == 38){
     dino = document.querySelector(".dino");
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }

    //move dino ahead
    if(e.keyCode == 39){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }

    //move dino backward
    if(e.keyCode == 37){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px"; 

    }
}

setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    Dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    Dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    
    Ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')); //distance from lest
    Oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top')); //distance from top

    offSetX = Math.abs(Dx - Ox); //203
    offSetY = Math.abs(Dy - Oy);

    if(offSetX <  93 && offSetY < 52){
        gameOver.style.visibility = "visible";
        obstacle.classList.remove('obstacleAni');
    } 

    else {
        score+=1 ;
        updateScore(score);
    }

}, 100 );

function updateScore(score) {
   
    scoreCon.innerHTML = `your score is :${score}`;
    
}

//37 = left 
//39 =right