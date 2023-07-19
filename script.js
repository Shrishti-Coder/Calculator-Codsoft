
   
  function deleteD(display)  {
   let displayValue = document.getElementById('display').value;
 let newDisplayValue = displayValue.slice(0, -1);
 document.getElementById('display').value = newDisplayValue;
}

function appendTo(value) {

 document.getElementById('display').value += value;
 
}
function calculateResult() {
 let displayValue = document.getElementById('display').value;
 let result = eval(displayValue);
 document.getElementById('result').value = result;
}
function clearDisplay() {
 document.getElementById('display').value = '';
 document.getElementById('result').value = '';
}
