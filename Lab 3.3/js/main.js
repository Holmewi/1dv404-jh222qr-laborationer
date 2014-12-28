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
                    Gymnast.prototype.points(points);
                    points = [];
                }
            }
            
            
        
        
        console.log(points);
    },
    
    viewResult : function() {
        
    }

    
};

window.onload = function() {
    Main.init();
};