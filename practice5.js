function dhruvil(Hello) {
    const words = Hello.split(' ');
  
    let abc = '';
  

    for (let i = 0; i < words.length; i++) {
      const xyz = words[i];
  
      
      if (xyz.length > abc.length) {
        abc = xyz;
      }
    }
  
    return abc;
  }
  
  
  const Hello = "Web Development Tutorial";
  const person = dhruvil(Hello);
  console.log("The longest word is:", person);