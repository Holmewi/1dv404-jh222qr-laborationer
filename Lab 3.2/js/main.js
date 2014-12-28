"use strict";

var Main = {
    gymnasts : [],
    count : 0,
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
        console.log(Main.gymnasts[0].getId());
        var points = [];
        var point;
        var valid = true;
        
        /*
        if(p1.match(/^\d/) && p2.match(/^\d/) && p3.match(/^\d/) && p4.match(/^\d/) && p5.match(/^\d/)){
            if(p1 < 0 || p2 < 0 || p3 < 0 || p4 < 0 || p5 < 0){
                console.log("ERROR: Number must be between 10 - 0");
            }
            if(p1 > 10 || p2 > 10 || p3 > 10 || p4 > 10 || p5 > 10){
                console.log("ERROR: Number must be between 10 - 0");
            } else {
                Calculator.handlePoints(p1, p2, p3, p4, p5);
            }
        } else {
            console.log("ERROR: Not a valid number");
        }
       

        if(document.getElementsByClassName('pointInput').value != undefined){
            for(var i = 0; i < Main.gymnasts.length; i += 1){
                
                for(var j = 1; j <= 5; j += 1){
                    point = Math.round(document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).value.replace('.',',').replace(',','.') * 100) / 100 || undefined;
                    points.push(parseFloat(point));
                }
                console.log(Main.gymnasts[i].getName());
                Gymnast.prototype.points(points);
                points = [];
            }
        } else {
            console.log("ERROR: Not a valid number");
        }
        */
        
        // Antal gymnaster
        
            for(var i = 0; i < Main.gymnasts.length; i += 1){
                
                
                // Antal poäng som matas in
                for(var j = 1; j <= 5; j += 1){
                    // Sätter det inmatade värdet
                    point = document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).value;
                    // Kollar att det inmatade värdet är ett ogiltigt nummer
                    if(isNaN(point)){
                        //console.log("ERROR: Not a valid number");
                        document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).focus();
                        // Sätter valid till falskt
                        valid = false;
                        
                        // Bryter loopen
                    } else {
                        point = Math.round(document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + j).value.replace('.',',').replace(',','.') * 100) / 100 || undefined;
                        points.push(parseFloat(point));
                    }
                }
                    
                console.log(Main.gymnasts[i].getName());
                    
                if(valid === true){
                    for(var k = 1; k <= points.length; k += 1){
                        document.getElementById('id' + Main.gymnasts[i].getId() + 'p' + k).disabled = true;
                    }
                    Gymnast.prototype.points(points);
                } else {
                    i - 1;
                    console.log("ERROR: Not a valid number");
                    valid = true;
                    break;
                }
                
                
                
                
                points = [];
            }
        
        
        console.log(points);
    },
    
    validatePoints : function() {
        
    }

    
};

window.onload = function() {
    Main.init();
};