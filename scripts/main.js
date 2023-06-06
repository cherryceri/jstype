function getWord(sentence) {
  word = wordList[Math.floor(Math.random() * wordList.length)];

  if (word == sentence[1] || word.length > 10) {
    getWord(sentence)
  }
  return word;
}

function generateSentence() {
  sentence = [];
  const wordCount = 2;
  for (let i = 0; i < wordCount; i++) {
    sentence.push(getWord(sentence));
  };
  return sentence;
}

function write(points, sentence) {
  document.getElementById("current").innerHTML = sentence[0];
  document.getElementById("next").innerHTML = sentence[1];
  document.getElementById("score").innerHTML = points;
}

function start() {
  sentence = generateSentence();
  points = 0;
  animate(document.getElementById("current"), "fade")
  animate(document.getElementById("next"), "fade")
  document.getElementById("current").innerHTML = sentence[0];
  document.getElementById("next").innerHTML = sentence[1];
  document.getElementById("score").innerHTML = points;
  document.getElementById("input").onclick = "";
}

// I dont like how messy this is but it works ¯\_(ツ)_/¯
function processInput() {
  let current = document.getElementById("current").innerHTML;
  let next = document.getElementById("next").innerHTML;
  let points = document.getElementById("score").innerHTML;
  sentence = [current, next];
  input = (document.getElementById("input").value).toLowerCase()
  if (input == sentence[0]) {
    points++;
    prev = sentence[0];
    sentence.shift();
    sentence.push(getWord(sentence));
    animate(document.getElementById("score"), "fx");
    animate(document.getElementById("input"), "fx", function () {
      document.getElementById("input").value = "";
    });
    animate(document.getElementById("next"), "fx");
    animate(document.getElementById("prev"), "fx");
    animate(document.getElementById("current"), "fx", function () {
      document.getElementById("prev").innerHTML = prev;
      write(points, sentence);
    });
  }
}

function animate(element, name, callback) {
  element.classList.add(name);
  element.addEventListener('animationend', () => {
    element.classList.remove(name);
    callback();
  });
}