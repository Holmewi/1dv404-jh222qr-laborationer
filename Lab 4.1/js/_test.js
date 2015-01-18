"use strict";
var Test = {
    p : document.getElementById("text"),
    button : document.getElementById("button"),
    deleteButton : document.getElementById("delete"),
    clearButton : document.getElementById("clear"),
    gymnast1 : {"id" : "4320", "name" : "Kajsa Berglund", "e-post" : "kajsa@kalmarff.se"},
    gymnast2 : {"id" : "3422", "name" : "Jonas Persson", "e-post" : "jonas@kalmarff.se"},
    gymnast3 : {"id" : "2346", "name" : "Tobias Karlsson", "e-post" : "tobias@kalmarff.se"},
    gymnasts : [],
    team1 : {"id" : "200", "name" : "Kalmar FF", "phone" : "0704947240", gymnasts : []},
    team2 : {"id" : "633", "name" : "FC Calmare", "phone" : "0704947240", gymnasts : []},
    teams : [],
    
    init : function(teams){
        console.log(teams);

        var value = $.jStorage.get("key");
        
        if(!value){
            console.log("test");
            Test.button.onclick = function(){
                value = $.jStorage.set("key", teams);
                //Test.p.innerHTML = value[1].gymnasts[2].name;
                location.reload();
            };
        }
        
        Test.deleteButton.onclick = function(){
            $.jStorage.deleteKey("key");
            location.reload();
        };
        
        Test.clearButton.onclick = function(){
            $.jStorage.flush()
            location.reload();
        };
        
        Test.p.innerHTML = value[1].gymnasts[2].name;
        
        console.log($.jStorage.index());
    }
};

window.onload = function(){
    Test.team2.gymnasts.push(Test.gymnast1);
    Test.team2.gymnasts.push(Test.gymnast2);
    Test.team2.gymnasts.push(Test.gymnast3);
    console.log(Test.gymnasts);
    
    Test.teams.push(Test.team1);
    Test.teams.push(Test.team2);
    console.log(Test.teams);

    Test.init(Test.teams);
};


