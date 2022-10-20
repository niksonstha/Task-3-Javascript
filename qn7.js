function numberCharacters(string) {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j <= string.length; j++) {
      if (i != j && i < j) {
        let btr = string.substring(i, j);
        str += btr + "\n";
      }
    }
  }
  return str;
}
console.log(numberCharacters("dog"));
