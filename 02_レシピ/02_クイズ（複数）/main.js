const Choices_Container = document.getElementById("choices-container")
const quiz_Container = document.getElementById("quiz-container")
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")

let num = 0
let nextnum = 0

const quizzes = [
  {
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
  },
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
]

const reloadQuiz = function (quiz_num) {
  let array = []
  const quiz = quizzes[quiz_num]
  const childlen = quiz.choices.length
  const length = quiz_num

  quizText.textContent = "Q, " + quiz.text

  quizImage.src = "./images/" + quiz.image

  for (let i = 0; i < quiz.choices.length; i++) {
    const Button = document.createElement("button")
    Button.setAttribute("id", "choice-" + (i + 1))
    Choices_Container.appendChild(Button)
    Button.textContent = quiz.choices[i].text
    array.push(document.getElementById("choice-" + (i + 1)))
    array[i].onclick = function () {
      choose(i, length)
      Answer(i, childlen)
    }
  }
}

const choose = function (choiceNumber, num) {
  const choice = quizzes[num].choices[choiceNumber]
  feedback.textContent = choice.feedback
}

const Answer = function (choices_num, childlen) {
  const choice = quizzes[num].choices[choices_num]

  if (choice.feedback.includes("正解") && nextnum == 0) {
    const nextquiz = document.createElement("button")
    nextquiz.textContent = "次の問題へ"
    nextquiz.setAttribute("id", "nextQuiz")
    quiz_Container.appendChild(nextquiz)
    nextnum += 1
  }

  const next = document.getElementById("nextQuiz")
  next.onclick = function () {
    num += 1
    reloadQuiz(num)
    next.remove()
    // feedback.textContent = ""
    for (let i = 0; i < childlen; i++) {
      Choices_Container.removeChild(Choices_Container.firstChild)
    }
  }
}

reloadQuiz(0)
