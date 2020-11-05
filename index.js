function Calculate(operator){
var number1 = parseInt(document.getElementById('num1').value);
var number2 = parseInt(document.getElementById('num2').value);

var Result = 0;

if(operator == '+'){
Result=number1+number2;

  }else if(operator == '-'){
 Result=number1-number2;

  }else if(operator == '*'){
   Result=number1*number2;

  }else if(operator == '/'){
   Result=number1/number2;
  }
  document.getElementById('Result').innerHTML = Result;

}