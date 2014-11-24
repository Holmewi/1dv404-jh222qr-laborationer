"use strict"

window.onload = function(){
    var numerator = document.querySelector("#input-numerator");
    var dominator = document.querySelector("#input-denominator");
    
    var p = document.querySelector("#value");

    var submit = document.querySelector("#submit");
    
    submit.addEventListener("click", function(evt){ 
        evt.preventDefault();
        
        var newFraction = new Fraction(numerator.value, dominator.value);
        p.innerHTML = "Ditt bråktal är: " + numerator.value + "/" + dominator.value;
        
    });
    

    
};

function Fraction(numerator, dominator) {
    var getNumerator = parseInt(numerator);     // Täljaren
    var getDominator = parseInt(dominator);     // Nämnaren
    var p = document.querySelector("#value");
    
    console.log(getNumerator);
    console.log(getDominator);
    
    if (getDominator === 0){
        p.innerHTML = "Nämnaren får inte vara 0!"
        throw new Error("Nämnaren får inte vara 0!");
    }
};

