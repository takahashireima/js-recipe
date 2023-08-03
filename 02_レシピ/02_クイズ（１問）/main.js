const Choices_Container = document.getElementById("choices-container")
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "このアニメの主人公は誰？",
  image: "singeki.png",
  choices: [
    {
      text: "虎杖悠仁",
      feedback: "残念！呪術廻戦の主人公だよ！",
    },
    {
      text: "奴良リクオ",
      feedback: "残念！ぬらりひょんの孫の主人公だよ！",
    },
    {
      text: "ゴン＝フリークス",
      feedback: "残念！ハンターハンターの主人公だよ！",
    },
    {
      text: "エレン・イェーガー",
      feedback: "正解！早くアニメ来てほしいよね！映画かも。。？",
    },
    {
      text: "五条",
      feedback: "かっこよい。",
    },
  ],
}

const reloadQuiz = function () {
  const array = []

  quizText.textContent = "Q, " + quiz.text

  quizImage.src = "./images/" + quiz.image

  for (let i = 0; i < quiz.choices.length; i++) {
    const Button = document.createElement("button")
    Button.setAttribute("id", "choice-" + (i + 1))
    Choices_Container.appendChild(Button)
    Button.textContent = quiz.choices[i].text
    array.push(document.getElementById("choice-" + (i + 1)))
    array[i].onclick = function () {
      choose(i)
    }
  }
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

reloadQuiz()
