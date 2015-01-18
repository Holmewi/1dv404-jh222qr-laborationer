"use strict";
var LEAGUE = LEAGUE || {};

LEAGUE.User = {
    team : undefined,
    gymnast : {},
    gymnasts : [],
    valid : true,
    errorMsg : "",
    count : 0,
    submit : document.createElement('input'),
    
    surname : undefined,
    lastname : undefined,
    personcode : undefined,
    memberEmail : undefined,
    memberId : undefined,

    renderTeam : function(team){
        var userView = document.getElementById('userInterface');
        
        userView.innerHTML = "<h3>Lagsida för lagledaren</h3>";
        userView.innerHTML += "<hr>";
        
        userView.innerHTML += "<h4>" + team.getTeamName() + "</h4>";
        userView.innerHTML += "<p class='teamInfo'><span class='teamTitle'>Adress:</span><span class='teamInfo'>" + team.toString() + "</span></p>";
        userView.innerHTML += "<p class='teamInfo'><span class='teamTitle'>Telefon:</span><span class='teamInfo'>" + team.getPhone() + "</span></p>";
        userView.innerHTML += "<p class='teamInfo'><span class='teamTitle'>E-post:</span><span class='teamInfo'>" + team.getEmail() + "</span></p>";
        userView.innerHTML += "<hr>";
        userView.innerHTML += "<h3>Gymnaster</h3>";
        var gymnasts = document.createElement('div');
        gymnasts.setAttribute('id', 'gymnastList');
        userView.appendChild(gymnasts);
        
        var addMember = document.createElement('input');
        addMember.setAttribute('type', 'button');
        addMember.setAttribute('name', 'Lägg till gymnast');
        addMember.setAttribute('id', 'addButton');
        addMember.setAttribute('value', 'Lägg till gymnast');
        addMember.setAttribute('class', 'button');
        
        userView.appendChild(addMember);
        
        var form = document.createElement('form');
        form.setAttribute('id', 'addMembers');
        userView.appendChild(form);
        
        var error = document.createElement('p');
        error.setAttribute('id', 'error');
        userView.appendChild(error);
        
        var formWrap = document.createElement('div');
        formWrap.setAttribute('id', 'formWrap');
        form.appendChild(formWrap);
            
        addMember.onclick = function(){
            LEAGUE.User.createForm(formWrap, form);
            console.log(LEAGUE.User.count);

        };
        
        LEAGUE.User.submit.onclick = function(){
            console.log("Gymnasts added!");
            LEAGUE.User.submit.disabled = true;
            LEAGUE.User.validate(error, team);
            LEAGUE.User.submit.disabled = false;
        };
        
    },
    
    createForm : function(formWrap, form){
        LEAGUE.User.count += 1;
        
        var article = document.createElement('article');
        formWrap.appendChild(article);
        article.setAttribute('class', 'addMemberWrap');
        article.innerHTML += "<div class='addMemberDiv1'><p class='addTitle'>Förnamn:</p><input type='text' name='Förnamn' id='surname" + LEAGUE.User.count + "' class='memberReg surname' value='Erik'/></div>";
        article.innerHTML += "<div class='addMemberDiv2'><p class='addTitle'>Efternamn:</p><input type='text' name='Efternamn' id='lastname" + LEAGUE.User.count + "' class='memberReg lastname' value='Nidaros'/></div>";
        article.innerHTML += "<div class='addMemberDiv3'><p class='addTitle'>Personnr:</p><input type='text' name='Personnr' id='personcode" + LEAGUE.User.count + "' class='memberReg personcode' value='9112034523' maxlength='10'/></div>";
        article.innerHTML += "<div class='addMemberDiv4'><p class='addTitle'>E-post:</p><input type='text' name='Epost' id='memberEmail" + LEAGUE.User.count + "' class='memberReg memberEmail' value='erik.nidaros@kalmarff.com'/></div>";

        var minusButton = document.createElement("input");
        minusButton.type = "button";
        minusButton.setAttribute("class", "minusButton");
        article.appendChild(minusButton);
        
        if(LEAGUE.User.count === 1){
            LEAGUE.User.addButton(form);
        }

        minusButton.onclick = function(){
            LEAGUE.User.count -= 1;
            article.parentNode.removeChild(article);
            if(LEAGUE.User.count <= 0){
                LEAGUE.User.deleteButton(form);
            }
        };
    },
    
    addButton : function(form){
        console.log('SKAPAR KNAPP');
        LEAGUE.User.submit.setAttribute('type', 'button');
        LEAGUE.User.submit.setAttribute('id', 'addGymnastButton');
        LEAGUE.User.submit.setAttribute('value', 'Bekräfta');
        form.appendChild(LEAGUE.User.submit);
    },
    
    deleteButton : function(form){
        console.log('TAR BORT KNAPP');
        LEAGUE.User.submit.parentNode.removeChild(LEAGUE.User.submit);
    },
    
    validate : function(error, team){
        clear();
        testcase2();

        
        var memberReg = document.getElementsByClassName("memberReg");

        for(var i = 0; i <  memberReg.length; i += 1){
            memberReg[i].setAttribute('class', 'memberReg');
            for(var j = 1; j <= LEAGUE.User.count; j += 1){
                if(memberReg[i].id === 'surname' + j){
                    memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' surname');
                }
                if(memberReg[i].id === 'lastname' + j){
                    memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' lastname');
                }
                if(memberReg[i].id === 'personcode' + j){
                    memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' personcode');
                }
                if(memberReg[i].id === 'memberEmail' + j){
                    memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' memberEmail');
                }
            }
            
            // console.log(memberReg[i].value);
            if(!memberReg[i].value){
                // console.log("FEL!");
                memberReg[i].focus();
                
                
                for(var k = 1; k <= LEAGUE.User.count; k += 1){
                    console.log(memberReg[i].id);
                    if(memberReg[i].id === 'surname' + k){
                        memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' surname error');
                    }
                    if(memberReg[i].id === 'lastname' + k){
                        memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' lastname error');
                    }
                    if(memberReg[i].id === 'personcode' + k){
                        memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' personcode error');
                    }
                    if(memberReg[i].id === 'memberEmail' + k){
                        memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' memberEmail error');
                    }
                }
                
                error.style.display = "inline-block";
                error.innerHTML = "*Du måste fylla i " + memberReg[i].name;
                LEAGUE.User.valid = false;
                return false;
            } else {
                LEAGUE.User.regexTest(memberReg[i]);
                // console.log(LEAGUE.Start.valid);
                if(LEAGUE.User.valid === false){
                    memberReg[i].focus();
                    memberReg[i].setAttribute('class', memberReg[i].getAttribute('class') + ' error');
                
                    error.style.display = "inline-block";
                    error.innerHTML = "*" + LEAGUE.User.errorMsg;
                    break;
                } else {

                }
            }
        error.style.display = "none";
        error.innerHTML = "";
        }
        
        
        if(LEAGUE.User.valid === true){
            for(var h = 1; h <= LEAGUE.User.count; h += 1){
                LEAGUE.User.surname = document.getElementById('surname' + h).value;
                LEAGUE.User.lastname = document.getElementById('lastname' + h).value;
                LEAGUE.User.personcode = document.getElementById('personcode' + h).value;
                LEAGUE.User.memberEmail = document.getElementById('memberEmail' + h).value;
                LEAGUE.User.memberId = team.getTeamId() +""+ LEAGUE.User.gymnasts.length + h;
        
                console.log(LEAGUE.User.surname + ", " + LEAGUE.User.lastname + ", " + LEAGUE.User.personcode + ", " + LEAGUE.User.memberEmail + ", " + LEAGUE.User.memberId);

                LEAGUE.User.createGymnast(LEAGUE.User.surname, LEAGUE.User.lastname, LEAGUE.User.personcode, LEAGUE.User.memberEmail, LEAGUE.User.memberId, team, h);
            }
        }
        
    },
    
    regexTest : function(element) {
        var regExp;
        var errorMsg;
        
        if(element.name === 'Förnamn'){
            regExp = /^[a-zåäöA-ZÅÄÖ]+(([\'\-\s][a-zåäöA-ZÅÄÖ])?[a-zåäöA-ZÅÄÖ]*)*$/;
            element.value = element.value.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
            errorMsg = "Fel format! Förnamnet får enbart skrivas med bokstäver mellanslag samt bindesstreck. (Ex. Nils-Erik, Al Jaffar)";
            LEAGUE.User.surname = element.value;
        }
        if(element.name === 'Efternamn'){
            regExp = /^[a-zåäöA-ZÅÄÖ]+(([\'\-\s][a-zåäöA-ZÅÄÖ])?[a-zåäöA-ZÅÄÖ]*)*$/;
            element.value = element.value.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
            errorMsg = "Fel format! Efternamnet får enbart skrivas med bokstäver mellanslag samt bindesstreck. (Ex. Zeta-Jones, Paul Jones)";
            LEAGUE.User.lastname = element.value;
        }
        if(element.name === 'Personnr'){
            regExp = /\b(((20)((0[0-9])|(1[0-1])))|(([1][^0-8])?\d{2}))((0[1-9])|1[0-2])((0[1-9])|(2[0-9])|(3[01]))[-+]?\d{4}[,.]?\b/;
            //element.value = element.value.slice(0, 6) + "-" + element.value.slice(6);
            errorMsg = "Fel format! Personnumret får enbart skrivas med siffror skiljt med ett bindesstreck. (Format. XXXXXX-XXXX)";
            LEAGUE.User.personcode = element.value;
        }
        if(element.name === 'Epost'){
            regExp = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
            element.value = element.value.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase(); });
            errorMsg = "Fel format! E-postadressen är ej korrekt. (Ex. fredrik@epost.se, john.doe@mail.com, frida@mail.hem.se)";
            LEAGUE.User.memberEmail = element.value;
        }

        if(!element.value.match(regExp)){
            LEAGUE.User.valid = false;
            LEAGUE.User.errorMsg = errorMsg;
            console.log("ERROR");
        } else {
            LEAGUE.User.valid = true;
            LEAGUE.User.errorMsg = "";
            console.log("VALID");
        }
    },
    
    createGymnast : function(surname, lastname, personcode, memberEmail, memberId, team, h){
        // var gymnastList = document.getElementById('gymnastList');
        
        LEAGUE.User.gymnast = new Gymnast(surname, lastname, personcode, memberEmail, memberId);
        LEAGUE.User.gymnasts.push(LEAGUE.User.gymnast);
        
        
        // gymnastList.innerHTML += "<div class='member'><p><span class='memberName'>" + LEAGUE.User.gymnast.toString() + "</span><span class='memberCode'>" + code + "</span><span class='memberEmail'>" + LEAGUE.User.gymnast.getEmail() + "</span></p></div>";
        // console.log(LEAGUE.User.gymnast);
        
        
        
        
        // console.log(LEAGUE.User.gymnasts.length + ", " + LEAGUE.User.count);
        
        if(h === LEAGUE.User.count){
            LEAGUE.User.count = 0;
            
            team.gymnasts = LEAGUE.User.gymnasts;
            console.log(team);
            
            LEAGUE.User.renderGymnasts(team);
            LEAGUE.Admin.renderGymnasts(team);
            
            var formWrap = document.getElementById('formWrap');
            var button = document.getElementById('addGymnastButton');
            //formWrap.innerHTML = "<div id='loader'><span><img src='gif/ajax-loader.gif' border=0/><p class='font18'>Bearbetar data...<p></span></div>";
            button.parentNode.removeChild(button);
            

            formWrap.innerHTML = "";
            
            //formWrap.innerHTML = "<div id='loader'><span><img src='gif/valid.gif' border=0/><p class='font18'>Registreringen är genomförd!</p><p class='font14'>Du tas nu vidare till din lagsida.</p></span></div>";
        }
    },
    
    renderGymnasts : function(team) {
        var gymnastList = document.getElementById('gymnastList');
        gymnastList.innerHTML = "";
        
        console.log(team.gymnasts.length);
        console.log(team.gymnasts[0].toString());
        
        for(var i = 0; i < team.gymnasts.length; i += 1){
            var code = team.gymnasts[i].getPersoncode();
            code = code.slice(0, 6) + "-" + code.slice(6);
            gymnastList.innerHTML += "<div class='member'><p><span class='memberName'>" + team.gymnasts[i].toString() + "</span><span class='memberCode'>" + code + "</span><span class='memberEmail'>" + team.gymnasts[i].getEmail() + "</span></p></div>";
        }
        
    }
    
    
};