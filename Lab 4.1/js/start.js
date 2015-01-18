"use strict";
var LEAGUE = LEAGUE || {};

LEAGUE.Start = {
    team : {},
    teams : [],
    valid : true,
    errorMsg : "",
    
    teamName : document.getElementById('teamName').value,
    street : document.getElementById('street').value,
    zipcode : document.getElementById('zipcode').value,
    city : document.getElementById('city').value,
    phone : document.getElementById('phone').value,
    teamEmail : document.getElementById('teamEmail').value,

    init : function(){
        LEAGUE.Start.registerTeam();
    },
        
    registerTeam : function(){
        var button = document.getElementById('register');
        var error = document.getElementById('error');
        error.style.display = "none";
        error.innerHTML = "";
        
        var form = document.getElementById("regForm");
        var fn = form.elements["teamName"];
        
        fn.focus();
        button.onclick = function(){
            //e.preventDefault();
            LEAGUE.Start.validate(error);
        };
    },
    
    validate : function(error){
        LEAGUE.Start.teamName = document.getElementById('teamName').value;
        LEAGUE.Start.street = document.getElementById('street').value;
        LEAGUE.Start.zipcode = document.getElementById('zipcode').value;
        LEAGUE.Start.city = document.getElementById('city').value;
        LEAGUE.Start.phone = document.getElementById('phone').value;
        LEAGUE.Start.teamEmail = document.getElementById('teamEmail').value;
        
        clear();
        testcase1();
        
        
        var teamId = LEAGUE.Start.teams.length || 0;
        
        console.log("Team: " + LEAGUE.Start.teamName + ", Street: " + LEAGUE.Start.street + ", Zipcode: " + LEAGUE.Start.zipcode + ", City: " + LEAGUE.Start.city);
        console.log("Phone: " + LEAGUE.Start.phone + ", E-mail: " + LEAGUE.Start.teamEmail + ", Team ID : " + LEAGUE.Start.teamId);
        
        var teamReg = document.getElementsByClassName("teamReg");

        for(var i = 0; i <  teamReg.length; i += 1){
            teamReg[i].setAttribute('class', 'teamReg');
            
            // console.log(teamReg[i].value);
            if(!teamReg[i].value){
                // console.log("FEL!");
                teamReg[i].focus();
                teamReg[i].setAttribute('class', teamReg[i].getAttribute('class') + ' error');
                
                error.style.display = "inline-block";
                error.innerHTML = "*Du måste fylla i " + teamReg[i].name;
                LEAGUE.Start.valid = false;
                return false;
            } else {
                LEAGUE.Start.regexTest(teamReg[i]);
                // console.log(LEAGUE.Start.valid);
                if(LEAGUE.Start.valid === false){
                    teamReg[i].focus();
                    teamReg[i].setAttribute('class', teamReg[i].getAttribute('class') + ' error');
                
                    error.style.display = "inline-block";
                    error.innerHTML = "*" + LEAGUE.Start.errorMsg;
                    break;
                } else {

                }
            }
        error.style.display = "none";
        error.innerHTML = "";
        }
        
        if(LEAGUE.Start.valid === true){
            LEAGUE.Start.createTeam(LEAGUE.Start.teamName, LEAGUE.Start.street, LEAGUE.Start.zipcode, LEAGUE.Start.city, LEAGUE.Start.phone, LEAGUE.Start.teamEmail, teamId);
        }
        //LEAGUE.Start.team = new Team(teamName, street, zipcode, city, phone, teamEmail, teamId);
        //LEAGUE.Start.teams.push(LEAGUE.Start.team);
    },
    
    regexTest : function(element){
        var regExp;
        var errorMsg;
        
        if(element.id === "teamName"){
            regExp = /^[A-ZÅÄÖ0-9]{1}[A-ZÅÄÖa-zåäö0-9 ]+$/;
            element.value = element.value.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
            errorMsg = "Fel format! Lagnamnet får enbart skrivas med bokstäver och siffror. (Ex. Kalmar FF, HV71)";
            LEAGUE.Start.teamName = element.value;
        }
        if(element.id === "street"){
            regExp = /^[A-ZÅÄÖ]{1}[A-ZÅÄÖa-zåäö ]+\s+[0-9]+([\w]+)*$/;
            element.value = element.value.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
            errorMsg = "Fel format! En gatuadress får enbart innehålla bokstäver och siffror. (Ex: Storgatan 1A)";
            LEAGUE.Start.street = element.value;
        }
        if(element.id === "zipcode"){
            regExp = /^[2-9]\d{4}$/;
            element.value = element.value.replace(/\s+/g, '');
            errorMsg = "Fel format! Ett postnummer måste innehålla 6 stycken siffror. (Ex: 555 55)";
            LEAGUE.Start.zipcode = element.value;
        }
        if(element.id === "city"){
            regExp = /^[A-ZÅÄÖ]{1}[A-ZÅÄÖa-zåäö ]+$/;
            element.value = element.value.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
            errorMsg = "Fel format! Staden får enbart innehålla bokstäver. (Ex: Värsta Frölunda)";
            LEAGUE.Start.city = element.value;
        }
        if(element.id === "phone"){
            var nummer;
            if(element.value.match(/^\+46/) || element.value.match(/^0046/) || element.value.match(/\D/g)){
                element.value = element.value.replace(/^\+46/, "");
                element.value = element.value.replace(/^0046/, "");
                element.value = element.value.replace(/[()-]/g, "");
                LEAGUE.Start.phone = element.value;
            }
            if(element.value.match(/^07/)){
                // console.log("Mobilnummer");
                nummer = "mobilnummer";
                errorMsg = "Fel format! Ett mobilnummer måste innehålla 9 siffor";
                regExp = /^07\d{8}$/;
            } else {
                // console.log("Annat nummer");
                nummer = "telefonnummer";
                errorMsg = "Fel format! Ett telefonnummer måste innehålla 7-9 siffor.";
                regExp = /^0\d{7,9}$/;
            }
            element.value = element.value.replace(/\s+/g, '');
            LEAGUE.Start.phone = element.value;
        }
        if(element.id === "teamEmail"){
            regExp = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
            element.value = element.value.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase(); });
            errorMsg = "Fel format! E-postadressen är ej korrekt. (Ex. fredrik@epost.se, john.doe@mail.com, frida@mail.hem.se)";
            LEAGUE.Start.teamEmail = element.value;
        }

        if(!element.value.match(regExp)){
            LEAGUE.Start.valid = false;
            LEAGUE.Start.errorMsg = errorMsg;
            // console.log("Team Name Error");
        } else {
            LEAGUE.Start.valid = true;
            LEAGUE.Start.errorMsg = "";
            // console.log("Match: " + element.value);
        }
        
    },
    
    createTeam : function(teamName, street, zipcode, city, phone, teamEmail, teamId){
        var userInterface = document.getElementById('userInterface');
        userInterface.innerHTML = "<div id='loader'><span><img src='gif/ajax-loader.gif' border=0/><p class='font18'>Bearbetar data...<p></span></div>";
        LEAGUE.Start.team = new Team(teamName, street, zipcode, city, phone, teamEmail, teamId);
        console.log(LEAGUE.Start.team);
        LEAGUE.Start.teams.push(LEAGUE.Start.team);
        setTimeout(function(){
            LEAGUE.Admin.renderTeam(LEAGUE.Start.team);
        	userInterface.innerHTML = "<div id='loader'><span><img src='gif/valid.gif' border=0/><p class='font18'>Registreringen är genomförd!</p><p class='font14'>Du tas nu vidare till din lagsida.</p></span></div>";
        	setTimeout(function(){
            	userInterface.innerHTML = "";
            	
            	// Har ska man vidare till userInterface.js för att rendera laget
            	LEAGUE.User.renderTeam(LEAGUE.Start.team);
            	
            },1000);
        },1000);
        
        
    },
   
};


window.onload = function(){
    LEAGUE.Start.init();
};