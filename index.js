let selectedOperator = null;

function setOperator(op) {
  selectedOperator = op;
  alert(`Operator selected: ${op}`);
}

function calculate() {
  const num1 = parseFloat(document.getElementById("firstNumber").value);
  const num2 = parseFloat(document.getElementById("secondNumber").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter both numbers!";
  } else if (!selectedOperator) {
    result = "Please select an operator!";
  } else {
    if (selectedOperator === "+") result = num1 + num2;
    else if (selectedOperator === "-") result = num1 - num2;
    else if (selectedOperator === "*") result = num1 * num2;
  }

  document.getElementById("result").innerText = "Result: " + result;
}
