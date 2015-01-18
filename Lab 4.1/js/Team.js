"use strict";
var LEAGUE = LEAGUE || {};

function Team(teamName, street, zipcode, city, phone, email, teamId){
    this.getTeamName = function(){ return teamName };
    this.setTeamName = function(_teamName){ teamName = _teamName; };
    this.setTeamName(teamName);
    
    this.getStreet = function(){ return street };
    this.setStreet = function(_street){ street = _street; };
    this.setStreet(street);
    
    this.getZipcode = function(){ return zipcode };
    this.setZipcode = function(_zipcode){ zipcode = _zipcode; };
    this.setZipcode(zipcode);
    
    this.getCity = function(){ return city };
    this.setCity = function(_city){ city = _city; };
    this.setCity(city);
    
    this.getPhone = function(){ return phone };
    this.setPhone = function(_phone){ phone = _phone; };
    this.setPhone(phone);
    
    this.getEmail = function(){ return email };
    this.setEmail = function(_email){ email = _email; };
    this.setEmail(email);
    
    this.getTeamId = function(){ return teamId };
    this.setTeamId = function(_teamId){ teamId = _teamId; };
    this.setTeamId(teamId);
}

Team.prototype.toString = function(){
    return "" + this.getStreet() + ", " + this.getZipcode() + " " + this.getCity() + "";
};