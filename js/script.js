// 1
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

// 2
for (let i = 1; i <= 10; i++) {
  console.log(i * 10 + " dollars = " + i * 10 * 27 + " hrn");
}

// 3
let n = 50;
for (let i = 1; i <= 100; i++) {
  if (i * i <= n) {
    console.log(i);
  }
}

// 4
let n = 23;
let isPrime = true;

if (n <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(n + " is prime.");
} else {
  console.log(n + " is not prime.");
}

// 5
const n = 9;
let canGetByPowerOf3 = false;

for (let i = 0; i <= n; i++) {
  let power = Math.pow(3, i);
  if (power === n) {
    canGetByPowerOf3 = true;
    break;
  }
  if (power > n) {
    break;
  }
}

if (canGetByPowerOf3) {
  console.log(`${n} can get by power Of 3`);
} else {
  console.log(`${n} can't get by power Of 3`);
}
