function foo(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 3000);
}

foo(1, 2, (res) => {
  console.log(res);
});

function promisify(asyncFunction) {
  // реализация
}

const fooPromisified = promisify(someAsyncFunction);

fooPromisified(1, 2).then((res) => {
  console.log(res);
});
