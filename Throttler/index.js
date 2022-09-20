function throttler(callback, delay) {
  let res = 0;
  return function () {
    if (Date.now() - res > delay) {
      res = Date.now();
      callback();
    }
  };
}
function getData() {
  console.log("Welcome to the throttler");
}

let onClick = throttler(getData, 2000);
document.getElementById("button").addEventListener("click", onClick);
