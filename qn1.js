let student = {
    name: "Nikson Shrestha",
    sclass: "Bachelor",
    RollNo: "13",
  };
  
  // Before deleting
  console.log(student);
  
  // After deleting
  
  let d = delete student.RollNo;
  console.log(student);
  
  console.log(Object.keys(student).length);
  