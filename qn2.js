let volume = () => {
  let pi = Math.PI;
  let r = 10;
  let h = 200;

  let v = pi * r * r * h;

  console.log(parseFloat(v.toFixed(4)));
  return v;
};

volume();
