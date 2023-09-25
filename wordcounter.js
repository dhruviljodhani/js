function countWords() {
    const inputText = document.getElementById("textInput").value;
    const wordCount = inputText.trim().split(/\s+/).length;
    document.getElementById("wordCount").textContent = `Word count: ${wordCount}`;
  }