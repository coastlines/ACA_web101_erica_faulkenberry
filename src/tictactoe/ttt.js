var gameMarker = "X";

let boxes = document.querySelectorAll('.clickBox');
let turnDiv = document.querySelectorAll('.turn');

function changeMarkerToX(){
  var gameMarker = "X";
  console.log("The x button was clicked!");
 }

function changeMarkerToO(){
  var gameMarker = "O"
  console.log("The o button was clicked!");
 }

function addGamePiece(gp){
  document.getElementById(gp).innerText=gameMarker;
  console.log("Clicked!");
}

function changeMarker(clickBox){
  if (currentPlayer === "X")
  {
      clickBox.innerHTML === "O";
  }
  else
  {
      clickBox.innerHTML === "O";
  }
}

function switchPlayers(){
  if (currentPlayer === "X")
  {
      currentPlayer === "O";
  }
  else
  {
      currentPlayer === "X";
  }
}


  // creating element
 // var xo = document.createElement('h1')
  // add text to element
 // xo.innerText = 'x'
  // append 
 // selectedElement.appendChild(xo)
//}


// var xo = document.createdElement('h1')
// if (previousPlay === 'x') {
//  xo.innerText === "o"
// }
// else {
//  xo.innerText === "x"
// }

//var previousPlay
//var ten = 11
//function addGamePiece (selectedElement) {
//  console.log('selectedElement', selectedElement)
 // selectedElement.appendEle
//}