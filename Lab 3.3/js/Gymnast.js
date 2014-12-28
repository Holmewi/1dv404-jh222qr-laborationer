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
    gymnastMediumScore = gymnastAddedScore / points.length;
    
    console.log(gymnastMediumScore);
    return gymnastMediumScore;
};