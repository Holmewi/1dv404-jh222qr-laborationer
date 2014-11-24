"use strict"

window.onload = function(){
    var getNumerator = document.querySelector("#input-numerator");
    var getDominator = document.querySelector("#input-denominator");
    
    var p = document.querySelector("#value");
    
    var submit = document.querySelector("#submit");
    
    submit.addEventListener("click", function(evt){ 
        evt.preventDefault();
        var numerator = parseInt(getNumerator.value);
        var dominator = parseInt(getDominator.value);
        var myFraction = new Fraction(numerator, dominator);
        p.innerHTML = "Ditt bråktal är: " + numerator + "/" + dominator;
        
    });
    

    
};

function Fraction(T, N) {
    console.log(T);
    console.log(N);

};

