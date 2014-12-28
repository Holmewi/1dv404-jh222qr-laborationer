"use strict";

function Gymnast(name, id){
    this.getName = function() { return name; };
    this.setName = function(_name) { name = _name };
    this.getId = function() { return id; };
    this.setId = function(_id) { id = _id };

    this.setName(name);
    this.setId(id);
}

Gymnast.prototype.point = function(gymnastMediumScore) {
    this.getPoint = function() { return gymnastMediumScore };
    this.setPoint = function(_point) { gymnastMediumScore = _point };
    
    this.setPoint(gymnastMediumScore);

    console.log(gymnastMediumScore);

};