function reverse(number) {
    let String = '';
    for (char of  number) {
      String = char + String;
    }
    return String;
  }
  
  const original = "Hello, World!";
  const result = reverse(original);
  console.log(result); // Outputs: "!dlroW ,olleH"