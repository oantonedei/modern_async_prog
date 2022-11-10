//Memoization

let cache = {};
function fib(n) {
  let value = 0;
  if (n in cache) {
    value = cache[n];
  } else {
    if (n <= 1) {
      value = n;
    } else {
      value = fib(n - 1) + fib(n - 2);
      cache[n] = value;
    }
  }
  return value;
}

console.time("fib");
console.log(fib(100));
console.timeEnd("fib");

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.time("fibonacci");
console.log(fibonacci(20));
console.timeEnd("fibonacci");
