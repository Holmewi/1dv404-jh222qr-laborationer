"use strict"

window.onload = function(){
    
    var palindrom = function(str){
        
    // Skapar en sträng och tar bort mellanrummen
    // Källa: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    var newString = str.toLowerCase();
    newString = str.replace(/\s/g, '');
    
        console.log(newString);
    
    };
    
    // Referensvariabler till DOM
    var input = document.querySelector("#input");
	var submit = document.querySelector("#submit");
    var p = document.querySelector("#value").innerHTML;
    
    submit.addEventListener("click", function(){ p = palindrom(input.value); });
};