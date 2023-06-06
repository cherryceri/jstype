function getWord() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  return word;
}

function generateSentence() {
  sentence = [];
  const wordCount = 2;
  for (let i = 0; i < wordCount; i++) {
    sentence.push(getWord());
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
    sentence.push(getWord());
    animate(document.getElementById("score"));
    animate(document.getElementById("input"), function () {
      document.getElementById("input").value = "";
    });
    animate(document.getElementById("next"));
    animate(document.getElementById("prev"));
    animate(document.getElementById("current"), function () {
      document.getElementById("prev").innerHTML = prev;
      write(points, sentence);
    });
  }
}

function animate(element, callback) {
  element.classList.add("fx");
  element.addEventListener('animationend', () => {
    element.classList.remove("fx");
    callback();
  });
}