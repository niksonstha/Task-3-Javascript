let volume = (r, h) => {
  let pi = Math.PI;

  let v = pi * r * r * h;

  return v;
};

console.log(volume(3, 4).toFixed(4));
