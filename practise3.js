function hello(xyz) {
    const words = xyz.split(' ');
  

    const hello = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  

    const String = hello.join(' ');
  
    return String;
  }
  

  const person = "the quick brown fox";
  const abc= hello(person);
  console.log(abc);