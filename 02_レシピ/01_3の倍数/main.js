/*const number = 24

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i + "!!!!")
  } else {
    console.log(i)
  }
}*/
const genkiFunction = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(`${i}!!!!!!`)
    } else {
      console.log(i)
    }
  }
}
genkiFunction(24)
