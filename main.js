const output = document.querySelector(".outpot");
const result = document.querySelector(".result");
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", calculate);
});
let flag = true;
function calculate() {
  let numberText = this.innerText;

  if (numberText === "AC") {
    output.innerText = "";
    result.innerText = "0";
    result.style.animation=""
    output.style.animation=""
    flag = true;
    return;
  } else if (numberText === "DEL") {
    if (output.textContent[output.textContent.length - 1] === ".") {
      flag = true;
    }
    output.textContent = output.textContent.substring(
      0,
      output.textContent.length - 1
    );
  } else if (numberText === "=") {
    if(!eval()) {
        result.innerText="you dumb";
    }
    result.innerText = eval(output.innerText);
    result.style.animation="big 0.5s ease-in-out"
    output.style.animation="small 0.5s ease-in-out"
    result.style.animationFillMode="forwards"
    output.style.animationFillMode="forwards"
    
  } else {
    console.log(flag);
    if (numberText === "." && flag) {
      output.textContent += numberText;
      flag = false;
    } else if (
      numberText === "+" ||
      numberText === "-" ||
      numberText === "/" ||
      numberText === "*"
    ) {
      flag = true;
      output.textContent += numberText;
    } else if (numberText !== ".") {
      output.textContent += numberText;
    }
  }
}
