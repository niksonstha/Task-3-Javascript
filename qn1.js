let student = {
  name: "Nikson Shrestha",
  sclass: "Bachelor",
  RollNo: "13",
};

let list = Object.keys(student);
list.forEach((element) => {
  console.log(element);
});
// Before deleting
console.log(student);

// After deleting

let d = delete student.RollNo;
console.log(student);

console.log(list.length);
