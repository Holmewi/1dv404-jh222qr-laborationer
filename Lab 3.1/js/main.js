"use strict";

var Calculator = {
    points : [],
    p1 : undefined, p2 : undefined, p3 : undefined, p4 : undefined, p5 : undefined,
    point : undefined,

    init : function() {
        
        
        document.getElementById('submit').onclick = function(e){
            e.preventDefault();
            Calculator.getPointValue();
        };

        
    },
    
    getPointValue : function() {
        Calculator.p1 = document.getElementById("p1").value;
        Calculator.p2 = document.getElementById("p2").value;
        Calculator.p3 = document.getElementById("p3").value;
        Calculator.p4 = document.getElementById("p4").value;
        Calculator.p5 = document.getElementById("p5").value;
        

        Calculator.checkValues(Calculator.p1, Calculator.p2, Calculator.p3, Calculator.p4, Calculator.p5);
    },
    
    checkValues : function(p1, p2, p3, p4, p5) {
/*LOG*/ console.log(p1 + ", " + p2 + ", " + p3 + ", " + p4 + ", " + p5);
        if(p1.match(/^\d/) && p2.match(/^\d/) && p3.match(/^\d/) && p4.match(/^\d/) && p5.match(/^\d/)){
            if(p1 < 0 || p2 < 0 || p3 < 0 || p4 < 0 || p5 < 0){
                console.log("ERROR: Number must be between 10 - 0");
            }
            if(p1 > 10 || p2 > 10 || p3 > 10 || p4 > 10 || p5 > 10){
                console.log("ERROR: Number must be between 10 - 0");
            } else {
                Calculator.handlePoints(p1, p2, p3, p4, p5);
            }
        } else {
            console.log("ERROR: Not a valid number");
        }
        
        
    },
    
    handlePoints : function(p1, p2, p3, p4, p5) {
        p1 = p1.replace(/\./g, '').replace(',', '.');
        p2 = p2.replace(/\./g, '').replace(',', '.');
        p3 = p3.replace(/\./g, '').replace(',', '.');
        p4 = p4.replace(/\./g, '').replace(',', '.');
        p5 = p5.replace(/\./g, '').replace(',', '.');
/*LOG*/ console.log(p1 + ", " + p2 + ", " + p3 + ", " + p4 + ", " + p5);
        Calculator.points.push(parseFloat(p1), parseFloat(p2), parseFloat(p3), parseFloat(p4), parseFloat(p5));
/*LOG*/     console.log(Calculator.points);
        Gymnast.prototype.points(Calculator.points);
    }
    
};

window.onload = function() {
    Calculator.init();
};