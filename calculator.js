document.addEventListener("keydown", handleKeyDown);
let numbersString = "";
let maxString = "";

function handleKeyDown(event){
  
  event.key === "1" ? displayNumber(event.key) :
  event.key === "2" ? displayNumber(event.key) :
  event.key === "3" ? displayNumber(event.key) :
  event.key === "4" ? displayNumber(event.key) :
  event.key === "5" ? displayNumber(event.key) :
  event.key === "6" ? displayNumber(event.key) :
  event.key === "7" ? displayNumber(event.key) :
  event.key === "8" ? displayNumber(event.key) :
  event.key === "9" ? displayNumber(event.key) :
  event.key === "0" ? displayNumber(event.key) :
  event.key === "/" ? displayNumber(event.key) :
  event.key === "*" ? displayNumber(event.key) :
  event.key === "-" ? displayNumber(event.key) :
  event.key === "+" ? displayNumber(event.key) :
  event.key === "." ? displayNumber(event.key) :
  event.key === "Enter" ? displayNumber(event.key) :"";
}

function displayNumber(eventKey){
    numbersString += eventKey;
    document.querySelector('#js-main-number').innerHTML = numbersString;
    checkmaxNumber(numbersString);
}

function checkmaxNumber(numbersString){
    if(numbersString.length >= 15){
       maxString = numbersString.slice(0,15)
       document.querySelector('#js-main-number').innerHTML = maxString;
    }
}