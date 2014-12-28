"use strict";

var Main = {
    gymnasts : [],
    teamPnts : [],
    numberOfGymnasts :2,
    id : 0,
    gymnast : {},
    
    init : function(){
        Main.gymnastScoreInput();
    },
    
    gymnastScoreInput : function(){
        var name;
        var form = document.getElementById("inputScore");
        
        
        for(var i = 1; i <= Main.numberOfGymnasts; i +=1){
            name = "Player-ID " + i;
            Main.id = i;

            var div = document.createElement("div");
            var p = document.createElement("p");
            form.appendChild(div);
            div.appendChild(p);
            
            Main.gymnast = new Gymnast(name, Main.id);
            Main.gymnasts.push(Main.gymnast);
            
            Main.count += 1;
            
            p.innerHTML = Main.gymnast.getName();
            
            for(var j = 1; j <= 5; j += 1){
                
                var input = document.createElement("input");
                input.setAttribute('type','text');
                input.setAttribute('id', 'id' + Main.id + 'p' + j);
                input.setAttribute('class', 'pointInputId' + Main.id);
                div.appendChild(input);
                console.log(Main.gymnast.getName());
            }
        }
        
        var divBottom = document.createElement("div");
        var submit = document.createElement("input");
        submit.type = "button";
        submit.setAttribute('value', 'Validera');
        form.appendChild(divBottom);
        divBottom.appendChild(submit);
        
        submit.onclick = function(e){
            e.preventDefault();
            Main.getPointValue();
        };
    },
    
    getPointValue : function() {
        console.log(Main.gymnasts);
        var points = [];
        var point;
        var valid = true;
        
        // Antal gymnaster
        
            for(var i = 0; i < Main.gymnasts.length; i += 1){
                
                
                // Antal poäng som matas in
                if(valid === true){
                    for(var j = 1; j <= 5; j += 1){
                        // Sätter det inmatade värdet
                        point = Math.round(document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).value.replace('.',',').replace(',','.') * 100) / 100 || undefined;
                        // Kollar att det inmatade värdet är ett ogiltigt nummer
                        
                            if(isNaN(point)){
                                console.log("ERROR: Not a valid number");
                                document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).focus();
                                // Sätter valid till falskt
                                valid = false;
                                break;
                                // Bryter loopen
                            } 
                            if(point > 10 || point < 0){
                                console.log("ERROR: Not in range 0 - 10");
                                document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).focus();
                                // Sätter valid till falskt
                                valid = false;
                                break;
                                // Bryter loopen
                            } else {
                                document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).disabled = true;
                                console.log("VALID");
                                valid = true;
                            }
                    }
                } else {
                    i - 1;
                    console.log("ALERT: Change input value and try again");
                    break;
                }
                    
            }
            
            
            if(valid === true){
                for(var i = 0; i < Main.gymnasts.length; i += 1){
                    console.log(Main.gymnasts[i].getName());
                    
                    for(var j = 1; j <= 5; j += 1){
                        point = Math.round(document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).value.replace('.',',').replace(',','.') * 100) / 100 || undefined;
                        points.push(parseFloat(point));
                    }
                    // Gymnast.prototype.points(points);
                    Main.calculateGymnastMediumPnt(points);
                    points = [];
                }
            }

        console.log(points);
    },
    
    calculateGymnastMediumPnt : function(pointsArray) {
        var gymnastAddedScore = 0;
        var gymnastMediumScore = 0;

        pointsArray.sort();
        pointsArray.reverse();
        console.log(pointsArray);
        
        // Tar bort den högsta och lägsta poängen
        pointsArray.splice(0, 1);
        pointsArray.splice(3, 4);
        console.log(pointsArray);
        
        gymnastAddedScore = pointsArray.reduce(function(a,b){return a+b;});
        console.log(gymnastAddedScore);
        
        gymnastMediumScore = Math.round((gymnastAddedScore / pointsArray.length) * 100) / 100;
        console.log("Gymnast Medium Score: " + gymnastMediumScore);
        
        Gymnast.prototype.point(gymnastMediumScore);
        
        
        Main.teamPnts.push(gymnastMediumScore);
        
        if(Main.teamPnts.length === Main.gymnasts.length){
            Main.calculateTeamPnts(Main.teamPnts);
        }
    },
    
    calculateTeamPnts : function(teamPntsArray) {
        console.log("GYMNAST " + teamPntsArray);
        var teamAddedPnts = teamPntsArray.reduce(function(a,b){return a+b;});
        
        console.log("Team Score: " + teamAddedPnts);
        Team.prototype.teamPnts(teamAddedPnts);
        
        Main.calulateTeamTotalPnts(teamAddedPnts);
        
        
    },
    
    calulateTeamTotalPnts : function(teamAddedPnts) {
        var teamTotalPnts = 50;         // The team competition point is set to 50 in this test
        teamTotalPnts += teamAddedPnts;
        
        Team.prototype.teamTotalPnts(teamTotalPnts);
        
        console.log("Team Total Score: " + teamTotalPnts);
        
        Main.calulateTeamLeaguePnts(teamTotalPnts);
    },
    
    calulateTeamLeaguePnts : function(teamTotalPnts) {
        var teamLeaguePnts = 1000;      // The team league point is set to 1000 in this test
        teamLeaguePnts += teamTotalPnts;
        
        console.log("Team League Score: " + teamLeaguePnts);
        
        Team.prototype.teamLeaguePnts(teamLeaguePnts);
    }

    
};

window.onload = function() {
    Main.init();
};