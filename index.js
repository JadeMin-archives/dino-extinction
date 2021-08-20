function confirmReload(isOver){
    /*var answer = isOver? confirm(true) :
        confirm(false);
    if(answer) location.reload();*/
}

if(!window.dinoBot) {
    var dinoBot = Runner.instance_;
    var endTime = 6,
        solvedTime = endTime * 1000;
    dinoBot.gameEnd = dinoBot.gameOver;
    dinoBot.gameOver = function(){};
    
    dinoBot.canvas.focus();
    dinoBot.playIntro();
    dinoBot.startGame();
    dinoBot.setSpeed(99999);
    
    setInterval(function(){
        if(Runner.instance_.playCount > 1 && dinoBot.gameOver.toString() == "function(){}") {
            Runner.instance_.gameOver = dinoBot.gameEnd;
            confirmReload(true);
        }
    }, 0);
    setTimeout(function(){
        Runner.instance_.gameEnd();
    }, solvedTime);
} else {
    confirmReload(false);
}
