const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const Authorsec = document.getElementById('Author-sec')
const texts = document.getElementById('text')
const btn_search = document.querySelector("#search")
const btn_reset = document.querySelector("#reset")
let click = "false"

btn_toggle.onclick = () => {
  // your code here
  if(click == "false"){
  const h2 = document.createElement('h2')
  h2.innerHTML = 630610770 + length.value
  const btn = document.createElement('button')
  btn.addEventListener('click',() => {
    Authorsec.removeChild(h2)
    Authorsec.removeChild(btn)
    click = "false"
  })
  btn.innerHTML = 'Display Author'
  Authorsec.append(h2)
  Authorsec.append(btn)
  click = "true"
  }
}

// more codes for Search and Reset buttons here
btn_search.onclick = () => {
  texts.style.background = color.value
  const myArr = texts.split(" ")
  const out = myArr.fliter(text => text.length > length).map(text => text.style.background = color.value)
  texts.innerHTML = out
}

btn_reset.onclick = () => {
  texts.style.background = null
  length.value = 5
  color.value = "#FF0000"
}
