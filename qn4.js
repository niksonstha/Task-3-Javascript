function FindAllMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}
//above code finds methods only
//Following code finds both properties and methods
console.log(FindAllMethods(Math));
console.log(FindAllMethods(Array));
function all_properties(obj) {
  return Object.getOwnPropertyNames(obj);
}

console.log(all_properties(Math));

console.log(all_properties(Array));
