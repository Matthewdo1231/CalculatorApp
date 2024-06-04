document.addEventListener("keydown", handleKeyDown);
let globalNumbersString = "";
let maxString = "";

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
  console.log(eventKey);
  if (eventKey !== "Enter") {
    numbersString += eventKey;
    globalNumbersString = numbersString;
  } else if (eventKey === "Enter") {
    globalNumbersString = eval(numbersString).toFixed(2);
  }
}
