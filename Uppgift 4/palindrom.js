"use strict"

window.onload = function(){
    
    var palindrom = function(str){
        
    // Skapar en sträng och tar bort mellanrummen
    // Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    var newString = str.replace(/\s/g, '').toLowerCase();
    
    // Skapar en ny sträng som är omvänd
    // Källa: http://stackoverflow.com/questions/1611427/reversing-a-string-in-javascript
    var backString = newString.split("").reverse().join("");
    
    if (newString === backString){
        return "Normal:\t" + newString + "<br>Bakvänt:\t" + backString + "<br>\"" + str + "\" är en palindrom!";
    } else {
        return "Normal:\t" + newString + "<br>Bakvänt:\t" + backString + "<br>\"" + str + "\" är ingen palindrom!";
    }
    
        // console.log(newString);
        // console.log(backString);
        return newString;
    };
    
    // Referensvariabler till DOM
    var input = document.querySelector("#input");
	var submit = document.querySelector("#submit");
    var p = document.querySelector("#value");
    
    submit.addEventListener("click", function(evt){ 
        // Gör att formuläret inte skickas
        // Källa: https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault
        evt.preventDefault();
        p.innerHTML = palindrom(input.value); 
    });
};