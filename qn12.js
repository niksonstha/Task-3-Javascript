function upper_lower(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  let front_part = str.substring(0, 3).toLowerCase();
  let back_part = str.substring(3, str.length);
  return front_part + back_part;
}
console.log(upper_lower("Nikson"));
console.log(upper_lower("ni"));
console.log(upper_lower("NIKson"));
