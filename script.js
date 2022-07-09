/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var timeLeft = 60
var timer
var answers = ["WHITE CHOCOLATE MOCHA", "VANILLA LATTE", "CARAMEL MACCHIATO", "CAFFE MOCHA", "CAFFE LATTE", "AMERICANO", "CAPPUCCINO", "ESPRESSO", "DARK MOCHA FRAPPUCCINO", "CARAMEL MACCHIATO FRAPPUCCINO", "VANILLA CREME FRAPPUCCINO", "GREEN TEA FRAPPUCCINO", "CHOCOLATE CHIP FRAPPUCCINO", "WHITE CHOCOLATE MOCHA FRAPPUCCINO", "MOCHA FRAPPUCCINO", "JAVA CHIP FRAPPUCCINO", "ESPRESSO FRAPPUCCINO", "CARAMEL FRAPPUCCINO", "BREWED COFFEE", "VANILLA SWEET CREAM COLD BREW", "COLD BREW", "HOT CHOCOLATE", "GREEN TEA LATTE", "CHAI TEA LATTE", "EARL GREY TEA LATTE", "MINT BLEND TEA", "ENGLISH BREAKFAST TEA", "ICED SHAKEN GREEN TEA LEMONADE", "ICED SHAKEN BLACK TEA LEMONADE", "ICED SHAKEN HIBISCUS TEA LEMONADE"]
var userAnswers = []
var points = 0
var paused = false

function startQuiz(){
  document.getElementById("startButton").style.display = "none"
  document.getElementById("desc").style.display = "none"
  document.getElementById("quiz").style.display = "block"
  timer = setInterval(decreaseSeconds, 1000)
}

function replay(){
  location.reload()
}

function pause(){
  if(!paused){
    clearInterval(timer)
    paused = true
    document.getElementById("pause").style.display = "none"
    document.getElementById("play").style.display = "block"
    document.getElementById("answerField").disabled = true
  }
  else{
    timer = setInterval(decreaseSeconds, 1000)
    paused = false
    document.getElementById("play").style.display = "none"
    document.getElementById("pause").style.display = "block"
    document.getElementById("answerField").disabled = false
  }
}

function decreaseSeconds(){
  if(points == 30){
    endGame()
  }
  timeLeft--
  if(timeLeft > 10){
    document.getElementById("time").innerHTML = "0:" + timeLeft
  }
  if(timeLeft < 10){
    document.getElementById("time").innerHTML = "0:0" + timeLeft
  }
  if(timeLeft == 0){
    clearInterval(timer)
    endGame()
  }
}

function rightAnswer(){
  var answer = document.getElementById("answerField").value.toUpperCase()
  if(answers.includes(answer) && !userAnswers.includes(answer)){
    document.getElementById(answer).style.display = "inline-block"
    document.getElementById("answerField").value = ""
    userAnswers.push(answer)
    points++
  }
}

function endGame(){
  document.getElementById("quiz").style.display = "none"
  if(points == 30){
    document.getElementById("win").style.display = "block"
  }
  else{
    document.getElementById("timeUp").style.display = "block"
  }
  document.getElementById("userScore").innerHTML = points
  document.getElementById("userScore").style.display = "inline-block"
  document.getElementById("outOf").style.display = "inline-block"
  document.getElementById("addToLeaderboard").style.display = "block"
  document.getElementById("updateLeaderboard").style.display = "block"
  for (var i = 0; i < answers.length; i++){
      if(!userAnswers.includes(answers[i])){
        var revealedAnswer = document.getElementById(answers[i])
        revealedAnswer.style.opacity = "0.7"
        revealedAnswer.style.display = "inline-block"
      }
  }
}
  
function addUser(){
    document.getElementById("userUpdate").style.display = "none"
    document.getElementById("userAdd").style.display = "block"
}

function closeAddUser(){
    document.getElementById("userAdd").style.display = "none"
}

function updateUser(){
  document.getElementById("userAdd").style.display = "none"
  document.getElementById("userUpdate").style.display = "block"
}

function closeUpdateUser(){
  document.getElementById("userUpdate").style.display = "none"
}