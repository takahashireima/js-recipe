const memoInput = document.getElementById("memo-Input")
const addButton = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

addButton.onclick = function () {
  const div = createElement("div", memoInput.value, memocontainer)
  const deleteButton = createElement("button", "削除", div)
  deleteButton.onclick = function () {
    div.remove()
  }
  memoInput.value = ""
}

const createElement = function (element, textContent, containerElement) {
  const div = document.createElement(element)
  div.textContent = textContent
  containerElement.append(div)
  return div
}
