"use strict";

function Team(teamName, teamId){
    this.getName = function() { return teamName; };
    this.setName = function(_name) { teamName = _name };
    this.getId = function() { return teamId; };
    this.setId = function(_id) { teamId = _id };
    
    this.setName(teamName);
    this.setId(teamId);
}

Team.prototype.teamPnts = function(points) {
    this.getTeamPnt = function() { return points; };
    this.setTeamPnt = function(_points) { teamPoint = _points };
    var teamAddedPnts = points.reduce(function(a,b){return a+b;});
    console.log("Team added score: " + teamAddedPnts);
    return teamAddedPnts;
};

Team.prototype.teamTotalPnts = function(teamAddedPnts) {
    var teamTotalPnts = 50;         // The team competition point is set to 50 in this test
    teamTotalPnts += teamAddedPnts;
    console.log("Team competition score: " + teamTotalPnts);
    return teamTotalPnts;
};

Team.prototype.teamLeaguePnts = function(teamTotalPnts) {
    var teamLeaguePnts = 1000;      // The team league point is set to 1000 in this test
    teamLeaguePnts += teamTotalPnts;
    console.log("Team league score: " + teamLeaguePnts);
    return teamLeaguePnts;
};