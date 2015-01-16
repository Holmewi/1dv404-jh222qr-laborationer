"use strict";
var LEAGUE = LEAGUE || {};

LEAGUE.User = {
    renderTeam : function(team){
        var userView = document.getElementById('userInterface');
        
        userView.innerHTML = "<h3>Lagsida för lagledaren</h3>";
        userView.innerHTML += "<hr>";
        
        userView.innerHTML += "<h4>" + team.getTeamName() + "</h4>";
        userView.innerHTML += "<p><span class='teamTitle'>Adress:</span><span class='teamInfo'>" + team.toString() + "</span></p>";
        userView.innerHTML += "<p><span class='teamTitle'>Telefon:</span><span class='teamInfo'>" + team.getPhone() + "</span></p>";
        userView.innerHTML += "<p><span class='teamTitle'>E-post:</span><span class='teamInfo'>" + team.getEmail() + "</span></p>";
        userView.innerHTML += "<hr>";
        userView.innerHTML += "<h3>Gymnaster</h3>";
        var gymnasts = document.createElement('div');
        gymnasts.style.height = "10px";
        gymnasts.style.background = "blue";
        userView.appendChild(gymnasts);
        
        var addMember = document.createElement('input');
        addMember.setAttribute('type', 'button');
        addMember.setAttribute('name', 'Lägg till gymnast');
        addMember.setAttribute('id', 'addButton');
        addMember.setAttribute('value', 'Lägg till gymnast');
        addMember.setAttribute('class', 'button');
        
        userView.appendChild(addMember);
        
        addMember.onclick = function(){
            var form = document.createElement('form');
            form.setAttribute('id', 'addMembers');
            form.style.height = "10px";
            form.style.background = "red";
            userView.appendChild(form);
            LEAGUE.User.createForm(form);
        };
    },
    
    createForm : function(form){
        
        
        
        
    }
};