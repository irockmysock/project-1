console.log("Shoot shoot game on!")

//Global variables
var stageOneArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var boxesShot = [];
// var counter = 0;
var CompleteStageOneTime = null;
var CompleteStageTwoTime = null;
var CompleteStageThreeTime = null;
var CompleteStageFourTime = null;


////////////////////
// GAME FUNCTIONS //
///////////////////
 var shuffleArray = function(array) {
        for (let i = stageOneArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // shuffleArray(stageOneArray);

    // console.log(stageOneArray);

// var fireOnBox   = function() {
//         var bangSound = new Audio();
//         bangSound.src = "assets/css/sounds/gunshot.mp3"
//         bangSound.play();


//         if (parseInt(event.target.id) === boxesShot.length+1) {
//             event.target.style.visibility = "hidden";
//             boxesShot.push(event.target.id)
//             console.log(boxesShot);
//             checkWinStageOne();
//         } else {
//             for ( i=0; i < stageOneArray.length; i++) {
//                     var box = document.querySelectorAll(".shotBox")[i];
//                     box.style.backgroundColor = "black";
//                     document.querySelectorAll(".shotBox")[i].disabled = true;
//                     var hangGame = setTimeout(function(box){
//                         box.style.backgroundColor = "initial";
//                     }, 3000);
//             }
//             return;
//         }
//     }

var clearBoard = function() {
    var board = document.querySelector(".game-board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}




///////////////////////////////////////////////////////////////////////
///////////////////       STAGE ONE        ///////////////////////////

var stageOneStart = function() {

    clearBoard();
    clearTimer();
    //add background in-game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    // backgroundSound.play();

    //Define board size
    // var stageOneArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    runTimer1();
    console.log(stageOneArray);
    console.log(stageOneArray.length);
    // var boxesShot = [];

    // shuffle array to randomize numbers on board
    // var shuffleArray = function(array) {
    //     for (let i = stageOneArray.length - 1; i > 0; i--) {
    //             const j = Math.floor(Math.random() * (i + 1));
    //             [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // shuffleArray(stageOneArray);

    // console.log(stageOneArray);

    //create gameboard based on boardsize with random numbers
    for (i = 0; i < stageOneArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stageOneArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 25%; width: 25%; border-radius: 15px;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageOneArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        bangSound.play();


        if (parseInt(event.target.id) === boxesShot.length+1) {
            // event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWinStageOne();
        } else {
            for ( i=0; i < stageOneArray.length; i++) {
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

    //function to hide boxes upon click
    //push boxes that have been shot to boxesShot array
    // var fireOnBox   = function() {
    //     var bangSound = new Audio();
    //     bangSound.src = "assets/css/sounds/gunshot.mp3"
    //     bangSound.play();


    //     if (parseInt(event.target.id) === boxesShot.length+1) {
    //         event.target.style.visibility = "hidden";
    //         boxesShot.push(event.target.id)
    //         console.log(boxesShot);
    //         checkWinStageOne();
    //     } else {
    //         for ( i=0; i < stageOneArray.length; i++) {
    //                 var box = document.querySelectorAll(".shotBox")[i];
    //                 box.style.backgroundColor = "black";
    //                 document.querySelectorAll(".shotBox")[i].disabled = true;
    //                 var hangGame = setTimeout(function(box){
    //                     box.style.backgroundColor = "initial";
    //                 }, 3000);
    //         }
    //         return;
    //     }
    // }

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

    //Define board size
    // var stageOneArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    runTimer1();
    console.log(stageOneArray);
    console.log(stageOneArray.length);
    // var boxesShot = [];

    // shuffle array to randomize numbers on board
    var shuffleArray = function(array) {
        for (let i = stageOneArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
    }

    stageTwoArray = shuffleArray(stageOneArray);

    console.log(stageTwoArray);

    //create gameboard based on boardsize with random numbers
    for (i = 0; i < stageTwoArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stageTwoArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 25%; width: 25%; border-radius: 15px;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageOneArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        bangSound.play();


        if (parseInt(event.target.id) === boxesShot.length+1) {
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWinStageTwo();
        } else {
            for ( i=0; i < stageTwoArray.length; i++) {
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

    //function to hide boxes upon click
    //push boxes that have been shot to boxesShot array
    // var fireOnBox   = function() {
    //     var bangSound = new Audio();
    //     bangSound.src = "assets/css/sounds/gunshot.mp3"
    //     bangSound.play();


    //     if (parseInt(event.target.id) === boxesShot.length+1) {
    //         event.target.style.visibility = "hidden";
    //         boxesShot.push(event.target.id)
    //         console.log(boxesShot);
    //         checkWinStageOne();
    //     } else {
    //         for ( i=0; i < stageOneArray.length; i++) {
    //                 var box = document.querySelectorAll(".shotBox")[i];
    //                 box.style.backgroundColor = "black";
    //                 document.querySelectorAll(".shotBox")[i].disabled = true;
    //                 var hangGame = setTimeout(function(box){
    //                     box.style.backgroundColor = "initial";
    //                 }, 3000);
    //         }
    //         return;
    //     }
    // }

    for (i = 0; i < stageTwoArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }

}








/////////////////////////////////////////////////////
////////////////Timer Functions//////////////////////
var startTimer = "";

//Stage 1 timer
var runTimer1= function(){
    //display timer
    counter = 0;
    var displayTimer = function( time ){
        var output = document.querySelector('.timer-display');
        output.innerText = time;
    }
    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        CompleteStageOneTime = timing
        // console.log(counter);
        displayTimer(`${timing} seconds`);
    }, 10);

    // var recordStageOneTime = function(time) {
    //     var
    // }
}

var runTimer2 = function(){
    //display timer
    var displayTimer = function( time ){
        var output = document.querySelector('.timer-display');
        output.innerText = time;
    }
    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        CompleteStageTwoTime = timing
        // console.log(counter);
        displayTimer(`${timing} seconds`);
    }, 10);


}

var runTimer3 = function(){
    //display timer
    var displayTimer = function( time ){
        var output = document.querySelector('.timer-display');
        output.innerText = time;
    }
    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        CompleteStageThreeTime = timing
        // console.log(counter);
        displayTimer(`${timing} seconds`);
    }, 10);

}

var stopTimer = function(){
    clearInterval(startTimer);
}

var clearTimer = function (time) {
    var output = document.querySelector('.timer-display');
    output.innerText = null;
}
/////////////////////////////////////////////////////
////////////////////////////////////////////////////





var checkWinStageOne = function(){
    if (stageOneArray.length === boxesShot.length) {
        // console.log("counter is: "+counter);
        // var timing = (counter/100).toFixed(2)
        // alert(`Your timing is ${CompleteStageOneTime} seconds`);
        stopTimer();
        document.getElementById("stage-1-time").innerText = CompleteStageOneTime;
    }
}

var checkWinStageTwo = function(){
    if (stageTwoArray.length === boxesShot.length) {
        // console.log("counter is: "+counter);
        // var timing = (counter/100).toFixed(2)
        // alert(`Your timing is ${CompleteStageOneTime} seconds`);
        stopTimer();
        document.getElementById("stage-2-time").innerText = CompleteStageTwoTime;
    }
}

// var checkWinStageThree = function(){
//     if (stageThreeArray.length === boxesShot.length) {
//         // console.log("counter is: "+counter);
//         // var timing = (counter/100).toFixed(2)
//         // alert(`Your timing is ${CompleteStageThreeTime} seconds`);
//         stopTimer();
//         document.getElementById("stage-3-time").innerText = CompleteStageThreeTime;
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



document.querySelector("button").addEventListener('click',stageOneStart);

// document.addEventListener("DOMContentLoaded", function(event) {

//     // document.body.addEventListener('mousemove', setRandomBackgroundColor)

// });

var createRandomColor = function() {

    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    return(color);
}

var setRandomColor = function() {

    document.body.style.backgroundColor = createRandomColor();
}