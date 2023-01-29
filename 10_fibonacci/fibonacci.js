const fibonacci = function(num) {
if (num <=0 ){return "OOPS"}
if (num == 1 || num == 2){return 1}

tempNum = 0
trailNum = 1
currentNum = 1

for (i = 3; i <= num; i++){
    tempNum = currentNum
    currentNum = currentNum+trailNum
    trailNum = tempNum
}

return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
