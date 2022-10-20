let vowelConsonant = (str) => {
  let vowels = [];
  let consonants = [];

  vowels = str.match(/[aeiou]/gi).sort();
  consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi).sort();
  console.log("Vowels are: ");
  console.log(vowels);

  console.log("Consonants are: ");
  console.log(consonants);
};

vowelConsonant("Nikson");
