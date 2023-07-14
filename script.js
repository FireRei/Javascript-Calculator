let num1 = '';
let num2 = '';
let temp = '';
let operator = '';
let results = 0;

function operate(a, b, operator) {
	console.log(a, b, operator)
	if (operator == 'add') {
		return add(a, b)
	} else if (operator == 'subtract') {
		return subtract(a, b)
	} else if (operator == 'multiply') {
		return multiply(a, b)
	} else if (operator == 'divide') {
		return divide(a, b)
	}
}

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
	if (a == 0 && b == 0) display.textContent = 'Stop it!';
	return a / b;
}

function reset() {
	num1 = '';
	num2 = '';
	operator = '';
	results = 0
	display.textContent = results;
} 

function number(e) {
	if (display.textContent == 0 || results != 0) {
		display.textContent = '';
		results = 0;
	}
	if (num2 == '' && operator == '') {
		e.target.textContent1 = '';
		display.textContent += e.target.textContent;
		num1 = display.textContent;
		console.log(num1)
	} else {
		if (num2 != '') {
			console.log(num1, temp)
			num1 = temp;
			console.log('test')
		}
		num2 = e.target.textContent; 
		display.textContent += num2;
	}
}

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach(button => button.addEventListener('click', number));

const operatorButtons = document.querySelectorAll('.operator').forEach(button => button.addEventListener('click', () => {
	display.textContent += button.textContent;
	if (num2 != '') {
		temp = operate(parseInt(num1), parseInt(num2), operator);
		console.log(temp);
	}
	operator = button.id
})
);

const resultsButton = document.querySelector('#result');
resultsButton.addEventListener('click', () => {
	results = operate(parseInt(num1), parseInt(num2), operator)
	operator = '';
	num1 = '';
	num2 = '';
	display.textContent = results
});

const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', () => reset());