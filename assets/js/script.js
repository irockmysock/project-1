console.log("Shoot shoot game on!")

//Global variables
var stageOneArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var stageTwoArray = [];
var stageThreeArray = [];
var stageFourArray = [];
var boxesShot = [];
var counter = 0;
var CompleteStageOneTime = null;
var CompleteStageTwoTime = null;
var CompleteStageThreeTime = null;
var CompleteStageFourTime = null;


////////////////////
// GAME FUNCTIONS //
///////////////////

//shuffle game array to randomize numbers appearing on board
 var shuffleArray = function(array) {
        for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
}

//create random color to style shotbox
var createRandomColor = function() {
    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    return(color);
}

// set the shotbox color to random
var setRandomColor = function() {
    document.body.style.backgroundColor = createRandomColor();
}

// var fireOnBox   = function() {
//         var bangSound = new Audio();
//         bangSound.src = "assets/css/sounds/gunshot.mp3"
//         bangSound.play();

//remove shotboxes and clears boxesShot array and reset counter
var clearBoard = function() {
    var board = document.querySelector(".game-board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    };
    counter = 0;
    boxesShot =[];
}

var readyGame = function() {
    clearBoard();
    stopTimer();
    clearTimer();
    displayTimer();
}

var checkWinStageOne = function(){
    if (stageOneArray.length === boxesShot.length) {
        // console.log("counter is: "+counter);
        // var timing = (counter/100).toFixed(2)
        // alert(`Your timing is ${CompleteStageOneTime} seconds`);
        stopTimer();
        if (parseFloat(document.getElementById("stage-1-time").innerText) === 0) {
            document.getElementById("stage-1-time").innerText = CompleteStageOneTime;
        } else {
                if (parseFloat(CompleteStageOneTime) < parseFloat(document.getElementById("stage-1-time").innerText)) {
                document.getElementById("stage-1-time").innerText = CompleteStageOneTime;
                }
        }
    }
}

var checkWinStageTwo = function(){
    if (stageTwoArray.length === boxesShot.length) {
        // console.log("counter is: "+counter);
        // var timing = (counter/100).toFixed(2)
        // alert(`Your timing is ${CompleteStageOneTime} seconds`);
        stopTimer();
        if (parseFloat(document.getElementById("stage-2-time").innerText) === 0) {
            document.getElementById("stage-2-time").innerText = CompleteStageTwoTime;
        } else {
                if (parseFloat(CompleteStageTwoTime) < parseFloat(document.getElementById("stage-2-time").innerText)) {
                document.getElementById("stage-2-time").innerText = CompleteStageTwoTime;
                }
        }
    }
}

var checkWinStageThree = function(){
    if (stageThreeArray.length === boxesShot.length) {
        stopTimer();
        if (parseFloat(document.getElementById("stage-3-time").innerText) === 0) {
            document.getElementById("stage-3-time").innerText = CompleteStageThreeTime;
        } else {
                if (parseFloat(CompleteStageThreeTime) < parseFloat(document.getElementById("stage-3-time").innerText)) {
                document.getElementById("stage-3-time").innerText = CompleteStageThreeTime;
                }
        }
    }
}

var checkWinStageFour = function(){
    if (stageFourArray.length === boxesShot.length) {
        stopTimer();
        if (parseFloat(document.getElementById("stage-4-time").innerText) === 0) {
            document.getElementById("stage-4-time").innerText = CompleteStageFourTime;
        } else {
                if (parseFloat(CompleteStageFourTime) < parseFloat(document.getElementById("stage-4-time").innerText)) {
                document.getElementById("stage-4-time").innerText = CompleteStageFourTime;
                }
        }
    }
}


/////////////////////
// TIMER FUNCTIONS //
////////////////////

var startTimer = "";

//display timing in game
var displayTimer = function( time ){
        var output = document.querySelector('.timer-display');
        output.innerText = time;
    }

//stop the timer display
var stopTimer = function(){
    clearInterval(startTimer);
}

//clear the timer display
var clearTimer = function (time) {
    var output = document.querySelector('.timer-display');
    output.innerText = null;
}

//Stage 1 timer to log stage completion timing
var runTimer1= function(){

    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        CompleteStageOneTime = timing
        // console.log(counter);
        displayTimer(`${timing} seconds`);
    }, 10);
}

//Stage 2 timer to log stage completion timing
var runTimer2 = function(){
    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        CompleteStageTwoTime = timing
        // console.log(counter);
        displayTimer(`${timing} seconds`);
    }, 10);
}

//Stage 3 timer to log stage completion timing
var runTimer3= function(){

    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        CompleteStageThreeTime = timing
        // console.log(counter);
        displayTimer(`${timing} seconds`);
    }, 10);
}

//Stage 4 timer to log stage completion timing
var runTimer4= function(){

    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        CompleteStageFourTime = timing
        // console.log(counter);
        displayTimer(`${timing} seconds`);
    }, 10);
}

/////////////////////
///  GAME SOUNDS ///
////////////////////

//add gunshot sound to click
// var bangSound = new Audio();
// bangSound.src = "assets/css/sounds/gunshot.mp3"

// var wrongBang = new Audio();
// wrongBang.src = "assets/css/sounds/Buzz.mp3"

/////////////////////////////////////////////////////
////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
///////////////////       STAGE ONE        ///////////////////////////

var stageOneStart = function() {
    //clear timers and board and reset arrays
    readyGame();
    // clearBoard();
    // clearTimer();
    // displayTimer();
    runTimer1();
    stageOneArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    console.log(stageOneArray);


    //add background in-game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    // backgroundSound.play();

    //create gameboard based on boardsize with random numbers
    for (i = 0; i < stageOneArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stageOneArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 25%; width: 25%; border-radius: 15px; padding: 25px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageOneArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    //  click function in game
    var fireOnBox   = function() {
        // //add gunshot sound to click
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        bangSound.play();
        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWinStageOne();
        }
    }

    //add event listener for click
    for (i = 0; i < stageOneArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}

///////////////////////////////////////////////////////////////////////
///////////////////       STAGE TWO        ///////////////////////////

var stageTwoStart = function() {
    //add background in-game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    // backgroundSound.play();

    //clear timers and board and reset arrays/
    readyGame();
    runTimer2();
    stageTwoArray = [];
    shuffleArray(stageOneArray);
    for (i=0;i<stageOneArray.length;i++) {
        stageTwoArray.push(stageOneArray[i]);
    }
    console.log(stageTwoArray);

    //create gameboard based on boardsize with random numbers
    for (i = 0; i < stageTwoArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stageTwoArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 25%; width: 25%; border-radius: 15px; opacity: 1; padding: 25px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageTwoArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        bangSound.play();

        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWinStageTwo();
        } else {
            // box turns black but number still visible and click disabled for 2 seconds
            var wrongBang = new Audio();
            wrongBang.src = "assets/css/sounds/Buzz.mp3"
            wrongBang.play();
            for ( i=0; i < stageTwoArray.length; i++) {
                    var box = document.querySelectorAll(".shotBox")[i];
                    box.style.backgroundColor = "black";
                    box.style.color = "grey";
                    box.removeEventListener('click', fireOnBox);

                    var returnToNormal = setTimeout(function(box){
                        for ( i=0; i < stageTwoArray.length; i++) {
                            document.querySelectorAll(".shotBox")[i].style.backgroundColor = createRandomColor();
                            document.querySelectorAll(".shotBox")[i].style.color = "white";
                            document.querySelectorAll(".shotBox")[i].addEventListener('click',fireOnBox);
                        }
                    }, 2000);
            }
        }
    }

    for (i = 0; i < stageTwoArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}


///////////////////////////////////////////////////////////////////////
///////////////////       STAGE THREE        ///////////////////////////

var stageThreeStart = function() {

    //clear timers and board and reset arrays
    readyGame();
    runTimer3();
    stageThreeArray = [];
    for (i = 1; i < 26; i++) {
        stageThreeArray.push(i);
    }
    // console.log(stageThreeArray);
    // console.log(stageThreeArray.length);

    shuffleArray(stageThreeArray);

    console.log(stageThreeArray);

    //add background in-game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    // backgroundSound.play();

    //create gameboard based on boardsize with random numbers
    for (i = 0; i < stageThreeArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stageThreeArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 20%; width: 20%; border-radius: 15px; padding: 20px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageThreeArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        //add gunshot sound to click
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        bangSound.play();
        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWinStageThree();
        } else {
            // box turns black and click disabled for 2 seconds
            var wrongBang = new Audio();
            wrongBang.src = "assets/css/sounds/Buzz.mp3"
            wrongBang.play();
            for ( i=0; i < stageThreeArray.length; i++) {
                    var box = document.querySelectorAll(".shotBox")[i];
                    box.style.backgroundColor = "black";
                    box.style.color = "black";
                    box.removeEventListener('click', fireOnBox);

                    var returnToNormal = setTimeout(function(box){
                        for ( i=0; i < stageThreeArray.length; i++) {
                            document.querySelectorAll(".shotBox")[i].style.backgroundColor = createRandomColor();
                            document.querySelectorAll(".shotBox")[i].style.color = "white"
                            document.querySelectorAll(".shotBox")[i].addEventListener('click',fireOnBox);
                        }
                    }, 2000);
            }
        }
    }

    //event listner for shot on box
    for (i = 0; i < stageThreeArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}

///////////////////////////////////////////////////////////////////////
///////////////////       STAGE FOUR        ///////////////////////////

var stageFourStart = function() {
    //add background in-game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    // backgroundSound.play();

    //clear timers and board and reset arrays/
    readyGame();
    runTimer4();
    stageFourArray = [];
    // shuffleArray(stageOneArray);
    for (i = 1; i < 5; i++) {
        stageFourArray.push(i);
    }
    console.log(stageFourArray);

    //create gameboard with 4 numbers in order in moving divs
    for (i = 0; i < stageFourArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stageFourArray[i]);
        shootBox.setAttribute("class","content");
        shootBox.setAttribute("style","box-sizing: border-box; height: 25%; width: 25%; border-radius: 15px; padding: 25px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageFourArray[i];
        var gameBoard = document.querySelector(".game-board");
        // document.querySelector(".game-board").style.display = "block";
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        bangSound.play();

        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWinStageFour();
        } else {
            // box turns black but number still visible and click disabled for 2 seconds
            var wrongBang = new Audio();
            wrongBang.src = "assets/css/sounds/Buzz.mp3"
            wrongBang.play();
            for ( i=0; i < stageFourArray.length; i++) {
                    var box = document.querySelectorAll(".content")[i];
                    box.style.backgroundColor = "black";
                    box.style.color = "grey";
                    box.removeEventListener('click', fireOnBox);

                    var returnToNormal = setTimeout(function(box){
                        for ( i=0; i < stageFourArray.length; i++) {
                            document.querySelectorAll(".content")[i].style.backgroundColor = createRandomColor();
                            document.querySelectorAll(".content")[i].style.color = "white";
                            document.querySelectorAll(".content")[i].addEventListener('click',fireOnBox);
                        }
                    }, 2000);
            }
        }
    }

    for (i = 0; i < stageFourArray.length; i++) {
        var selectBox = document.querySelectorAll(".content");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}




// /////////////////////////////////////////////////////
// ////////////////Timer Functions//////////////////////
// var startTimer = "";

// var displayTimer = function( time ){
//         var output = document.querySelector('.timer-display');
//         output.innerText = time;
//     }

// //Stage 1 timer
// var runTimer1= function(){

//     //start timer
//     startTimer = setInterval(function(){
//         counter++;
//         var timing = (counter/100).toFixed(2);
//         CompleteStageOneTime = timing
//         // console.log(counter);
//         displayTimer(`${timing} seconds`);
//     }, 10);
// }
// //Stage 2 timer
// var runTimer2 = function(){
//     //start timer
//     startTimer = setInterval(function(){
//         counter++;
//         var timing = (counter/100).toFixed(2);
//         CompleteStageTwoTime = timing
//         // console.log(counter);
//         displayTimer(`${timing} seconds`);
//     }, 10);
// }

// var runTimer3 = function(){
//     //display timer
//     var displayTimer = function( time ){
//         var output = document.querySelector('.timer-display');
//         output.innerText = time;
//     }
//     //start timer
//     startTimer = setInterval(function(){
//         counter++;
//         var timing = (counter/100).toFixed(2);
//         CompleteStageThreeTime = timing
//         // console.log(counter);
//         displayTimer(`${timing} seconds`);
//     }, 10);

// }

// var stopTimer = function(){
//     clearInterval(startTimer);
// }

// var clearTimer = function (time) {
//     var output = document.querySelector('.timer-display');
//     output.innerText = null;
// }
// /////////////////////////////////////////////////////
// ////////////////////////////////////////////////////





// var checkWinStageOne = function(){
//     if (stageOneArray.length === boxesShot.length) {
//         // console.log("counter is: "+counter);
//         // var timing = (counter/100).toFixed(2)
//         // alert(`Your timing is ${CompleteStageOneTime} seconds`);
//         stopTimer();
//         if (parseFloat(document.getElementById("stage-1-time").innerText) === 0) {
//             document.getElementById("stage-1-time").innerText = CompleteStageOneTime;
//         } else {
//                 if (parseFloat(CompleteStageOneTime) < parseFloat(document.getElementById("stage-1-time").innerText)) {
//                 document.getElementById("stage-1-time").innerText = CompleteStageOneTime;
//                 }
//         }
//     }
// }

// var checkWinStageTwo = function(){
//     if (stageTwoArray.length === boxesShot.length) {
//         // console.log("counter is: "+counter);
//         // var timing = (counter/100).toFixed(2)
//         // alert(`Your timing is ${CompleteStageOneTime} seconds`);
//         stopTimer();
//         if (parseFloat(document.getElementById("stage-2-time").innerText) === 0) {
//             document.getElementById("stage-2-time").innerText = CompleteStageTwoTime;
//         } else {
//                 if (parseFloat(CompleteStageTwoTime) < parseFloat(document.getElementById("stage-2-time").innerText)) {
//                 document.getElementById("stage-2-time").innerText = CompleteStageTwoTime;
//                 }
//         }
//     }
// }

// var checkWinStageThree = function(){
//     if (stageThreeArray.length === boxesShot.length) {
//         stopTimer();
//         if (parseFloat(document.getElementById("stage-3-time").innerText) === 0) {
//             document.getElementById("stage-3-time").innerText = CompleteStageThreeTime;
//         } else {
//                 if (parseFloat(CompleteStageThreeTime) < parseFloat(document.getElementById("stage-3-time").innerText)) {
//                 document.getElementById("stage-3-time").innerText = CompleteStageThreeTime;
//                 }
//         }
//     }
// }

// var checkWinStageFour = function(){
//     if (stageFourArray.length === boxesShot.length) {
//         // console.log("counter is: "+counter);
//         // var timing = (counter/100).toFixed(2)
//         // alert(`Your timing is ${CompleteStageFourTime} seconds`);
//         stopTimer();
//         document.getElementById("stage-4-time").innerText = CompleteStageFourTime;
//     }
// }



document.querySelector("#stage1").addEventListener('click',stageOneStart);
document.querySelector("#stage2").addEventListener('click',stageTwoStart);
document.querySelector("#stage3").addEventListener('click',stageThreeStart);
document.querySelector("#stage4").addEventListener('click',stageFourStart);

// document.addEventListener("DOMContentLoaded", function(event) {

//     // document.body.addEventListener('mousemove', setRandomBackgroundColor)

// });