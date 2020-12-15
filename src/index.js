let score = 0;
let cross = true;

audio = new Audio('../audio/music.mp3');
soundGover = new Audio('../audio/gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);


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

    Dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')); //dino distance from left
    Dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top')); //dino distance from top
    
    Ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')); //obsticle distance from lest
    Oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top')); //obstacle distance from top

    offSetX = Math.abs(Dx - Ox); 
    offSetY = Math.abs(Dy - Oy);

    if(offSetX <  93 && offSetY < 52){
        gameOver.innerHTML = "Game Over";
        obstacle.classList.remove('obstacleAni');
        soundGover.play();
        setTimeout(() => {
            soundGover.pause();
            audio.pause();
        }, 1000);
        
    } 

    else if(offSetX < 145 && cross) {
        score+=1 ;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 100 );

function updateScore(score) {
   
    scoreCon.innerHTML = `your score is :${score}`;
    
}



//37 = left 
//39 =right