var math = 1 +10
var science = 'cool'
console.log('hey! im working', math, science)

// write out yr code plan step by step -- js in typescript -- name data type before using
// const cant change, let can change
// let pizzaSize = null
// get an element from the DOM
console.log('mainContainer', mainContainer);
console.log('mainContainerQuery', mainContainerQuery);
var mainContainer = document.getElementsByClassName('main-container');
body.style.margin = '0';
mainContainerQuery.style.backgroundColor = 'green';
mainContainer[0].style.height = '100px';
mainContainer[0].style.width = '500px';
mainContainer[0].style.border = '1px solid red';
mainContainer[0].innerText = 'hey there';
mainContainer[0].style.backgroundColor = 'green';
var body = document.querySelector('body');
body.style.margin = 0;

// create an element
var board = document.createElement('div');
mainContainerQuery.appendChild(board);

// create a class for tic tac toe board
board.className = 'board';
board.style.width = '50%';
board.style.border = '2px solid black';

// create a function 
function backgroundRed() {
  mainContainerQuery.style.backgroundColor = 'red'
}

// change button color by using "this" -- passing in "this" literally the button itself
