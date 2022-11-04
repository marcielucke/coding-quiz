
const quizContainer = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEls = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const beginQuiz = document.getElementById('begin');
const myQuestions = [
    {
        question: "Which is the bones of a website?",
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            correct: "a",

    
       

    } ,
    {
        question: "Which one of these is a JavaScript package manager?",
          a: "Node.js",
          b: "TypeScript",
          c: "npm",
          correct: "c"
        
        
      } ,
      {
        question: "Which tool can you use to ensure code quality?",
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
          d: "ESLint",
          correct: "d"
      
      },
    ]

    let currentQuestion = 0
    let score = 0

    buildQuiz()

    function buildQuiz() {
        deselectAnswers()

        const currentQuestionData = questionData[currentQuestion]

        questionEls.innerText = currentQuestionData.question
    }
        
        
