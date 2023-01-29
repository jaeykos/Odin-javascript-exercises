const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numArr) {
  let total = 0 
	 for (var i in numArr){
    total += numArr[i];
   }
   return total;
};

const multiply = function(numArr) {

  let total = 1 
  for (var i in numArr){
   total =total * numArr[i];
  }
  return total;

};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	if (num === 0){return 1}

  product = 1
  for (var i = num; i > 0; i--){
    product = product * i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
