'use strict';

const numbers = [1, 2, 3, 4, 5]
console.log(numbers);

const newNumbers = numbers.map(number => number * 2);
console.log(newNumbers);

const evenNums = numbers.filter((num) => {
    return num % 2 === 0
});
console.log(evenNums);

function onCount(element) {
  console.log(element);
}

numbers.forEach(onCount);

numbers.forEach(function (item){
    console.log(item * 4);
});