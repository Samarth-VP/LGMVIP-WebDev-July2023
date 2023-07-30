document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("inputBox");
  const clearBtns = document.querySelectorAll(".clear");
  const numberBtns = document.querySelectorAll(
    ".calculator button:not(.clear):not(.operator)"
  );
  const operatorBtns = document.querySelectorAll(".operator");
  const eqlBtn = document.querySelector(".eqlBtn");

  let currentInput = "";
  let previousInput = "";
  let operator = null;

  function updateInputBox() {
    inputBox.value = currentInput || "0";
  }

  numberBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      currentInput += btn.textContent;
      removeOperatorHighlight();
      updateInputBox();
    });
  });

  operatorBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (currentInput !== "") {
        if (previousInput !== "") {
          calculate();
        } else {
          previousInput = currentInput;
          currentInput = "";
        }
        operator = btn.textContent;
        highlightOperator(btn);
      }
    });
  });

  eqlBtn.addEventListener("click", function () {
    calculate();
    previousInput = "";
    removeOperatorHighlight();
  });

  clearBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.textContent === "AC") {
        currentInput = "";
        previousInput = "";
        operator = null;
        removeOperatorHighlight();
      } else if (btn.textContent === "DEL") {
        currentInput = currentInput.slice(0, -1);
        removeOperatorHighlight();
      }
      updateInputBox();
    });
  });

  function calculate() {
    if (currentInput === "" || previousInput === "" || operator === null)
      return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "%":
        result = num1 % num2;
        break;
      default:
        return;
    }

    currentInput = result.toString();
    updateInputBox();
  }

  function highlightOperator(selectedBtn) {
    operatorBtns.forEach((btn) => {
      if (btn === selectedBtn) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function removeOperatorHighlight() {
    operatorBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
  }
});
