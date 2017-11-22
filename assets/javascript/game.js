//Pseudo Code
//Random number generated
//4 crystals, each assigned a random number
//Clicking on each crystal will add the random number to user score
//If user score equals random number, win++
//If user score exceeds random number, loss++
//Reset random number and crystal random numbers with each win or loss

//Global vars
var jewelOne = 0;
var jewelTwo = 0;
var jewelThree = 0;
var jewelFour = 0;
var randoNo = 0;
var totalScore = 0;

//Counters
var wins = 0;
var losses = 0;

function win() {
    alert("You win!")
    wins++
    $("#wins").html(wins);
    reset();
}

//Losses++
function loss() {
    alert("You lost!")
    losses++
    $("#losses").html(losses);
    reset();
}

//Jewel clicks
$("#jewel1").on('click', function() {
    totalScore = totalScore + jewelOne;
    console.log(totalScore);

    if (totalScore === randoNo) {
        win();
    } else if (totalScore > randoNo) {
        loss();
    }

    $("#totalScore").html(totalScore);

});

$("#jewel2").click(function() {


    totalScore = totalScore + jewelTwo;
    console.log(totalScore);
    //If totalScore = randoNo, win++
    if (totalScore === randoNo) {
        win();
    } else if (totalScore > randoNo) {
        loss();
    }

    $("#totalScore").html(totalScore);

});

$("#jewel3").click(function() {

    totalScore = totalScore + jewelThree;
    console.log(totalScore);

    if (totalScore === randoNo) {
        win();
    } else if (totalScore > randoNo) {
        loss();
    }

    $("#totalScore").html(totalScore);
});


$("#jewel4").click(function() {

    totalScore = totalScore + jewelFour;
    console.log(totalScore);

    if (totalScore === randoNo) {
        win();
    } else if (totalScore > randoNo) {
        loss();
    }

    $("#totalScore").html(totalScore);
});

//Start game
function startGame() {

    //Random number generators
    randoNo = Math.floor(Math.random() * 100) + 40;
    console.log("Random Number: " + randoNo);

    jewelOne = Math.floor(Math.random() * 10) + 1;
    console.log("Jewel 1: " + jewelOne);

    jewelTwo = Math.floor(Math.random() * 15) + 1;
    console.log("Jewel 2: " + jewelTwo);

    jewelThree = Math.floor(Math.random() * 20) + 1;
    console.log("Jewel 3: " + jewelThree);

    jewelFour = Math.floor(Math.random() * 25) + 1;
    console.log("Jewel 4: " + jewelFour);

    wins = 0;
    losses = 0;

    $("#totalScore").html(totalScore);
    $("#randoNo").html(randoNo);
    $("#wins").html(wins);
    $("#losses").html(losses);
}

//Game reset after win or loss
function reset() {
    totalScore = 0;

    randoNo = Math.floor(Math.random() * 100) + 40;
    console.log("Random Number: " + randoNo);

    jewelOne = Math.floor(Math.random() * 10) + 1;
    console.log("Jewel 1: " + jewelOne);

    jewelTwo = Math.floor(Math.random() * 20) + 1;
    console.log("Jewel 2: " + jewelTwo);

    jewelThree = Math.floor(Math.random() * 30) + 1;
    console.log("Jewel 3: " + jewelThree);

    jewelFour = Math.floor(Math.random() * 40) + 1;
    console.log("Jewel 4: " + jewelFour);


    $("#totalScore").html(totalScore);
    $("#randoNo").html(randoNo);
    $("#wins").html(wins);
    $("#losses").html(losses);

}

// startGame();