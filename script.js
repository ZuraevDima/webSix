function task1() {
    alert("Кнопка была нажата!");
  }
  
  function task2() {
    var input = document.getElementById('myInput');
    input.value = "Новый текст!";
  }
  
  function task3() {
    var input = document.getElementById('myyInput').value;
    alert(input);
  }
  
  function task4() {
    alert(Math.pow(document.getElementById('myyInputt').value, 2))
  }
  
  function task5() {
    var temp = document.getElementById('input51').value; 
    document.getElementById('input51').value = document.getElementById('input52').value; 
    document.getElementById('input52').value = temp;
  }
  
  function task6() {
    this.innerHTML = 'Текст кнопки поменялся';
  }
  
  function task7() {
    document.getElementById('Inputs').style.color = 'red'
  }
  
  function task8() {
    document.getElementById('Innput').disabled = true;
  }
  
  function task81() {
    document.getElementById('Innput').disabled = false;
  }
  
  
  function task12() {
    document.getElementById('myImage').src = 'new.jpg'
  }
   
  var clickCount = 0;
  function task16() {
    clickCount++;
    document.getElementById("clickCount").innerHTML = "Количество нажатий: " + clickCount;
  }
     
  
  function task18() {
      document.getElementById('hide').style.display = 'none';
  }
  
  function task20() {
    function calculate(num1, operator, num2) {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if (num2 !== 0) {
            return num1 / num2;
          } else {
            return 'Ошибка: Деление на ноль невозможно!';
          }
        default:
          return 'Ошибка: Неверный оператор!';
      }
    }
    const number1 = parseFloat(prompt('Введите первое число:'));
    const operator = prompt('Введите оператор (+, -, *, /):');
    const number2 = parseFloat(prompt('Введите второе число:'));
    const result = calculate(number1, operator, number2);
    
    alert(`Результат: ${result}`);
  }