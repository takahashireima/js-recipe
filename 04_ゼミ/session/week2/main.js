const memo = document.getElementById("memo-Input")
const button = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

button.onclick = function () {
  //カード作成アンド削除
  cranddelcard()

  //console.log(memo.value)
  //console.dir(memo) //プロパティ確認
}

function cranddelcard() {
  const card = document.createElement("div")
  card.textContent = memo.value
  memocontainer.append(card)
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)
}
