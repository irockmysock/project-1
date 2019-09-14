console.log("Shoot shoot game on!")

//////////////////////
///GLOBAL VARIABLES//
/////////////////////

// REFACTOR fireOnBox -- fireOnBox(colorChange)


var stage = [{
        number: "1",
        gameArray: [],
        spanId: "stage-1-time",
        stageCompleteTime: null,
        buttonId: "#stage1",
        startGameFunction: stageOneStart,
    },
    {
        number: 2,
        gameArray: [],
        spanId: "stage-2-time",
        stageCompleteTime: null,
        buttonId: "#stage2",
        startGameFunction: stageTwoStart,
    },
    {
        number: 3,
        gameArray: [],
        spanId: "stage-3-time",
        stageCompleteTime: null,
        buttonId: "#stage3",
        startGameFunction: stageThreeStart,
    },
    {
        number: 4,
        gameArray: [],
        spanId: "stage-4-time",
        stageCompleteTime: null,
        buttonId: "#stage4",
        startGameFunction: stageFourStart,
    },
    {
        number: 5,
        gameArray: [],
        spanId: "stage-5-time",
        stageCompleteTime: null,
        buttonId: "#stage6",
        startGameFunction: stageFiveStart,
    },
    {
        number: 6,
        gameArray: [],
        spanId: "stage-6-time",
        stageCompleteTime: null,
        buttonId: "#stage6",
        startGameFunction: stageSixStart,
    },
]

var boxesShot = [];
var currentStage = null;
var counter = 0;
var output = document.querySelector('.timer-display');

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

//run timer to log player score
var runTimer= function(){
    //start timer
    startTimer = setInterval(function(){
        counter++;
        var timing = (counter/100).toFixed(2);
        switch (currentStage) {
          case '1':
            // CompleteStageOneTime = timing;
            stage[0].stageCompleteTime = timing;
            break;
          case '2':
            // CompleteStageTwoTime = timing;
            stage[1].stageCompleteTime = timing;
            break;
          case '3':
            // CompleteStageThreeTime = timing;
            stage[2].stageCompleteTime = timing;
            break;
          case '4':
            // CompleteStageFourTime = timing;
            stage[3].stageCompleteTime = timing;
            break;
          case '5':
            // CompleteStageFiveTime = timing;
            stage[4].stageCompleteTime = timing;
            break;
          case '6':
            // CompleteStageSixTime = timing;
            stage[5].stageCompleteTime = timing;
            break;
          // case '7':
          //   CompleteStageSixTime = timing;
          //   break;
        }
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

var backgroundSound = new Audio();
backgroundSound.src = "assets/css/sounds/Surreal-Chase_Looping.mp3";

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

//animate cursor upon shot
var bangAnimate = function() {
    document.querySelector(".game-border").style.cursor = "url('assets/css/images/ammunition.png'), auto";
    var cursor = setTimeout(function(){
        document.querySelector(".game-border").style.cursor = "url('assets/css/images/gun-pointer32px.png'), auto";
    }, 150);
};

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

//check if user has won for stages 1,2,3
var checkWin = function(currentStage,gameArray,spanId,stageCompleteTime) {
    if (gameArray.length === boxesShot.length) {
        stopTimer();
        if (parseFloat(document.getElementById(spanId).innerText) === 0) {
            document.getElementById(spanId).innerText = stageCompleteTime;
            document.getElementById("modal-title").innerText = `Stage ${currentStage} Complete`;
            document.getElementById("modal-text").innerText = `Your best time is ${stageCompleteTime} seconds.`
            $('#high-score-modal').modal('show');
        } else {
            if (parseFloat(stageCompleteTime) < parseFloat(document.getElementById(spanId).innerText)) {
                document.getElementById(spanId).innerText = stageCompleteTime;
                document.getElementById("modal-title").innerText = `Congratulations`;
                document.getElementById("modal-text").innerText = `You achieved a new best time of ${stageCompleteTime} seconds.`;
                $('#high-score-modal').modal('show');
            }
        }
    }
}

//check if user has won for stages 4,5,6
var checkWin2 = function(currentStage,gameArray,spanId,stageCompleteTime) {
    if (gameArray.length+boxesShot.length === boxesShot.length) {
        stopTimer();
        if (parseFloat(document.getElementById(spanId).innerText) === 0) {
            document.getElementById(spanId).innerText = stageCompleteTime;
            document.getElementById("modal-title").innerText = `Stage ${currentStage} Complete`;
            document.getElementById("modal-text").innerText = `Your best time is ${stageCompleteTime} seconds.`
            $('#high-score-modal').modal('show');
        } else {
            if (parseFloat(stageCompleteTime) < parseFloat(document.getElementById(spanId).innerText)) {
            document.getElementById(spanId).innerText = stageCompleteTime;
            document.getElementById("modal-title").innerText = `Congratulations`;
            document.getElementById("modal-text").innerText = `You achieved a new best time of ${stageCompleteTime} seconds.`;
            $('#high-score-modal').modal('show');
            }
        }
    }
}

///////////////////////////////////////////////////////////////////////
///////////////////       STAGE ONE        ///////////////////////////
/////////     16 Squares - No penalty upon miss shot        /////////
//////////////////////////////////////////////////////////////////////
var stageOneStart = function() {
    //clear timers and board and reset arrays and set current stage
    currentStage = "1";
    readyGame();
    stage[0].gameArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    console.log(stage[0].gameArray);

    //add background in-game music
    backgroundSound.loop=true;
    backgroundSound.play();

    //create gameboard based on boardsize with random numbers
    for (i = 0; i < stage[0].gameArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stage[0].gameArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 25%; width: 25%; border-radius: 25px; padding: 25px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stage[0].gameArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    //  click function in game
    var fireOnBox   = function() {
        //sounds and animation
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        bangSound.play();
        bangAnimate();
        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            // checkWinStageOne();
            checkWin(stage[0].number,stage[0].gameArray,stage[0].spanId,stage[0].stageCompleteTime);
        }
    }

    //add event listener for click
    for (i = 0; i < stage[0].gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}

///////////////////////////////////////////////////////////////////////
///////////////////       STAGE TWO        ///////////////////////////
///    16 Squares - Penalty -> Boxes turn black upon miss shot    ////
//////////////////////////////////////////////////////////////////////
var stageTwoStart = function() {
    //clear timers and board and reset arrays and set current stage
    currentStage = "2";
    readyGame();
    stage[1].gameArray = [];

    for (i = 1; i < 17; i++) {
        stage[1].gameArray.push(i);
    }
    console.log(stage[1].gameArray);

    shuffleArray(stage[1].gameArray);

    console.log(stage[1].gameArray);

    //create gameboard based on boardsize with random numbers
    for (i = 0; i < stage[1].gameArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stage[1].gameArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 25%; width: 25%; border-radius: 25px; opacity: 1; padding: 25px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stage[1].gameArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function(color) {
        //sounds and animation
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3"
        bangAnimate();
        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWin(stage[1].number,stage[1].gameArray,stage[1].spanId,stage[1].stageCompleteTime);
            // checkWin(parseInt(currentStage));
        } else {
            // box turns black but number still visible and click disabled for 2 seconds
            wrongBang.play();
            for ( i=0; i < stage[1].gameArray.length; i++) {
                    var box = document.querySelectorAll(".shotBox")[i];
                    box.style.backgroundColor = "black";
                    box.style.color = "grey";
                    box.removeEventListener('click', fireOnBox);

                    var returnToNormal = setTimeout(function(box){
                        for ( i=0; i < stage[1].gameArray.length; i++) {
                            document.querySelectorAll(".shotBox")[i].style.backgroundColor = createRandomColor();
                            document.querySelectorAll(".shotBox")[i].style.color = "white";
                            document.querySelectorAll(".shotBox")[i].addEventListener('click',fireOnBox);
                        }
                    }, 1500);
            }
        }
    }

    for (i = 0; i < stage[1].gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}

///////////////////////////////////////////////////////////////////////
///////////////////       STAGE THREE        //////////////////////////
// 25 Squares - Penalty -> Boxes and text turn black upon miss shot //
//////////////////////////////////////////////////////////////////////
var stageThreeStart = function() {
    //clear timers and board and reset arrays and set current stage
    currentStage = "3";
    readyGame();
    stage[2].gameArray = [];
    for (i = 1; i < 26; i++) {
        stage[2].gameArray.push(i);
    }
    console.log(stage[2].gameArray);

    shuffleArray(stage[2].gameArray);

    console.log(stage[2].gameArray);

    //create gameboard based on boardsize with random numbers
    for (i = 0; i < stage[2].gameArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", stage[2].gameArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; display: inline-block; height: 20%; width: 20%; border-radius: 20px; padding: 25px 0; font-size: 38px;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stage[2].gameArray[i]
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        //sounds and animation
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3"
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3"
        bangAnimate();
        //box disappears if shot in order
        if (parseInt(event.target.id) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id)
            console.log(boxesShot);
            checkWin(stage[2].number,stage[2].gameArray,stage[2].spanId,stage[2].stageCompleteTime);
        } else {
            // box turns black and click disabled for 2 seconds
            wrongBang.play();
            for ( i=0; i < stage[2].gameArray.length; i++) {
                    var box = document.querySelectorAll(".shotBox")[i];
                    box.style.backgroundColor = "black";
                    box.style.color = "black";
                    box.removeEventListener('click', fireOnBox);

                    var returnToNormal = setTimeout(function(box){
                        for ( i=0; i < stage[2].gameArray.length; i++) {
                            document.querySelectorAll(".shotBox")[i].style.backgroundColor = createRandomColor();
                            document.querySelectorAll(".shotBox")[i].style.color = "white";
                            document.querySelectorAll(".shotBox")[i].addEventListener('click',fireOnBox);
                        }
                    }, 1500);
            }
        }
    }

    //event listener for shot on box
    for (i = 0; i < stage[2].gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}


///////////////////////////////////////////////////////////////////////
///////////////////       STAGE FOUR        ///////////////////////////
///  4 Moving Squares - Penalty -> Boxes disappear upon miss shot  ////
///////////////////////////////////////////////////////////////////////

var stageFourStart = function() {
    //clear timers and board and reset arrays and set current stage
    currentStage = "4";
    readyGame();
    stage[3].gameArray = [];
    for (i = 1; i < 5; i++) {
        stage[3].gameArray.push(i);
    }
    console.log(stage[3].gameArray);

    //create gameboard with 4 numbers in order in moving divs
    for (i = 0; i < stage[3].gameArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", "s4"+stage[3].gameArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; height: 25%; width: 25%; border-radius: 15px; padding: 25px 0;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stage[3].gameArray[i];
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        //sounds and animation
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3";
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3";
        bangAnimate();

        //box disappears if shot in order
        if (parseInt(event.target.innerText) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id);
            console.log(boxesShot);
            stage[3].gameArray.shift();
            console.log(stage[3].gameArray);
            checkWin2(stage[3].number,stage[3].gameArray,stage[3].spanId,stage[3].stageCompleteTime);
        } else {
            // remaining box disappear and click disabled for 2 seconds
            wrongBang.play();
            // for ( i=0; i < stage[3].gameArray.length; i++) {
            for (i=0; i<document.querySelectorAll(".shotBox").length;i++) {
                for (j=0; j<stage[3].gameArray.length;j++) {
                    if (parseInt(document.querySelectorAll(".shotBox")[i].innerHTML) === stage[3].gameArray[j]) {
                    console.log(stage[3].gameArray);
                    console.log("stage 4 array length is" +stage[3].gameArray.length);
                    var box = document.querySelectorAll(".shotBox")[i];
                    box.style.visibility = "hidden"
                    box.removeEventListener('click', fireOnBox);
                    }
                }

                    var returnToNormal = setTimeout(function(box){
                        // for ( i=stage[3].gameArray.length-1; i >= 0; i--) {
                        for (i=0; i<document.querySelectorAll(".shotBox").length;i++) {
                            for (j=0; j<stage[3].gameArray.length;j++) {
                                console.log("shotbox array length is " +document.querySelectorAll(".shotBox").length)
                                if (parseInt(document.querySelectorAll(".shotBox")[i].innerHTML) === stage[3].gameArray[j]) {
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

    for (i = 0; i < stage[3].gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}

///////////////////////////////////////////////////////////////////////
///////////////////       STAGE FIVE        ///////////////////////////
///  8 Moving Squares - Penalty -> Boxes disappear upon miss shot  ////
//              Boxes move from left to right                    //////
///////////////////////////////////////////////////////////////////////

var stageFiveStart = function() {
    currentStage = "5";
    readyGame();
    stage[4].gameArray = [];
    for (i = 1; i < 9; i++) {
        stage[4].gameArray.push(i);
    }
    console.log(stage[4].gameArray);
    shuffleArray(stage[4].gameArray);
    console.log("S5 after shuffle:"+stage[4].gameArray);

    //create gameboard with 4 numbers in order in moving divs
    for (i = 0; i < stage[4].gameArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", "s5"+stage[4].gameArray[i]);
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; height: 12.5%; width: 12.5%; border-radius: 15px; padding: 15px 0; font-size: 26px;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stage[4].gameArray[i];
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        //sounds and animation
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3";
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3";
        bangAnimate();
        //box disappears if shot in order
        if (parseInt(event.target.innerText) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id);
            console.log("boxes shot: " + boxesShot);
            for (i=0;i<stage[4].gameArray.length;i++) {
                if (stage[4].gameArray[i] === parseInt(event.target.innerHTML)) {
                    stage[4].gameArray.splice(i,1);
                }
            }
            console.log("stage5array: " + stage[4].gameArray);
            checkWin2(stage[4].number,stage[4].gameArray,stage[4].spanId,stage[4].stageCompleteTime);
        } else {
           // remaining box disappear and click disabled for 2 seconds
            wrongBang.play();

            var box = document.querySelectorAll(".shotBox");
            for (i=0; i<box.length;i++) {
                for (j=0; j<stage[4].gameArray.length;j++) {
                    if (parseInt(box[i].innerHTML) === stage[4].gameArray[j]) {
                    console.log(stage[4].gameArray);
                    console.log("number hidden is: " + stage[4].gameArray[j]);
                    console.log("stage 5 array length is" +stage[4].gameArray.length);
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
            for (j=0; j<stage[4].gameArray.length;j++) {
                if (parseInt(box[i].innerHTML) === stage[4].gameArray[j]) {
                    box[i].style.visibility = "visible";
                    box[i].style.backgroundColor = createRandomColor();
                    box[i].style.color = "white";
                    box[i].addEventListener('click',fireOnBox);
                }
            }
        }
    };

    for (i = 0; i < stage[4].gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }

}

/////////////////////////////////////////////////////////////////////////
///////////////////       STAGE SIX        /////////////////////////////
///  16 Moving Squares - Penalty -> Boxes disappear upon miss shot  ////
/////////    Animate from edge of screen moving to center     //////////
///////////////////////////////////////////////////////////////////////

var stageSixStart = function() {
    currentStage = "6";
    readyGame();
    stage[5].gameArray = [];
    for (i = 1; i < 17; i++) {
        stage[5].gameArray.push(i);
    }
    shuffleArray(stage[5].gameArray);
    console.log(stage[5].gameArray);

    //create gameboard with 16 numbers
    for (i = 0; i < stage[5].gameArray.length; i++) {
        var shootBox = document.createElement("div");
        shootBox.setAttribute("id", "s6"+(i+1));
        shootBox.setAttribute("class","shotBox");
        shootBox.setAttribute("style","box-sizing: border-box; height: 12%; width: 12%; border-radius: 15px; padding: 0; font-size: 20px; padding: 20px 0; position: absolute;");
        shootBox.style.backgroundColor = createRandomColor();
        shootBox.innerText = stage[5].gameArray[i];
        var gameBoard = document.querySelector(".game-board");
        gameBoard.appendChild(shootBox);
    }

    var fireOnBox   = function() {
        //sounds and animation
        var bangSound = new Audio();
        bangSound.src = "assets/css/sounds/gunshot.mp3";
        var wrongBang = new Audio();
        wrongBang.src = "assets/css/sounds/Buzz.mp3";
        bangAnimate();
        //box disappears if shot in order
        if (parseInt(event.target.innerText) === boxesShot.length+1) {
            bangSound.play();
            event.target.style.visibility = "hidden";
            boxesShot.push(event.target.id);
            console.log("boxes shot: " + boxesShot);
            for (i=0;i<stage[5].gameArray.length;i++) {
                if (stage[5].gameArray[i] === parseInt(event.target.innerHTML)) {
                    stage[5].gameArray.splice(i,1);
                }
            }
            checkWin2(stage[5].number,stage[5].gameArray,stage[5].spanId,stage[5].stageCompleteTime);
        } else {
           // remaining box disappear and click disabled for 2 seconds
            wrongBang.play();

            var box = document.querySelectorAll(".shotBox");
            for (i=0; i<box.length;i++) {
                for (j=0; j<stage[5].gameArray.length;j++) {
                    if (parseInt(box[i].innerHTML) === stage[5].gameArray[j]) {
                    console.log("stage 6 array length is" +stage[5].gameArray.length);
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
            for (j=0; j<stage[5].gameArray.length;j++) {
                if (parseInt(box[i].innerHTML) === stage[5].gameArray[j]) {
                    box[i].style.visibility = "visible";
                    box[i].style.backgroundColor = createRandomColor();
                    box[i].style.color = "white";
                    box[i].addEventListener('click',fireOnBox);
                }
            }
        }
    };

    for (i = 0; i < stage[5].gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
    }
}

//Event listener for choose stage buttons
document.querySelector("#stage1").addEventListener('click',stageOneStart);
document.querySelector("#stage2").addEventListener('click',stageTwoStart);
document.querySelector("#stage3").addEventListener('click',stageThreeStart);
document.querySelector("#stage4").addEventListener('click',stageFourStart);
document.querySelector("#stage5").addEventListener('click',stageFiveStart);
document.querySelector("#stage6").addEventListener('click',stageSixStart);
// for (i=0;i<6;i++) {
//     document.querySelector(stage[i].buttonId).addEventListener('click',stage[i].startGameFunction);
// }


////////////////////////////////////////////////////////////////////////////
////////////////////////////////END/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////