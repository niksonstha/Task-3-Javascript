function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
let ran = Math.floor(Math.random() * 15);
console.log(ran);
console.log(factorialize(ran));
