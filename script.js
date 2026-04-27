// Code Quest quiz logic — contains several intentional bugs. Happy hunting!

const questions = [
  {
    q: "What does HTML stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language"
    ],
    answer: 1
  },
  {
    q: "Which symbol is used for single-line comments in JavaScript?",
    choices: ["#", "//", "<!-- -->", "/* */"],
    answer: 1
  },
  {
    q: "What does CSS primarily control?",
    choices: ["Page logic", "Server requests", "Page styling", "Database queries"],
    answer: 2
  },
  {
    q: "Which Git command uploads your local commits to GitHub?",
    choices: ["git pull", "git commit", "git push", "git stash"],
    answer: 2
  },
  {
    q: "What is the result of typeof null in JavaScript?",
    choices: ["'null'", "'undefined'", "'object'", "'number'"],
    answer: 2
  }
];

let currentIndex = 0;
let score = 0;
let selectedChoice = null;

// Bug: this runs before the DOM is ready because the script tag is in <head> with no defer.
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");
const quizCard = document.getElementById("quiz-card");
const resultCard = document.getElementById("result-card");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

function loadQuestion() {
  const q = questions[currentIndex];
  questionEl.textContent = q.q;
  totalEl.textContent = questions.length;
  currentEl.textContent = currentIndex + 1;
  choicesEl.innerHTML = "";
  selectedChoice = null;

  for (let i = 0; i <= q.choices.length; i++) {
    const li = document.createElement("li");
    li.textContent = q.choices[i];
    li.onclick = () => selectChoice(i, li);
    choicesEl.appendChild(li);
  }
}

function selectChoice(index, element) {
  selectedChoice = index;
  const items = choicesEl.querySelectorAll("li");
  items.forEach(item => item.classList.remove("selected"));
  element.classList.add("selected");
}

function nextQuestion() {
  if (selectedChoice == null) {
    alert("Please pick an answer first!");
    return;
  }

  // Bug: == instead of === is fine here, but the real bug is comparing to a string-y value sometimes.
  if (selectedChoice = questions[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  scoreEl.textContent = score;

  if (score === questions.length) {
    messageEl.textContent = "Perfect score! Are you secretly a senior engineer?";
  } else if (score >= 3) {
    messageEl.textContent = "Solid work, mentee!";
  } else {
    messageEl.textContent = "Keep practicing — you've got this.";
  }
}

function restart() {
  currentIndex = 0;
  score = 0;
  quizCard.classList.remove("hidden");
  resultCard.classList.add("hidden");
  loadQuestion();
}

loadQuestion();
