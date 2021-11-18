function operation() {
  var firstValue = parseFloat(document.getElementById("num1").value);
  var select = document.getElementById("options").value;
  var secondValue = parseFloat(document.getElementById("num2").value);


  var result = "";

  switch (select) {
    case '+':
      result = firstValue + secondValue;
      document.getElementById("print").innerHTML = result;
      break;

    case '-':
      result = firstValue - secondValue;
      document.getElementById("print").innerHTML = result;
      break;

    case '*':
      result = firstValue * secondValue;
      document.getElementById("print").innerHTML = result;
      break;

    case '/':
      result = firstValue / secondValue;
      document.getElementById("print").innerHTML = result;
      break;

    case '%':
      result = firstValue % secondValue;
      document.getElementById("print").innerHTML = result;
  }
}