function getSum() {
  let sum = 0;
  return function (num) {
    sum += num;
    return sum;
  };
}

let sumValue = getSum();
console.log(sumValue(3));
console.log(sumValue(5));
console.log(sumValue(20));
