import './App.css';

function App() {
  return (
    <div className="App">
    // var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//const newNumbers = numbers.map(function (x) {
//var numbers = [3, 56, 2, 48, 5];

//const newNumbers = numbers.map((x) => x * x);

//console.log(newNumbers);

////Map -Create a new array by doing something with each item in an array.
//const newNumbers = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
//const newNumbers = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce( (accumulator, currentNumber) => accumulator + currentNumber);

////Find - find the first item that matches from an array.
//const newNumber = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
//const newNumber = numbers.findIndex((num) => num > 10);

//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia.js";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);


    </div>
  );
}

export default App;
