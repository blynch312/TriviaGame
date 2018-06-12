var questions = [
  {
    question: "How many teams were originally established in the NHL?",
    answer: {
      a: "Ten",
      b: "Six",
      c: "Eight",
      d: "Sixteen"
    },
    correctAnswer: "b"
  },
  {
    question: "What year was the NHL founded?",
    answer: {
      a: "1941",
      b: "1921",
      c: "1917",
      d: "1938"
    },
    correctAnswer: "c"
  },
  {
    question: "Who hold the record for the most goals scored in the NHL?",
    answer: {
      a: "Bobby Orr",
      b: "Ogie Ogelthorpe",
      c: "Wayne Gretzky",
      d: "Jaomir Jagr"
    },
    correctAnswer: "c"
  },
  {
    question: "Who was the first goalie to score a goal in the NHL?",
    answer: {
      a: "Ron Hextall",
      b: "Patrick Roy",
      c: "Ed Belfour",
      d: "Martin Brodeur"
    },
    correctAnswer: "a"
  },
  {
    question: "Which team has the most Stanley Cup wins?",
    answer: {
      a: "Toronto Maple Leafs",
      b: "Philadelphia Flyers",
      c: "Detroit Red Wings",
      d: "Montreal Canadiens"
    },
    correctAnswer: "d"
  }
];

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

function buildQuiz() {
  const output = [];
  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];
    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answer[letter]}
         </label>`
      );
    }

    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}
function showResults() {}
buildQuiz();
submitButton.addEventListener("click", showResults);

var score = 0;
var count = 10;

var countdown = setTimeout(function() {
  console.log("Times Up!");
  clearTimeout(infinity);
  $("#container").hide();
}, 10000);
var infinity = setInterval(function() {
  count--;
  console.log(count);
}, 1000);
