window.onload = init;

function init() {
  document.getElementById("input").value = "";
}

function start() {
  sentence = makeSentence();
  points = 0;

  playAnim(document.getElementById("current"), "fade")
  playAnim(document.getElementById("next"), "fade")

  document.getElementById("current").innerHTML = sentence[0];
  document.getElementById("next").innerHTML = sentence[1];
  document.getElementById("score").innerHTML = points;
  document.getElementById("input").onclick = "";
}

// I dont like how messy this is but it works ¯\_(ツ)_/¯
function update() {
  let current = document.getElementById("current").innerHTML;
  let next = document.getElementById("next").innerHTML;
  let points = document.getElementById("score").innerHTML;

  sentence = [current, next];
  input = (document.getElementById("input").value).toLowerCase()

  if (input == sentence[0]) {
    document.getElementById("input").setAttribute("readonly", "");
    points++;
    prev = sentence[0];
    sentence.shift();
    sentence.push(getWord(sentence));
    playAnim(document.getElementById("next"), "fx");
    playAnim(document.getElementById("prev"), "fx");
    playAnim(document.getElementById("current"), "fx", function () {
      write(points, sentence, prev);
    });
    playAnim(document.getElementById("score"), "fx");
    playAnim(document.getElementById("input"), "fx", function () {
      document.getElementById("input").value = "";
      document.getElementById("input").removeAttribute("readonly");
    });
  }
}

function playAnim(element, name, callback) {
  element.classList.add(name);
  element.addEventListener('animationend', () => {
    element.classList.remove(name);
    callback();
  });
}

function getWord(sentence) {
  word = wordList[Math.floor(Math.random() * wordList.length)];

  if (word == sentence[0] || word == sentence[1] || word.length > 10) {
    getWord(sentence)
  }
  return word;
}

function makeSentence() {
  sentence = [];
  const wordCount = 2;
  for (let i = 0; i < wordCount; i++) {
    sentence.push(getWord(sentence));
  };
  return sentence;
}

function write(points, sentence, prev) {
  document.getElementById("prev").innerHTML = prev;
  document.getElementById("current").innerHTML = sentence[0];
  document.getElementById("next").innerHTML = sentence[1];
  document.getElementById("score").innerHTML = points;
}