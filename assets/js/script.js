console.log("Shoot shoot game on!")



var gameArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var boxesShot = [];
var counter = 0;
var playerCompleteTime = null;


var createBoard = function() {
    //Define board size
    // var gameArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
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
        shootBox.innerText = gameArray[i]
        var gameBoard = document.querySelector(".left-col");
        gameBoard.appendChild(shootBox);
    }


    //function to hide boxes upon click
    //push boxes that have been shot to boxesShot array
    var fireOnBox   = function() {
        if (parseInt(event.target.id) === boxesShot.length+1) {
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWin();
        } else {
            return;
        }
    }

    for (i = 0; i < gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }

    runTimer();


}


var startTimer = "";
var runTimer = function(){

    var displayTimer = function( time ){
        var output = document.querySelector('.timer-display');
        output.innerText = time;
    }

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




var checkWin = function(){
    if (gameArray.length === boxesShot.length) {
        // console.log("counter is: "+counter);
        // var timing = (counter/100).toFixed(2)
        alert(`Your timing is ${playerCompleteTime} seconds`);
        stopTimer();
    }
}





document.querySelector("button").addEventListener('click',createBoard);




// var fireOnBox   = function() {
//     event.target.hidden = true;
// }


// for (i = 0; i < gameArray.length; i++){
    // document.querySelectorAll(".shotBox")[i].addEventListener('click',fireOnBox);
// }

// document.querySelectorAll(".shotBox")[0].addEventListener('click',fireOnBox);


// document.querySelector(`#${}`)


























// var counter = 0;
// setInterval(function(){
//     counter ++
// },timer)