function countVowels() {
    const text = document.getElementById("textInput").value.toLowerCase();
    console.log(text);
    const vowels = ["a", 'e', 'i', 'o', 'u']; 
    let vowelCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i]) ) {
            vowelCount++;
            console.log(vowelCount);
        }
    }
    document.getElementById("wordCount").innerHTML = `Number of vowels: ${vowelCount}`;
}