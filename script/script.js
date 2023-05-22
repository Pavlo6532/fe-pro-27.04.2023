function getPow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree > 0) {
    return num * getPow(num, degree - 1);
  } else {
    return 1 / getPow(num, -degree);
  }
}

const result = getPow(5, 3);
console.log(result);
