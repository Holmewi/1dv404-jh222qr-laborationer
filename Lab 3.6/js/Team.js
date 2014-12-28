"use strict";

function Team(teamName, teamId, amount){
    this.getName = function() { return teamName; };
    this.setName = function(_name) { teamName = _name };
    this.getId = function() { return teamId; };
    this.setId = function(_id) { teamId = _id };
    this.getAmount = function() { return amount };
    this.setAmount = function(_amount) { amount = _amount };
    
    this.setName(teamName);
    this.setId(teamId);
    this.setAmount(amount);
}

Team.prototype.gymnasts = function(gymnasts) {
    

    this.getCount = 0;
    console.log(this.getCount);
    
    this.getGymnasts = function() { return gymnasts[this.getCount]; };
    this.setGymnasts = function(_gymnasts) { gymnasts[this.getCount] = _gymnasts };
    
    this.setGymnasts(gymnasts[this.getCount]);
    
    console.log(gymnasts);

},

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