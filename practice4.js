function person(number) {
    if (number <= 0) {
      return false;
    }
  
    let sum = 0;
  
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
  
    return sum === number;
  }
  
  const number = 28;
  if (person(number)) {
    console.log(`${number} is a perfect number.`);
  } else {
    console.log(`${number} is not a perfect number.`);
  }