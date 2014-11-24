"use strict"

window.onload = function(){
    
    var palindrom = function(str){
        
    // Skapar en sträng och tar bort mellanrummen
    // Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    var newString = str.replace(/\s/g, '').toLowerCase();
    
    // Skapar en ny sträng som är omvänd
    // Källa: http://stackoverflow.com/questions/1611427/reversing-a-string-in-javascript
    var backString = newString.split("").reverse().join("");
    

    
        console.log(newString);
        console.log(backString);
        return newString;
    };
    
    // Referensvariabler till DOM
    var input = document.querySelector("#input");
	var submit = document.querySelector("#submit");
    var p = document.querySelector("#value").innerHTML;
    
    submit.addEventListener("click", function(){ p = palindrom(input.value); });
};