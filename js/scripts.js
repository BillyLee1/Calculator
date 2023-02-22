function add(a, b) {
  return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b) {

}

const num = document.querySelectorAll(".num");
let oper = document.querySelectorAll(".oper");
let equals = document.querySelector("#equals");

let cacheNum = "";
let cacheOper = "";

num.forEach((num) => {
  num.addEventListener("click", () => {
    cacheNum += num.textContent;
    console.log(cacheNum);
  });
});

oper.forEach((oper) => {
  oper.addEventListener("click", () => {
    if (oper.textContent === "+") {
      add()
    }
  })
})
