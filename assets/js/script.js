// GIVEN I am taking a code quiz
// variables accessing html elements
var main = document.body.children[1];
var h1El = document.body.children[1].children[0];
var infoEl = document.body.children[1].children[1];
var buttonDiv = document.body.children[1].children[2];
var navBar = document.body.children[0].children[0];

// create View Highscores in nav
var highEl = document.body.children[0].children[0].children[0];
var hsButton = document.createElement('button');
hsButton.textContent = "View Highscores"
hsButton.setAttribute("type", "button")
hsButton.setAttribute("id", "view-highscores")
highEl.appendChild(hsButton);
// create addEventListener for when clicked
hsButton.addEventListener("click", function () {
  localStorage.setItem("scores", JSON.stringify(scores));
  highscores()
  navBar.remove()
})

// create start quiz button
var startButton = document.createElement('button');
startButton.textContent = "Start Quiz";
startButton.setAttribute("class", "start-button");
buttonDiv.appendChild(startButton);

// arrays holding scores and users final time
var scores = [];
var userScore = [];

// objects for each question containing arrays
var q1 = {
  question: "Commonly used data types DO NOT include: ",
  answer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
}

var q2 = {
  question: "The condition in an if / else statement is enclosed within ____.",
  answer: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
}

var q3 = {
  question: "Arrays in JavaScript can be used to store ____.",
  answer: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
}

var q4 = {
  question: "String values must be enclosed within ____ when being assigned to variables.",
  answer: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
}

var q5 = {
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  answer: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
}

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
var timerEl = document.querySelector('.timer');
var timeLeft = 60;

startButton.addEventListener("click", function () {
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var countdown = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(countdown);
      displayScore()
    }
  }, 1000);
  firstQuestion();
});

// function for first question
function firstQuestion() {
  // remove infoEl and startButton
  infoEl.remove()
  startButton.remove()

  // replace h1 with first question
  var questionH1 = document.createElement('h1');
  questionH1.textContent = q1.question;
  h1El.parentNode.replaceChild(questionH1, h1El);

  // create each button with question 1 answers
  var firstButton = document.createElement("button");
  firstButton.textContent = q1.answer[0];
  firstButton.setAttribute("id", "button1");
  firstButton.setAttribute("class", "buttons");
  firstButton.setAttribute("type", "button");
  buttonDiv.appendChild(firstButton);
  var secondButton = document.createElement("button")
  secondButton.textContent = q1.answer[1];
  secondButton.setAttribute("id", "button2");
  secondButton.setAttribute("class", "buttons");
  secondButton.setAttribute("type", "button");
  buttonDiv.appendChild(secondButton);
  var thirdButton = document.createElement("button")
  thirdButton.textContent = q1.answer[2];
  thirdButton.setAttribute("id", "button3");
  thirdButton.setAttribute("class", "buttons");
  thirdButton.setAttribute("type", "button");
  buttonDiv.appendChild(thirdButton);
  var fourthButton = document.createElement("button")
  fourthButton.textContent = q1.answer[3];
  fourthButton.setAttribute("id", "button4");
  fourthButton.setAttribute("class", "buttons");
  fourthButton.setAttribute("type", "button");
  buttonDiv.appendChild(fourthButton);

  // create an eventlistener for each button
  firstButton.addEventListener("click", function () {
    // // WHEN I answer a question incorrectly
// // THEN time is subtracted from the clock
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);
// // WHEN I answer a question
// // THEN I am presented with another question
    setTimeout(function () {
      secondQuestion()
    }, 900);

  })
  secondButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      secondQuestion()
    }, 900);

  })
  thirdButton.addEventListener("click", function () {
    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var correctA = document.createElement('p');
    correctA.textContent = "Correct!";
    correctA.setAttribute("class", "notif");
    correctA.setAttribute("id", "correct");
    main.appendChild(correctA);

    setTimeout(function () {
      secondQuestion()
    }, 900);

  })
  fourthButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      secondQuestion()
    }, 900);

  })
}

// function for second question
function secondQuestion() {
  // clear main element
  main.innerHTML = "";

  // replace h1 with second question
  var questionH1 = document.createElement('h1');
  questionH1.textContent = q2.question;
  main.appendChild(questionH1);

  // create new div for buttons
  var newBtnDiv = document.createElement('div');
  main.appendChild(newBtnDiv);

  // create each button with question 2 answers
  var firstButton = document.createElement("button");
  firstButton.textContent = q2.answer[0];
  firstButton.setAttribute("id", "button1");
  firstButton.setAttribute("class", "buttons");
  firstButton.setAttribute("type", "button");
  newBtnDiv.appendChild(firstButton);
  var secondButton = document.createElement("button")
  secondButton.textContent = q2.answer[1];
  secondButton.setAttribute("id", "button2");
  secondButton.setAttribute("class", "buttons");
  secondButton.setAttribute("type", "button");
  newBtnDiv.appendChild(secondButton);
  var thirdButton = document.createElement("button")
  thirdButton.textContent = q2.answer[2];
  thirdButton.setAttribute("id", "button3");
  thirdButton.setAttribute("class", "buttons");
  thirdButton.setAttribute("type", "button");
  newBtnDiv.appendChild(thirdButton);
  var fourthButton = document.createElement("button")
  fourthButton.textContent = q2.answer[3];
  fourthButton.setAttribute("id", "button4");
  fourthButton.setAttribute("class", "buttons");
  fourthButton.setAttribute("type", "button");
  newBtnDiv.appendChild(fourthButton);

  // create an eventlistener for each button
  firstButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      thirdQuestion()
    }, 900);

  })
  secondButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      thirdQuestion()
    }, 900);

  })
  thirdButton.addEventListener("click", function () {
    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var correctA = document.createElement('p');
    correctA.textContent = "Correct!";
    correctA.setAttribute("class", "notif");
    correctA.setAttribute("id", "correct");
    main.appendChild(correctA);
    setTimeout(function () {
      thirdQuestion()
    }, 900);

  })
  fourthButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      thirdQuestion()
    }, 900);

  })
}

// function for third question
function thirdQuestion() {
  // clear main element
  main.innerHTML = "";

  // replace h1 with third question
  var questionH1 = document.createElement('h1');
  questionH1.textContent = q3.question;
  main.appendChild(questionH1);

  // create new div for buttons
  var newBtnDiv = document.createElement('div');
  main.appendChild(newBtnDiv);

  // create each button with question 3 answers
  var firstButton = document.createElement("button");
  firstButton.textContent = q3.answer[0];
  firstButton.setAttribute("id", "button1");
  firstButton.setAttribute("class", "buttons");
  firstButton.setAttribute("type", "button");
  newBtnDiv.appendChild(firstButton);
  var secondButton = document.createElement("button")
  secondButton.textContent = q3.answer[1];
  secondButton.setAttribute("id", "button2");
  secondButton.setAttribute("class", "buttons");
  secondButton.setAttribute("type", "button");
  newBtnDiv.appendChild(secondButton);
  var thirdButton = document.createElement("button")
  thirdButton.textContent = q3.answer[2];
  thirdButton.setAttribute("id", "button3");
  thirdButton.setAttribute("class", "buttons");
  thirdButton.setAttribute("type", "button");
  newBtnDiv.appendChild(thirdButton);
  var fourthButton = document.createElement("button")
  fourthButton.textContent = q3.answer[3];
  fourthButton.setAttribute("id", "button4");
  fourthButton.setAttribute("class", "buttons");
  fourthButton.setAttribute("type", "button");
  newBtnDiv.appendChild(fourthButton);

  // create an eventlistener for each button
  firstButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      fourthQuestion()
    }, 900);

  })
  secondButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      fourthQuestion()
    }, 900);

  })
  thirdButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      fourthQuestion()
    }, 900);

  })
  fourthButton.addEventListener("click", function () {
    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var correctA = document.createElement('p');
    correctA.textContent = "Correct!";
    correctA.setAttribute("class", "notif");
    correctA.setAttribute("id", "correct");
    main.appendChild(correctA);
    setTimeout(function () {
      fourthQuestion()
    }, 900);
  })

}

// function for fourth question
function fourthQuestion() {
  // clear main element
  main.innerHTML = "";

  // replace h1 with fourth question
  var questionH1 = document.createElement('h1');
  questionH1.textContent = q4.question;
  main.appendChild(questionH1);

  // create new div for buttons
  var newBtnDiv = document.createElement('div');
  main.appendChild(newBtnDiv);

  // create each button with question 4 answers
  var firstButton = document.createElement("button");
  firstButton.textContent = q4.answer[0];
  firstButton.setAttribute("id", "button1");
  firstButton.setAttribute("class", "buttons");
  firstButton.setAttribute("type", "button");
  newBtnDiv.appendChild(firstButton);
  var secondButton = document.createElement("button")
  secondButton.textContent = q4.answer[1];
  secondButton.setAttribute("id", "button2");
  secondButton.setAttribute("class", "buttons");
  secondButton.setAttribute("type", "button");
  newBtnDiv.appendChild(secondButton);
  var thirdButton = document.createElement("button")
  thirdButton.textContent = q4.answer[2];
  thirdButton.setAttribute("id", "button3");
  thirdButton.setAttribute("class", "buttons");
  thirdButton.setAttribute("type", "button");
  newBtnDiv.appendChild(thirdButton);
  var fourthButton = document.createElement("button")
  fourthButton.textContent = q4.answer[3];
  fourthButton.setAttribute("id", "button4");
  fourthButton.setAttribute("class", "buttons");
  fourthButton.setAttribute("type", "button");
  newBtnDiv.appendChild(fourthButton);

  // create an eventlistener for each button
  firstButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      fifthQuestion()
    }, 900);

  })
  secondButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      fifthQuestion()
    }, 900);

  })
  thirdButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      fifthQuestion()
    }, 900);

  })
  fourthButton.addEventListener("click", function () {
    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var correctA = document.createElement('p');
    correctA.textContent = "Correct!";
    correctA.setAttribute("class", "notif");
    correctA.setAttribute("id", "correct");
    main.appendChild(correctA);
    setTimeout(function () {
      fifthQuestion()
    }, 900);
  })

}

// function for fifth question
function fifthQuestion() {
  // clear main element
  main.innerHTML = "";

  // add new h1 element for fifth question
  var questionH1 = document.createElement('h1');
  questionH1.textContent = q5.question;
  main.appendChild(questionH1);

  // create new div for buttons
  var newBtnDiv = document.createElement('div');
  main.appendChild(newBtnDiv);

  // create each button with question 5 answers
  var firstButton = document.createElement("button");
  firstButton.textContent = q5.answer[0];
  firstButton.setAttribute("id", "button1");
  firstButton.setAttribute("class", "buttons");
  firstButton.setAttribute("type", "button");
  newBtnDiv.appendChild(firstButton);
  var secondButton = document.createElement("button")
  secondButton.textContent = q5.answer[1];
  secondButton.setAttribute("id", "button2");
  secondButton.setAttribute("class", "buttons");
  secondButton.setAttribute("type", "button");
  newBtnDiv.appendChild(secondButton);
  var thirdButton = document.createElement("button")
  thirdButton.textContent = q5.answer[2];
  thirdButton.setAttribute("id", "button3");
  thirdButton.setAttribute("class", "buttons");
  thirdButton.setAttribute("type", "button");
  newBtnDiv.appendChild(thirdButton);
  var fourthButton = document.createElement("button")
  fourthButton.textContent = q5.answer[3];
  fourthButton.setAttribute("id", "button4");
  fourthButton.setAttribute("class", "buttons");
  fourthButton.setAttribute("type", "button");
  newBtnDiv.appendChild(fourthButton);

  // create an eventlistener for each button
  firstButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      // store the final time
      userScore.push(timeLeft);
      displayScore()
    }, 900);

  })
  secondButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      userScore.push(timeLeft);
      displayScore()
    }, 900);

  })
  thirdButton.addEventListener("click", function () {
    timeLeft -= 5;
    timerEl.textContent = timeLeft;

    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var incorrectA = document.createElement('p');
    incorrectA.textContent = "Incorrect!";
    incorrectA.setAttribute("class", "notif");
    incorrectA.setAttribute("id", "incorrect");
    main.appendChild(incorrectA);

    setTimeout(function () {
      userScore.push(timeLeft);
      displayScore()
    }, 900);

  })
  fourthButton.addEventListener("click", function () {
    var hrBreak = document.createElement('hr');
    main.appendChild(hrBreak);

    var correctA = document.createElement('p');
    correctA.textContent = "Correct!";
    correctA.setAttribute("class", "notif");
    correctA.setAttribute("id", "correct");
    main.appendChild(correctA);



    setTimeout(function () {
      userScore.push(timeLeft);
      displayScore()
    }, 900);
  })

}

// local storage for highscores
if (JSON.parse(localStorage.getItem('scores')) !== null) {
  scores = JSON.parse(localStorage.getItem("scores"));
}

// // WHEN all questions are answered or the timer reaches 0
// // THEN the game is over
// display final score
function displayScore() {
  // clear main element
  main.innerHTML = "";
  // remove navbar
  navBar.remove();

  // add new h1 element for question
  var questionH1 = document.createElement('h2');
  questionH1.setAttribute("id", "allDone");
  questionH1.textContent = "All done!";
  main.appendChild(questionH1);

  // add p for users score
  var finalScore = document.createElement('h3');
  finalScore.textContent = "Your final score is: " + timeLeft;
  main.appendChild(finalScore);

  addInitials();
}

// // WHEN the game is over
// // THEN I can save my initials and my score
function addInitials() {
  // create new div for button
  var newBtnDiv = document.createElement('div');
  main.appendChild(newBtnDiv);

  // create p for instructions before input
  var inputP = document.createElement('p');
  inputP.textContent = "Enter initials: ";
  newBtnDiv.appendChild(inputP)

  // input box
  var initialInput = document.createElement("input");
  initialInput.setAttribute("type", "text");
  initialInput.setAttribute("placeholder", "Your Initials...");
  newBtnDiv.appendChild(initialInput)
  // submit button
  var submit = document.createElement("button")
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "submit");
  submit.setAttribute("class", "submit-button");
  submit.textContent = "Submit"
  newBtnDiv.appendChild(submit)
  // when submit is clicked,
  submit.addEventListener("click", function () {
    // putting userInput into local storage
    var userInputs = initialInput.value + " - " + userScore;
    console.log(userInputs)
    scores.push(userInputs)
    localStorage.setItem("scores", JSON.stringify(scores));

    highscores()
  })
}

function highscores() {
  main.innerHTML = "";

  // create h2 for highscores
  var questionH1 = document.createElement('h2');
  questionH1.setAttribute("id", "allDone");
  questionH1.textContent = "Highscores!";
  main.appendChild(questionH1);

  // create ol element for li of stored scores
  var olEl = document.createElement('ol');
  main.appendChild(olEl);

  // for loop for each stored score
  for (i = 0; i < scores.length; i++) {
    var showScores = scores[i];
    var liEl = document.createElement("li");
    liEl.textContent = showScores;
    olEl.appendChild(liEl);
  }

  // create new div for button
  var newBtnDiv = document.createElement('div');
  main.appendChild(newBtnDiv);

  // create backButton
  var backButton = document.createElement('button');
  backButton.setAttribute("type", "button");
  backButton.setAttribute("class", "hs-buttons");
  backButton.textContent = "Go Back";
  newBtnDiv.appendChild(backButton);

  // addEventListener for when it's clicked and resets game
  backButton.addEventListener("click", function () {
    location.reload();
  })

  // create clear highscores button
  var clearHS = document.createElement('button');
  clearHS.setAttribute("type", "button");
  clearHS.setAttribute("class", "hs-buttons");
  clearHS.textContent = "Clear Highscores";
  newBtnDiv.appendChild(clearHS);

  // addEventListener for when it's clicked and resets game
  clearHS.addEventListener("click", function () {
    localStorage.clear();
    olEl.remove()
  })
}