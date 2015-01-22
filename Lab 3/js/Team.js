"use strict";

function Team(teamName, teamId, gymnasts){
    
    this.getName = function() { return teamName; };
    this.setName = function(_name) { teamName = _name };
    this.getId = function() { return teamId; };
    this.setId = function(_id) { teamId = _id };
    this.getGymnasts = function() { return gymnasts; };
    this.setGymnasts = function(_gymnasts) { gymnasts = _gymnasts };
    
    this.setName(teamName);
    this.setId(teamId);
    this.setGymnasts(gymnasts);
    
    console.log(gymnasts);
}

Team.prototype.teamPnts = function(teamPnt) {
    this.getTeamPnt = function() { return teamPnt; };
    this.setTeamPnt = function(_teamPnt) { teamPnt = _teamPnt };
    
    this.setTeamPnt(teamPnt);
};

Team.prototype.teamTotalPnts = function(teamAddedPnts) {
    this.getTeamTotalPnts = function() { return teamAddedPnts; };
    this.setTeamTotalPnts = function(_teamAddedPnts) { teamAddedPnts = _teamAddedPnts };
    
    this.setTeamTotalPnts(teamAddedPnts);
};

Team.prototype.teamLeaguePnts = function(teamTotalPnts) {
    this.getTeamLeaguePnts = function() { return teamTotalPnts; };
    this.setTeamLeaguePnts = function(_teamTotalPnts) { teamTotalPnts = _teamTotalPnts };
    
    this.setTeamLeaguePnts(teamTotalPnts);
};