"use strict";
var LEAGUE = LEAGUE || {};

LEAGUE.Admin = {
    
    renderTeam : function(team){
        var adminView = document.getElementById('adminInterface');
        var table = document.createElement('table');
        var tableTitles = ["ID", "Gymnast", "p1", "p2", "p3", "p4", "p5"];
        // Temporär gymnast
        var gymnast = ["101", "Jenny Persson"];
        
        var cols = 7;
        var i, j;
        
        adminView.appendChild(table);
        
        // 3 är antalet gymnaster i en array som skapas i iteration 2
        for(i = 0; i <= 3; i += 1){
            var tr = document.createElement("tr");
            table.appendChild(tr);
            
            for(j = 0; j < cols; j += 1){
                if(i === 0){
                    var th = document.createElement("th");
                    tr.appendChild(th);
                    th.innerHTML = tableTitles[j];
                } else {
                    var td = document.createElement("td");
                    
                    if(j === 0){
                        tr.appendChild(td);
                        td.innerHTML = "#" + gymnast[j];
                    }
                    if(j === 1){
                        tr.appendChild(td);
                        td.innerHTML = gymnast[j];
                    } 
                    if(j > 1){
                        tr.appendChild(td);
                        td.innerHTML = "<input type='text'>";
                    }
                    
                    
                      
                }
                
            }
        }
        //adminView.innerHTML += "<p>ID   Lag</p>";
        //adminView.innerHTML += "<p>#" + team.getTeamId() + " " + team.getTeamName() + "</p>";
    },
    
    renderGymnasts : function(){
            
        }
};