function getWord() {
  word = wordList[Math.floor(Math.random() * wordList.length)];
  return word;
}

function generateSentence() {
  var sentence = [];
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
  var points = 0;
  document.getElementById("current").innerHTML = sentence[0];
  document.getElementById("next").innerHTML = sentence[1];
  document.getElementById("score").innerHTML = points;
  document.getElementById("input").onclick = "";
}

function processInput() {
  let current = document.getElementById("current").innerHTML;
  let next = document.getElementById("next").innerHTML;
  let points = document.getElementById("score").innerHTML;
  var sentence = [current, next];
  var input = (document.getElementById("input").value).toLowerCase()
  if (input == sentence[0]) {
    points++;
    document.getElementById("prev").innerHTML = sentence[0];
    sentence.shift();
    sentence.push(getWord());
    write(points, sentence);
    animate();
  }
}

function animate() {
  document.getElementById("input").classList.add("fade");
  document.getElementById("score").classList.add("fade");
  document.getElementById("input").addEventListener('animationend', () => {
    document.getElementById("input").classList.remove("fade");
    document.getElementById("input").value = "";
  });
  document.getElementById("score").addEventListener('animationend', () => {
    document.getElementById("score").classList.remove("fade");
  });
}