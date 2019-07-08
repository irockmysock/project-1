console.log("Shoot shoot game on!")

//Global variables
var stageOneArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var stageTwoArray = [];
var stageThreeArray = [];
var stageFourArray = [];
var stageFiveArray = [];
var stageSixArray = [];
var CompleteStageOneTime = null;
var CompleteStageTwoTime = null;
var CompleteStageThreeTime = null;
var CompleteStageFourTime = null;
var CompleteStageFiveTime = null;
var CompleteStageSixTime = null;
var currentStage = null;
var boxesShot = [];
var counter = 0;




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
    runTimer();
}

var checkWinStageOne = function(){
    if (stageOneArray.length === boxesShot.length) {
        // console.log("counter is: "+counter);
        // var timing = (counter/100).toFixed(2)
        // alert(`Your timing is ${CompleteStageOneTime} seconds`);
        stopTimer();
        if (parseFloat(document.getElementById("stage-1-time").innerText) === 0) {
            document.getElementById("stage-1-time").innerText = CompleteStageOneTime;
            document.getElementById("modal-title").innerText = `Stage 1 Complete`;
            document.getElementById("modal-text").innerText = `Your best time is ${CompleteStageOneTime} seconds.`
            $('#high-score-modal').modal('show');
        } else {
            if (parseFloat(CompleteStageOneTime) < parseFloat(document.getElementById("stage-1-time").innerText)) {
                document.getElementById("stage-1-time").innerText = CompleteStageOneTime;
                document.getElementById("modal-title").innerText = `Congratulations`;
                document.getElementById("modal-text").innerText = `You achieved a new best time of ${CompleteStageOneTime} seconds.`;
                $('#high-score-modal').modal('show');

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
            document.getElementById("modal-title").innerText = `Stage 2 Complete`;
            document.getElementById("modal-text").innerText = `Your best time is ${CompleteStageTwoTime} seconds.`
            $('#high-score-modal').modal('show');
        } else {
                if (parseFloat(CompleteStageTwoTime) < parseFloat(document.getElementById("stage-2-time").innerText)) {
                document.getElementById("stage-2-time").innerText = CompleteStageTwoTime;
                document.getElementById("modal-title").innerText = `Congratulations`;
                document.getElementById("modal-text").innerText = `You achieved a new best time of ${CompleteStageTwoTime} seconds.`;
                $('#high-score-modal').modal('show');
                }
        }
    }
}

var checkWinStageThree = function(){
    if (stageThreeArray.length === boxesShot.length) {
        stopTimer();
        if (parseFloat(document.getElementById("stage-3-time").innerText) === 0) {
            document.getElementById("stage-3-time").innerText = CompleteStageThreeTime;
            document.getElementById("modal-title").innerText = `Stage 3 Complete`;
            document.getElementById("modal-text").innerText = `Your best time is ${CompleteStageThreeTime} seconds.`
            $('#high-score-modal').modal('show');
        } else {
                if (parseFloat(CompleteStageThreeTime) < parseFloat(document.getElementById("stage-3-time").innerText)) {
                document.getElementById("stage-3-time").innerText = CompleteStageThreeTime;
                document.getElementById("modal-title").innerText = `Congratulations`;
                document.getElementById("modal-text").innerText = `You achieved a new best time of ${CompleteStageThreeTime} seconds.`;
                $('#high-score-modal').modal('show');
                }
        }
    }
}

var checkWinStageFour = function(){
    if (stageFourArray.length+boxesShot.length === boxesShot.length) {
        stopTimer();
        if (parseFloat(document.getElementById("stage-4-time").innerText) === 0) {
            document.getElementById("stage-4-time").innerText = CompleteStageFourTime;
            document.getElementById("modal-title").innerText = `Stage 4 Complete`;
            document.getElementById("modal-text").innerText = `Your best time is ${CompleteStageFourTime} seconds.`
            $('#high-score-modal').modal('show');
        } else {
                if (parseFloat(CompleteStageFourTime) < parseFloat(document.getElementById("stage-4-time").innerText)) {
                document.getElementById("stage-4-time").innerText = CompleteStageFourTime;
                document.getElementById("modal-title").innerText = `Congratulations`;
                document.getElementById("modal-text").innerText = `You achieved a new best time of ${CompleteStageFourTime} seconds.`;
                $('#high-score-modal').modal('show');
                }
        }
    }
}


var checkWinStageFive = function(){
    if (stageFiveArray.length+boxesShot.length === boxesShot.length) {
        stopTimer();
        if (parseFloat(document.getElementById("stage-5-time").innerText) === 0) {
            document.getElementById("stage-5-time").innerText = CompleteStageFiveTime;
            document.getElementById("modal-title").innerText = `Stage 5 Complete`;
            document.getElementById("modal-text").innerText = `Your best time is ${CompleteStageFiveTime} seconds.`
            $('#high-score-modal').modal('show');
        } else {
                if (parseFloat(CompleteStageFiveTime) < parseFloat(document.getElementById("stage-5-time").innerText)) {
                document.getElementById("stage-5-time").innerText = CompleteStageFourTime;
                document.getElementById("modal-title").innerText = `Congratulations`;
                document.getElementById("modal-text").innerText = `You achieved a new best time of ${CompleteStageFiveTime} seconds.`;
                $('#high-score-modal').modal('show');
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


var runTimer= function(){
    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        switch (currentStage) {
          case '1':
            CompleteStageOneTime = timing;
            break;
          case '2':
            CompleteStageTwoTime = timing;
            break;
          case '3':
            CompleteStageThreeTime = timing;
            break;
          case '4':
            CompleteStageFourTime = timing;
            break;
          case '5':
            CompleteStageFiveTime = timing;
            break;
        }
        displayTimer(`${timing} seconds`);
    }, 10);
}



// //Stage 1 timer to log stage completion timing
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

// //Stage 2 timer to log stage completion timing
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

// //Stage 3 timer to log stage completion timing
// var runTimer3= function(){

//     //start timer
//     startTimer = setInterval(function(){
//         counter++;
//         var timing = (counter/100).toFixed(2);
//         CompleteStageThreeTime = timing
//         // console.log(counter);
//         displayTimer(`${timing} seconds`);
//     }, 10);
// }

// //Stage 4 timer to log stage completion timing
// var runTimer4= function(){

//     //start timer
//     startTimer = setInterval(function(){
//         counter++;
//         var timing = (counter/100).toFixed(2);
//         CompleteStageFourTime = timing
//         // console.log(counter);
//         displayTimer(`${timing} seconds`);
//     }, 10);
// }

// //Stage 5 timer to log stage completion timing
// var runTimer5= function(){

//     //start timer
//     startTimer = setInterval(function(){
//         counter++;
//         var timing = (counter/100).toFixed(2);
//         CompleteStageFiveTime = timing
//         // console.log(counter);
//         displayTimer(`${timing} seconds`);
//     }, 10);
// }

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
/////////     16 Squares - No penalty upon miss shot        /////////
//////////////////////////////////////////////////////////////////////

var stageOneStart = function() {
    currentStage = "1";
    //clear timers and board and reset arrays
    readyGame();
    // clearBoard();
    // clearTimer();
    // displayTimer();
    // runTimer();
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
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 25%; width: 25%; border-radius: 25px; padding: 25px 0;");
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
///    16 Squares - Penalty -> Boxes turn black upon miss shot    ////
//////////////////////////////////////////////////////////////////////

var stageTwoStart = function() {
    currentStage = "2";
    //add background in-game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    // backgroundSound.play();

    //clear timers and board and reset arrays/
    readyGame();
    // runTimer2();
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
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 25%; width: 25%; border-radius: 25px; opacity: 1; padding: 25px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageTwoArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3"

        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWinStageTwo();
        } else {
            // box turns black but number still visible and click disabled for 2 seconds
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
///////////////////       STAGE THREE        //////////////////////////
// 25 Squares - Penalty -> Boxes and text turn black upon miss shot //
//////////////////////////////////////////////////////////////////////

var stageThreeStart = function() {
    currentStage = "3";
    //clear timers and board and reset arrays
    readyGame();
    // runTimer3();
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
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 20%; width: 20%; border-radius: 20px; padding: 25px 0; font-size: 38px;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageThreeArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        //add gunshot sound to click
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3"

        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWinStageThree();
        } else {
            // box turns black and click disabled for 2 seconds
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
///  4 Moving Squares - Penalty -> Boxes disappear upon miss shot  ////
///////////////////////////////////////////////////////////////////////

var stageFourStart = function() {
    currentStage = "4";
    //add background in-game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    // backgroundSound.play();

    //clear timers and board and reset arrays/
    readyGame();
    // runTimer();
    stageFourArray = [];
    for (i = 1; i < 5; i++) {
        stageFourArray.push(i);
    }
    console.log(stageFourArray);

    //create gameboard with 4 numbers in order in moving divs
    for (i = 0; i < stageFourArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", "s4"+stageFourArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; height: 25%; width: 25%; border-radius: 15px; padding: 25px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageFourArray[i];
        var gameBoard = document.querySelector(".game-board");
        // document.querySelector(".game-board").style.display = "block";
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3";
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3";

        //box disappears if shot in order
        if (parseInt(event.target.innerText) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id);
            console.log(boxesShot);
            stageFourArray.shift();
            // stageFourArray.splice(parseInt(event.target.innerText)-1,1);
            console.log(stageFourArray);
            checkWinStageFour();
        } else {
            // remaining box disappear and click disabled for 2 seconds
            wrongBang.play();
            // for ( i=0; i < stageFourArray.length; i++) {
            for (i=0; i<document.querySelectorAll(".shotBox").length;i++) {
                for (j=0; j<stageFourArray.length;j++) {
                    if (parseInt(document.querySelectorAll(".shotBox")[i].innerHTML) === stageFourArray[j]) {
                    console.log(stageFourArray);
                    console.log("stage 4 array length is" +stageFourArray.length);
                    var box = document.querySelectorAll(".shotBox")[i];
                    // box.style.backgroundColor = "black";
                    // box.style.color = "black";
                    box.style.visibility = "hidden"
                    box.removeEventListener('click', fireOnBox);

                    }
                }

                    var returnToNormal = setTimeout(function(box){
                        // for ( i=stageFourArray.length-1; i >= 0; i--) {
                        for (i=0; i<document.querySelectorAll(".shotBox").length;i++) {
                            for (j=0; j<stageFourArray.length;j++) {
                                console.log("shotbox array length is " +document.querySelectorAll(".shotBox").length)
                                if (parseInt(document.querySelectorAll(".shotBox")[i].innerHTML) === stageFourArray[j]) {
                                document.querySelectorAll(".shotBox")[i].style.visibility = "visible";
                                document.querySelectorAll(".shotBox")[i].style.backgroundColor = createRandomColor();
                                document.querySelectorAll(".shotBox")[i].style.color = "white";
                                document.querySelectorAll(".shotBox")[i].addEventListener('click',fireOnBox);
                                }
                            }
                        }
                    }, 2000);
            }
        }
    }

    for (i = 0; i < stageFourArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}


///////////////////////////////////////////////////////////////////////
///////////////////       STAGE FIVE        ///////////////////////////
///  8 Moving Squares - Penalty -> Boxes disappear upon miss shot  ////
///////////////////////////////////////////////////////////////////////

var stageFiveStart = function() {
    currentStage = "5";
    //add background in-game music
    var backgroundSound = new Audio();
    backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3"
    // backgroundSound.play();

    //clear timers and board and reset arrays/
    readyGame();
    // runTimer5();
    stageFiveArray = [];
    for (i = 1; i < 9; i++) {
        stageFiveArray.push(i);
    }
    console.log(stageFiveArray);
    shuffleArray(stageFiveArray);
    console.log("S5 after shuffle:"+stageFiveArray);

    //create gameboard with 4 numbers in order in moving divs
    for (i = 0; i < stageFiveArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", "s5"+stageFiveArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; height: 12.5%; width: 12.5%; border-radius: 15px; padding: 15px 0; font-size: 26px;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stageFiveArray[i];
        var gameBoard = document.querySelector(".game-board");
        // document.querySelector(".game-board").style.display = "block";
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3";
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3";

        //box disappears if shot in order
        if (parseInt(event.target.innerText) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id);
            console.log("boxes shot: " + boxesShot);
            for (i=0;i<stageFiveArray.length;i++) {
                if (stageFiveArray[i] === parseInt(event.target.innerHTML)) {
                    stageFiveArray.splice(i,1);
                }
            }
            console.log("stage5array: " + stageFiveArray);
            checkWinStageFive();
        } else {
           // remaining box disappear and click disabled for 2 seconds
            wrongBang.play();

            var box = document.querySelectorAll(".shotBox");
            for (i=0; i<box.length;i++) {
                for (j=0; j<stageFiveArray.length;j++) {
                    if (parseInt(box[i].innerHTML) === stageFiveArray[j]) {
                    console.log(stageFiveArray);
                    console.log("number hidden is: " + stageFiveArray[j]);
                    console.log("stage 5 array length is" +stageFiveArray.length);
                    box[i].style.visibility = "hidden";
                    box[i].removeEventListener('click',fireOnBox);
                    };
                };
            };
            var returnToNormal = setTimeout(revealAll, 2000);
        }
    }

    function revealAll () {
        var box = document.querySelectorAll(".shotBox");
        // loop thru everything again
        for (i=0; i<box.length;i++) {
            for (j=0; j<stageFiveArray.length;j++) {
                if (parseInt(box[i].innerHTML) === stageFiveArray[j]) {
                    box[i].style.visibility = "visible";
                    box[i].style.backgroundColor = createRandomColor();
                    box[i].style.color = "white";
                    box[i].addEventListener('click',fireOnBox);
                }
            }
        }
    };

    for (i = 0; i < stageFiveArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
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




document.querySelector("#stage1").addEventListener('click',stageOneStart);
document.querySelector("#stage2").addEventListener('click',stageTwoStart);
document.querySelector("#stage3").addEventListener('click',stageThreeStart);
document.querySelector("#stage4").addEventListener('click',stageFourStart);
document.querySelector("#stage5").addEventListener('click',stageFiveStart);

// document.addEventListener("DOMContentLoaded", function(event) {

//     // document.body.addEventListener('mousemove', setRandomBackgroundColor)

// });