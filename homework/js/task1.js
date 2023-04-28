const firstNumber = parseInt(prompt('Enter first number'));
const secondNumber = parseInt(prompt('Enter second number'));
let result = [];

if(isNaN(firstNumber)||isNaN(secondNumber)||firstNumber>=secondNumber){
    alert('Invalid input data');
}
if(firstNumber+1===secondNumber){
    alert(`There are no numbers between ${firstNumber} and ${secondNumber}`);
}

for (let i=firstNumber+1; i<secondNumber; i++){
    console.log(i);
    result+=i + ' ';
}
alert(`First number: ${firstNumber}\n`+`Second number: ${secondNumber}\n`+`\n`+`Numbers between: ${result}`)
