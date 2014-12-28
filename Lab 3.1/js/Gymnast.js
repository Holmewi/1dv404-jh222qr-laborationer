"use strict";

function Gymnast(points){
    console.log(points);
    
    return points;
}

Gymnast.prototype.points = function(points) {
    var mediumScore = 0;
    var i;
    
    points.sort();
    points.reverse();
    console.log(points);
    
    // Tar bort den högsta och lägsta poängen
    points.splice(0, 1);
    points.splice(3, 4);
    console.log(points);
    
    /*
    for(i = 0; i < points.length; i += 1){
        mediumScore += points[i];
    }
    */
    mediumScore = points.reduce(function(a,b){return a+b;});
    console.log(mediumScore);
    
};