"use strict"

// Konstruktor
function Fraction(T, N) {
    /*
    this.getNumerator = parseInt(T);        // Täljaren
    this.getDenominator = parseInt(N);      // Nämnaren
    var p = document.querySelector("#value");
    
    
    if (this.getDenominator === 0){
        p.innerHTML = "Nämnaren får inte vara 0!";
        throw new Error("Nämnaren får inte vara 0!");
    }

    console.log(T);
    console.log(N);
        
    return this.getNumerator, this.getDenominator;
    */
    this.getNumerator = function() {
		return T;
	};
	
	this.getDenominator = function() {
	    if (N === 0){
            p.innerHTML = "Nämnaren får inte vara 0!";
            throw new Error("Nämnaren får inte vara 0!");
        } else {
		return N;
        }
	};
}

// Metoder
Fraction.prototype.isNegative = function () {
	if (this.getNumerator() < 0 || this.getDenominator() < 0) {
	    return true;
	} else {
		return false;
	}
};
    
Fraction.prototype.add = function (testFraction) {
    var addedNumerator = this.getNumerator() * testFraction.getDenominator() + testFraction.getNumerator() * this.getDenominator();
    var addedDenominator = this.getDenominator() * testFraction.getDenominator();
    return new Fraction(addedNumerator, addedDenominator);
};
    
Fraction.prototype.multiply = function (testFraction) {
	var multipliedNumerator = this.getNumerator() * testFraction.getNumerator();
	var multipliedDenominator = this.getDenominator() * testFraction.getDenominator();
	return new Fraction(multipliedNumerator, multipliedDenominator);
};

Fraction.prototype.isEqualTo = function (testFraction) {
	if (this.getNumerator() / this.getDenominator() === testFraction.getNumerator() / testFraction.getDenominator()) {
		return true;
	} else {
		return false;
	}
}

Fraction.prototype.toString = function () {
	return this.getNumerator() + " / " + this.getDenominator();
}



    
    
var output = "";
var numerator = document.querySelector("#input-numerator");
var dominator = document.querySelector("#input-denominator");
var p = document.querySelector("#value");
var submit = document.querySelector("#submit");
    

//var newFraction = new Fraction(2, 3);
var testFraction = new Fraction(4, 7);                                              // Programmets object

submit.addEventListener("click", function(evt){ 
    evt.preventDefault();
    var newFraction = new Fraction(+numerator.value, +dominator.value);             // Mitt egna object
    
    
    p.innerHTML += "<p>Ditt bråktal är: " + newFraction.toString() + ".</p>";
    p.innerHTML += "<p>Programmets bråktal är: " + testFraction.toString() + ".</p>";
    p.innerHTML += "<p>isNegative: " + newFraction.isNegative() + ".</p>";
    
    var addedFraction = newFraction.add(testFraction);
    p.innerHTML += "<p>Addera: " + newFraction.toString() + " + " + testFraction.toString() + " = " + addedFraction.toString() + ".</p>";
    
    var multipliedFraction = newFraction.multiply(testFraction);
    p.innerHTML += "<p>Multiplicera: " + newFraction.toString() + " + " + testFraction.toString() + " = " + multipliedFraction.toString() + ".</p>";
    
    p.innerHTML += "<p>isEqualTo: " + newFraction.isEqualTo(testFraction) + ".</p>";
});



// Testobjekt
/*
console.log(newFraction.toString());
console.log(newFraction.isNegative());
console.log(newFraction.isEqualTo(testFraction));
console.log(testFraction.toString());

var addedFraction = newFraction.add(testFraction);
console.log(addedFraction.toString());

var multipliedFraction = newFraction.multiply(testFraction);
console.log(multipliedFraction.toString());
*/