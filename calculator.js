
let globalNumbersString = "";
let maxString = "";
document.addEventListener("keydown", handleKeyDown);

const miscelleneaousButtons = ["CE", "C", "&#x2190"];
const numericButtons = ["7", "8", "9", "4", "5", "6" ,"1", "2", "3", "0",".", "="];
const operatorButtons = ["/","*", "-", "+"];

displaymiscButtons();
displaynumericButtons();
displayOperatorButtons();


function handleKeyDown(event) {
  event.key === "1"
    ? displayNumber(event.key)
    : event.key === "2"
    ? displayNumber(event.key)
    : event.key === "3"
    ? displayNumber(event.key)
    : event.key === "4"
    ? displayNumber(event.key)
    : event.key === "5"
    ? displayNumber(event.key)
    : event.key === "6"
    ? displayNumber(event.key)
    : event.key === "7"
    ? displayNumber(event.key)
    : event.key === "8"
    ? displayNumber(event.key)
    : event.key === "9"
    ? displayNumber(event.key)
    : event.key === "0"
    ? displayNumber(event.key)
    : event.key === "/"
    ? displayNumber(event.key)
    : event.key === "*"
    ? displayNumber(event.key)
    : event.key === "-"
    ? displayNumber(event.key)
    : event.key === "+"
    ? displayNumber(event.key)
    : event.key === "."
    ? displayNumber(event.key)
    : event.key === "Enter"
    ? displayNumber(event.key)
    : event.key === "Backspace"
    ? displayNumber(event.key)
    : "";
}

function displayNumber(eventKey) {
  checkPressedKey(globalNumbersString, eventKey);
  document.querySelector("#js-main-number").innerHTML = globalNumbersString;
  checkmaxNumber(globalNumbersString, eventKey);
}

function checkmaxNumber(numbersString) {
  if (numbersString.length >= 15) {
    maxString = numbersString.slice(0, 15);
    document.querySelector("#js-main-number").innerHTML = maxString;
  }
}

function checkPressedKey(numbersString, eventKey) {
  if (eventKey !== "Enter" && eventKey !== "Backspace") {
    numbersString += eventKey;
    globalNumbersString = numbersString;
  } else if (eventKey === "Enter" && numbersString !== "") {
    document.querySelector(
      "#js-temporary-number"
    ).innerHTML = `${numbersString}=`;
    document.querySelector("#js-main-number").innerHTML = "";
    let result =
      eval(numbersString).toFixed(2) % 1 == 0
        ? Math.round(eval(numbersString))
        : eval(numbersString).toFixed(2);
    globalNumbersString = result;
  } else if (eventKey === "Backspace" && globalNumbersString !== "") {
    globalNumbersString = globalNumbersString.toString();
    globalNumbersString = globalNumbersString.substring(
      0,
      globalNumbersString.length - 1
    );
  }
}

function displaymiscButtons(){
  let buttonsElem = document.querySelector(".calculator-miscellenous-button");
  let buttonsHtml = "";
  miscelleneaousButtons.forEach((item)=>{
    buttonsHtml += `<div class="miscelleneaous-buttons">${item}</div>`
  })
  buttonsElem.innerHTML = buttonsHtml;
}

function displaynumericButtons(){
  let buttonsElem = document.querySelector(".calculator-numeric-buttons");
  let buttonsHtml = "";
  numericButtons.forEach((item)=>{
  buttonsHtml += `<div class="numeric-buttons">${item}</div>`
  })
  buttonsElem.innerHTML = buttonsHtml;
}

function displayOperatorButtons(){
  let buttonsElem = document.querySelector(".calculator-operator-buttons");
  let buttonsHtml = "";
  operatorButtons.forEach((item)=>{
  buttonsHtml += `<div class="operator-buttons">${item}</div>`
  })
  buttonsElem.innerHTML = buttonsHtml;
}

