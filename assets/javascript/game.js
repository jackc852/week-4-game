var wins = 0;
var losses = 0;
var jewel1;
var jewel2;
var jewel3;
var jewel4;
var randoNo = Math.floor(Math.random() * 150) + 50;
var totalScore;

var element = document.getElementById("random-number");
element.innerHTML = randoNo;

$("#jewel1").click(jewelOneRando);

function jewelOneRando() {
var jewel1=Math.floor(Math.random() * 10) + 1;
console.log(jewel1);
}
 
 
console.log(randoNo);