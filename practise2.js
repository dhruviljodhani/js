function sortString(inputString) {
    const Array = inputString.split('');
  
    const xyz = Array.sort();
  
    const abc = xyz.join('');
  
    return abc;
  }
  
  const input = "webmaster";
  const abc = sortString(input);
  console.log(abc);