"use strict";

function Gymnast(name, id){
    var score = 0;
    
    this.getName = function() { return name; };
    this.setName = function(_name) { name = _name };
    this.getId = function() { return id; };
    this.setId = function(_id) { id = _id };

    this.setName(name);
    this.setId(id);
}

Gymnast.prototype.point = function(mediumScore) {
    console.log(mediumScore);
    

    
   
    this.getScore = function() { return mediumScore; };
    this.setScore = function(_score) { mediumScore = _score };
    
    this.setScore(mediumScore);
   
    
    //return mediumScore;
};