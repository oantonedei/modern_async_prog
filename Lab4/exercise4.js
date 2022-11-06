//Memoization

let cache = {};
function fib(n) {
  if (n in cache) {
    return cache[n];
  } else {
    if (n <= 1) {
      return n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    }
  }
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
