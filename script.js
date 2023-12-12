function reverseString() {
    var inputElement = document.getElementById("inputString");
    var outputElement = document.getElementById("outputResult");
  
    var inputString = inputElement.value;
    var reversedString = inputString.split("").reverse().join("");
  
    outputElement.innerHTML = "Reversed String: " + reversedString;
  }