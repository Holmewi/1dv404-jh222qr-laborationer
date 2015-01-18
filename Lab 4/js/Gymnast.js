"use strict";
var LEAGUE = LEAGUE || {};

function Gymnast(surname, lastname, personcode, email, memberId){
    this.getSurname = function(){ return surname };
    this.setSurname = function(_surname){ surname = _surname; };
    this.setSurname(surname);
    
    this.getLastname = function(){ return lastname };
    this.setLastname = function(_lastname){ lastname = _lastname; };
    this.setLastname(lastname);
    
    this.getPersoncode = function(){ return personcode };
    this.setPersoncode = function(_personcode){ personcode = _personcode; };
    this.setPersoncode(personcode);
    
    this.getEmail = function(){ return email };
    this.setEmail = function(_email){ email = _email; };
    this.setEmail(email);
    
    this.getMemberId = function(){ return memberId };
    this.setMemberId = function(_memberId){ memberId = _memberId; };
    this.setMemberId(memberId);
}

Gymnast.prototype.toString = function(){
    return "" + this.getSurname() + " " + this.getLastname() + "";
};