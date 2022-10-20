var obj = {
  1: "Nikson",
  2: "Laxmi",
  3: "Nimesh",
  4: "Bishan",
};
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

console.log(result);
