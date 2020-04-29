const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
let currentQuestion = {};
let acceptingAnswes = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];

let questions = [
{
    question: "_____ is the most basic building block of the web." ,
    choices1: "XHTML" ,
    choices2: "CSS",
    choices3: "HTML",
    choices4: "JavaScript",

    answer: 3
},

{
    question: "_________ is refering to the syntax used to create an alert using JavaScript.",
    choices1: "alert = ('Hello World')",
    choices2: "alert('Hello World')",
    choices3: "Alert('Hello World')",
    choices4: "alertBox('Hello World')",

    answer: 2

},

{
    question: "__________ is the programming language of HTML and the web.",
    choices1: "JavaScript",
    choices2: "Java",
    choices3: "JScript",
    choices4: "JavaS",

    answer: 1
},

{
    question: "HTML ______ the content of the web pages.",
    choices1: "Styles",
    choices2: "Changes",
    choices3: "Define",
    choices4: "Enchance",

    answer: 3
},

{
    question: "What are the 3 languages all developers must learn:",
    choices1: "HTML, CSS, JavaScript",
    choices2: "HTML, Style, Bootstrap",
    choices3: "HTML, Bootstrap, jQuery",
    choices4: "HTML, CSS, Bootstrap",

    answer: 1
},


    
]

// CONSTANTS


const correctQuestion = 2;
const maxQuestion = 5;

const startGame = function(){
 questionCounter = 0;
 score = 0;
 avaliableQuestions = [...questions];
 console.log(avaliableQuestions);
 getNewQuestion();
};

const getNewQuestion = function(){
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];
    question.innerText = currentQuestion.question;



    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choices" + number];
      });

      availableQuesions.splice(questionIndex, 1);
  console.log(availableQuesions);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    getNewQuestion();
  });
});

    // choices.forEach(choice => {
    //     const number = choices.dataset["number"];
    //     choice.innerText = currentQuestion["choices" + number];
    //  });
    
    // for (let i = 0; i < choices; i++){
    //     const number = choices.dataset['number'];
    //     choice.innerText = currentQuestion['choices' + number];
    // };

startGame();