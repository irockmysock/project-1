console.log("Shoot shoot game on!")



var gameArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var boxesShot = [];
var counter = 0;
var playerCompleteTime = null;


var createBoard = function() {
    //add background game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    backgroundSound.play();

    //Define board size
    // var gameArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    runTimer();
    console.log(gameArray);
    console.log(gameArray.length);
    // var boxesShot = [];

    //shuffle array to randomize numbers on board
    var shuffleArray = function(array) {
        for (let i = gameArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(gameArray);

    console.log(gameArray);

    //create gameboard based on baordsize with random numbers
    for (i = 0; i < gameArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", gameArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","width: 25%");
        shootBox.setAttribute("style","height: 25%");
        shootBox.setAttribute("style","box-sizing: border-box");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = gameArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }


    //function to hide boxes upon click
    //push boxes that have been shot to boxesShot array
    var fireOnBox   = function() {
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        bangSound.play();


        if (parseInt(event.target.id) === boxesShot.length+1) {
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWin();
        } else {
            for ( i=0; i < gameArray.length; i++) {
                    var box = document.querySelectorAll(".shotBox")[i];
                    box.style.backgroundColor = "black";
                    document.querySelectorAll(".shotBox")[i].disabled = true;
                    var hangGame = setTimeout(function(box){
                        box.style.backgroundColor = "initial";
                    }, 3000);
            }
            return;
        }
    }

    for (i = 0; i < gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }

}

/////////////////////////////////////////////////////
////////////////Timer Functions//////////////////////
var startTimer = "";
var runTimer = function(){
    //display timer
    var displayTimer = function( time ){
        var output = document.querySelector('.timer-display');
        output.innerText = time;
    }
    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        playerCompleteTime = timing
        // console.log(counter);
        displayTimer(`${timing} seconds`);
    }, 10)
}

var stopTimer = function(){
    clearInterval(startTimer);
}
/////////////////////////////////////////////////////
////////////////////////////////////////////////////



var checkWin = function(){
    if (gameArray.length === boxesShot.length) {
        // console.log("counter is: "+counter);
        // var timing = (counter/100).toFixed(2)
        alert(`Your timing is ${playerCompleteTime} seconds`);
        stopTimer();
    }
}



document.querySelector("button").addEventListener('click',createBoard);

document.addEventListener("DOMContentLoaded", function(event) {

    // document.body.addEventListener('mousemove', setRandomBackgroundColor)

});

var createRandomColor = function() {

    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    return(color);
}

var setRandomColor = function() {

    document.body.style.backgroundColor = createRandomColor();
}




























// var counter = 0;
// setInterval(function(){
//     counter ++
// },timer)