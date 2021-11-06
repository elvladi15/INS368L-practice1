const isEven = (n) => {
  return n % 2 === 0;
};
const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const printDigits = (n) => {
  let digits = [];
  while (n !== 0) {
    digit = 0;
    while (n % 10 !== 0) {
      n -= 1;
      digit++;
    }
    digits.push(digit);
    n /= 10;
  }
  return digits.reverse().join(",");
};
function printFibonacci() {
  const fibonacciSeq = [0, 1];
  console.log(`1. 0 | Even | Prime | Digits: 0`);
  console.log(`2. 1 | Odd | Prime | Digits: 1`);

  for (let i = 3; i <= 50; i++) {
    const newNumber =
      fibonacciSeq[fibonacciSeq.length - 1] +
      fibonacciSeq[fibonacciSeq.length - 2];
    fibonacciSeq.push(newNumber);
    console.log(
      `${i}. ${newNumber} | ${isEven(newNumber) ? "Even" : "Odd"} | ${
        isPrime(newNumber) ? "Prime" : "Not prime"
      } | Digits: ${printDigits(newNumber)}`
    );
  }
}

printFibonacci();
