const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

let memos = []

addButton.onclick = function () {
  memos.push(memoInput.value)

  memoContainer.textContent = ""

  for (let i = 0; i < memos.length; i++) {
    const div = document.createElement("div")
    div.textContent = memos[i]
    memoContainer.append(div)

    console.log(memos[i])
  }

  // 取得した内容をDOMに反映する
  // 1. div をJavaScriptで新しく作る

  // 2. 作成したdivのtextContentにinputに入力した内容を入れる

  // 3. 作成したdivを<div id="memo-container"></div>の子要素に追加する
}
