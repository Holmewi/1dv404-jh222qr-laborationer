"use strict";

function Gymnast(name, id){
    this.getName = function() { return name; };
    this.setName = function(_name) { name = _name };
    this.getId = function() { return id; };
    this.setId = function(_id) { id = _id };
    
    this.setName(name);
    this.setId(id);
}

Gymnast.prototype.points = function(points) {
    var gymnastAddedScore = 0;
    var gymnastMediumScore = 0;
    var teamPnts = [];
    //var i;
    
    points.sort();
    points.reverse();
    console.log(points);
    
    // Tar bort den högsta och lägsta poängen
    points.splice(0, 1);
    points.splice(3, 4);
    console.log(points);
    
    gymnastAddedScore = points.reduce(function(a,b){return a+b;});
    console.log(gymnastAddedScore);
    console.log(points.length);
    gymnastMediumScore = Math.round((gymnastAddedScore / points.length) * 100) / 100;

    console.log("Gymnast Medium Score: " + gymnastMediumScore);

    return gymnastMediumScore;
};