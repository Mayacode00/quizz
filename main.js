const quizData = [
  {
    question:
      "In which part of your body would you find the cruciate ligament?",
    a: "Elbow",
    b: "Knee",
    c: "Ankle",
    d: "hinge",
    correct: "b",
  },
  {
    question:
      "What is the name of the main antagonist in the Shakespeare play Othello?",
    a: "Togo",
    b: "William",
    c: "Adam",
    d: "Iago",
    correct: "d",
  },
  {
    question:
      "What element is denoted by the chemical symbol Sn in the periodic table?",
    a: "Tin",
    b: "lead",
    c: "Potassium",
    d: "Titanium",
    correct: "a",
  },
  {
    question:
      "What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman?",
    a: "All the President's Men",
    b: "Carrie",
    c: "The Chase",
    d: "Inside Daisy Clover",
    correct: "a",
  },
  {
    question: "How many of Henry VIII's wives were called Catherine?",
    a: "4",
    b: "2",
    c: "3",
    d: "5",
    correct: "c",
  },
  {
    question: "What was the most popular girls name in the UK in 2019?",
    a: "Olivia",
    b: "Amelia",
    c: "Isla",
    d: "Ava",
    correct: "a",
  },
  {
    question:
      "Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr?",
    a: "Rodd Gilbert",
    b: "Simeon Amstell",
    c: "Rhod Gilbert",
    d: "Simon Amstell",
    correct: "d",
  },
  {
    question:
      "Which popular video game franchise has released games with the subtitles World At War and Black Ops?",
    a: "Halo Infinite",
    b: "Ghost of Tsushima",
    c: "Call of Duty",
    d: "Battlefield",
    correct: "c",
  },
  {
    question: "In what US State is the city Nashville?",
    a: "Tennessee",
    b: "Texas",
    c: "Alabama",
    d: "Alaska",
    correct: "a",
  },
  {
    question: "Which rock band was founded by Trent Reznor in 1988?",
    a: "Nirvana",
    b: "Nine Inch Nails",
    c: "R.E.M",
    d: "Soundgarden",
    correct: "b",
  },
  {
    question: "What is the currency of Denmark?",
    a: "Krone",
    b: "Balboas",
    c: "Ringglets",
    d: "Meticals",
    correct: "a",
  },
  {
    question: "Which Tennis Grand Slam is played on a clay surface?",
    a: "Tennis court",
    b: "Hangout Tennis",
    c: "The French Open (Roland Garros)",
    d: "The British standard",
    correct: "c",
  },
  {
    question: "In which European country would you find the Rijksmuseum?",
    a: "United Kingdom",
    b: "Russia",
    c: "Germany",
    d: "NetherLands",
    correct: "d",
  },
  {
    question:
      "How many films have Al Pacino and Robert De Niro appeared in together?",
    a: "Four",
    b: "Two",
    c: "Five",
    d: "Six",
    correct: "a",
  },
  {
    question:
      "What was the old name for a Snickers bar before it changed in 1990?",
    a: "Caramel",
    b: "Marathon",
    c: "Peanuts",
    d: "Nougat",
    correct: "b",
  },
];
const quiz = document.querySelector(".container");
const questions = document.querySelector(".question");
const answers = document.querySelectorAll(".answer");
const optionOne = document.querySelector("#label-a");
const optionTwo = document.querySelector("#label-b");
const optionThree = document.querySelector("#label-c");
const optionFour = document.querySelector("#label-d");
const nextQues = document.querySelector(".next");

let currentQuiz = 0;
let Score = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questions.innerText = currentQuizData.question;
  optionOne.innerText = currentQuizData.a;
  optionTwo.innerText = currentQuizData.b;
  optionThree.innerText = currentQuizData.c;
  optionFour.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answers.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
nextQues.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      Score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `Thanks for participating you answered ${Score} correctly out of ${quizData.length}
        <button class="reload" onclick= 'location.reload()'>Reload</button>`;
    }
  }
});