console.log("Shoot shoot game on!")


var createBoard = function() {
    //Define board size
    var gameArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    console.log(gameArray);
    console.log(gameArray.length);

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

    var fireOnBox   = function() {
        event.target.style.visibility = "hidden";
    }

    for (i = 0; i < gameArray.length; i++) {
        var selectBox = document.querySelectorAll(".shotBox");
        selectBox[i].addEventListener('click',fireOnBox);
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