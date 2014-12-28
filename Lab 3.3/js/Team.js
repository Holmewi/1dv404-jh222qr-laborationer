"use strict";

function Team(teamName, teamId){
    this.getName = function() { return teamName; };
    this.setName = function(_name) { teamName = _name };
    this.getId = function() { return teamId; };
    this.setId = function(_id) { teamId = _id };
    
    this.setName(teamName);
    this.setId(teamId);
}