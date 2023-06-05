var dc = require('an-array-of-english-words');
var keypress = require('keypress');

var sentence = [];
const wordCount = 15;
let activetext = document.querySelector("#activetext");
let next = document.querySelector("#next");
let input = document.querySelector("#input");
let score = document.querySelector("#score");

function generateSentence() {
  for (let i = 0; i < wordCount; i++) {
    var j = Math.floor(Math.random() * dc.length);
    sentence.push(dc[j]);
  };
  console.log(sentence);
}

var words = 0;
console.log(sentence[words])
var letters = sentence[words].toString().split('');

console.log(letters);

function processInput() {
  for (let i = 0; i < letters.length; i++) {
    var letter = letters[i];
    process.stdin.on('keypress', function (ch, key) {
      console.log('got "keypress"', key);
      if (key && key.name == letter) {
        process.stdin.pause();
        return 0;
      }
      else {
        return 1;
      }
    })
  }
}