// example code
function toggler() {
  let arr = Object.values(arguments);
  let i = 0;
  return function () {
    console.log(arr[i++ % arr.length]);
  };
}
// toggler(1, 2, 3)
const toggle = toggler(1, 2, 3);

toggle();
// 1
toggle();
// 2
toggle();
// 3
