"use strict";

var Main = {
    gymnasts : [],
    teams : [],
    teamPnts : [],
    numberOfGymnasts :1,
    numberOfTeams :2,
    id : 0,
    teamId : 0,
    gymnast : {},
    team : {},
    count : 0,
    
    init : function(){
        Main.gymnastScoreInput();
    },
    
    gymnastScoreInput : function(){
        var name;
        var teamName;
        var form = document.getElementById("inputScore");
        
                
        for(var i = 1; i <= Main.numberOfTeams; i += 1){
            Main.teamId += 1;
            teamName = "Team-ID " + Main.teamId;
            
            //Main.gymnasts = [];
            var section = document.createElement("section");
            var h4 = document.createElement("h4");
            form.appendChild(section);
            section.appendChild(h4);
                
            Main.team = new Team(teamName, Main.teamId, Main.numberOfGymnasts, Main.gymnasts);
            Main.teams.push(Main.team);
            
            h4.innerHTML = Main.team.getName();
            
            console.log(Main.team.getName());
            for(var j = 1; j <= Main.numberOfGymnasts; j += 1){
                Main.id += 1;
                name = "Player-ID " + Main.id;

    
                var div = document.createElement("div");
                var p = document.createElement("p");
                section.appendChild(div);
                div.appendChild(p);
                
                Main.gymnast = new Gymnast(name, Main.id);
                Main.gymnasts.push(Main.gymnast);
                
                
                
                Main.count += 1;
                
                p.innerHTML = Main.gymnast.getName();
                
                for(var k = 1; k <= 5; k += 1){
                    
                    var input = document.createElement("input");
                    input.setAttribute('type','text');
                    input.setAttribute('id', 'id' + Main.id + 'p' + k);
                    input.setAttribute('class', 'pointInputId' + Main.id);
                    div.appendChild(input);
                    
                }
                
            }
            //Team.prototype.gymnasts(Main.gymnasts);
            //console.log(Team.prototype.getGymnasts());
        }

        
        var divBottom = document.createElement("div");
        var submit = document.createElement("input");
        submit.type = "button";
        submit.setAttribute('value', 'Spara');
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
        var point = +point;
        var valid = true;
        
        // Antal gymnaster
        
            for(var i = 0; i < Main.gymnasts.length; i += 1){
                
                // Antal poäng som matas in
                if(valid === true){
                    for(var j = 1; j <= 5; j += 1){
                        // Sätter det inmatade värdet
                        point = Math.round(document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).value.replace('.',',').replace(',','.') * 100) / 100 || undefined;
                        // Kollar att det inmatade värdet är ett ogiltigt nummer

                            if(isNaN(point) && point == false){
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
        Main.viewResults();
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
    },
    
    viewResults : function() {
        var form = document.getElementById("inputScore");
        var section = document.createElement("section");
        form.appendChild(section);
        
        
        for(var i = 0; i < Main.teams.length; i += 1){
            var div = document.createElement("div");
            var h3 = document.createElement("h3");
            section.appendChild(div);
            div.appendChild(h3);
            
            h3.innerHTML = Main.teams[i].getName();
            
            console.log(Main.team.getAmount());
            
            for(var j = 0; j < Main.team.getAmount(); j += 1){
                var p = document.createElement("p");
                div.appendChild(p);
                //p.innerHTML = Main.teams[i].gymnasts[j].getName() + ": ";
                
                
                
                Team.prototype.gymnasts.getCount = j;
                p.innerHTML = Main.teams[i].getGymnasts().getName();
                
            }
        }
       
    }

    
};

window.onload = function() {
    Main.init();
};