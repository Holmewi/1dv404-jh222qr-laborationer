//QUnit.config.reorder = false;
//QUnit.config.autostart = false;

var testcase1 = function() {
    
    // Testfall 1: Kontroll av format på inmatade värden vid registrering av lag
    QUnit.test( "Testfall 1: Kontroll av format på inmatade värden vid registrering av lag", function(assert) {
        assert.expect( 6 );
        
        
        var done1 = assert.async();
        var done2 = assert.async();
        var done3 = assert.async();
        var done4 = assert.async();
        var done5 = assert.async();
        var done6 = assert.async();
    
        var regExp1 = /^[A-ZÅÄÖ0-9]{1}[A-ZÅÄÖa-zåäö0-9 ]+$/;
        var regExp2 = /^[A-ZÅÄÖ]{1}[A-ZÅÄÖa-zåäö\s]+\s[0-9]{1,4}[A-ZÅÄÖ]{0,4}$/;
        var regExp3 = /^[2-9]\d{4}$/;
        var regExp4 = /^[A-ZÅÄÖ]{1}[A-ZÅÄÖa-zåäö ]+$/;
        var regExp5 = /^0\d{7,9}$/;
        var regExp6 = /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;
        
    
        LEAGUE.Start.teamName = LEAGUE.Start.teamName.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
        LEAGUE.Start.street = LEAGUE.Start.street.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
        LEAGUE.Start.zipcode = LEAGUE.Start.zipcode.replace(/\s+/g, '');
        LEAGUE.Start.city = LEAGUE.Start.city.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        LEAGUE.Start.phone = LEAGUE.Start.phone.replace(/\s+/g, '');
        //LEAGUE.Start.teamEmail = LEAGUE.Start.teamEmail.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase(); });
        
        if(LEAGUE.Start.phone){
            if(LEAGUE.Start.phone.match(/^\+46/) || LEAGUE.Start.phone.match(/^0046/) || LEAGUE.Start.phone.match(/\D/g)){
                LEAGUE.Start.phone = LEAGUE.Start.phone.replace(/^\+46/, "");
                LEAGUE.Start.phone = LEAGUE.Start.phone.replace(/^0046/, "");
                LEAGUE.Start.phone = LEAGUE.Start.phone.replace(/[()-]/g, "");
            }
            if(LEAGUE.Start.phone.match(/^07/)){
                regExp5 = /^07\d{8}$/;
            } else {
                regExp5 = /^0\d{7,9}$/;
            }
        }
       
       /*
       setTimeout(function() {
            assert.equal( LEAGUE.Start.teamName.match(regExp1), "Passed! " + LEAGUE.Start.teamName );
            done1();
        }, 500 );
        setTimeout(function() {
            assert.equal( LEAGUE.Start.street.match(regExp2), "Passed! " + LEAGUE.Start.street );
            done2();
        }, 500 );
        setTimeout(function() {
            assert.equal( LEAGUE.Start.zipcode.match(regExp3), "Passed! " + LEAGUE.Start.zipcode );
            done3();
        }, 500 );
        setTimeout(function() {
            assert.equal( LEAGUE.Start.city.match(regExp4), "Passed! " + LEAGUE.Start.city );
            done4();
            }, 500 );
        setTimeout(function() {
            assert.equal( LEAGUE.Start.phone.match(regExp5), "Passed! " + LEAGUE.Start.phone );
            done5();
        }, 500 );
        setTimeout(function() {
            assert.equal( LEAGUE.Start.teamEmail.match(regExp6), "Passed! " + LEAGUE.Start.teamEmail );
            done6();
        }, 500 );
        */
       
        setTimeout(function() {
            assert.equal((new RegExp(regExp1)).test(LEAGUE.Start.teamName), true, "TEAM: " + LEAGUE.Start.teamName + " is equal to the regular expression" );
            done1();
        }, 500 );
        setTimeout(function() {
            assert.equal((new RegExp(regExp2)).test(LEAGUE.Start.street), true, "ADDRESS: " + LEAGUE.Start.street + " is equal to the regular expression" );
            done2();
        }, 500 );
        setTimeout(function() {
            assert.equal((new RegExp(regExp3)).test(LEAGUE.Start.zipcode), true, "ZIPCODE: " + LEAGUE.Start.zipcode + " is equal to the regular expression" );
            done3();
        }, 500 );
        setTimeout(function() {
            assert.equal((new RegExp(regExp4)).test(LEAGUE.Start.city), true, "CITY: " + LEAGUE.Start.city + " is equal to the regular expression" );
            done4();
            }, 500 );
        setTimeout(function() {
            assert.equal((new RegExp(regExp5)).test(LEAGUE.Start.phone), true, "PHONE: " + LEAGUE.Start.phone + " is equal to the regular expression" );
            done5();
        }, 500 );
        setTimeout(function() {
            assert.equal((new RegExp(regExp6)).test(LEAGUE.Start.teamEmail), true, "E-MAIL: " + LEAGUE.Start.teamEmail + " is equal to the regular expression" );
            done6();
        }, 500 );
        
        
        
        
    });
};

var testcase2 = function() {

    // Testfall 2: Kontroll av format på inmatade värden vid registrering av gymnast
    QUnit.test( "Testfall 2: Kontroll av format på inmatade värden vid registrering av gymnast", function(assert) {
        for(var g = 1; g <= LEAGUE.User.count; g += 1){
            LEAGUE.User.surname = document.getElementById('surname' + g).value;
            LEAGUE.User.lastname = document.getElementById('lastname' + g).value;
            LEAGUE.User.personcode = document.getElementById('personcode' + g).value;
            LEAGUE.User.memberEmail = document.getElementById('memberEmail' + g).value;
                
            //var done1 = assert.async();
            //var done2 = assert.async();
            //var done3 = assert.async();
            //var done4 = assert.async();
        ///^[A-ZÅÄÖ0-9]{1}[A-ZÅÄÖa-zåäö0-9 ]+$/;
            var regExp1 = /^[A-ZÅÄÖ0-9]{1}[a-zåäö]+(([\'\-\s][a-zåäöA-ZÅÄÖ])?[a-zåäöA-ZÅÄÖ]*)+$/;
            var regExp2 = /^[a-zåäöA-ZÅÄÖ]+(([\'\-\s][a-zåäöA-ZÅÄÖ])?[a-zåäöA-ZÅÄÖ]*)*$/;
            var regExp3 = /\b(((20)((0[0-9])|(1[0-1])))|(([1][^0-8])?\d{2}))((0[1-9])|1[0-2])((0[1-9])|(2[0-9])|(3[01]))[-+]?\d{4}[,.]?\b/;
            var regExp4 = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
            
            //console.log(LEAGUE.User.surname);
            LEAGUE.User.surname = LEAGUE.User.surname.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
            LEAGUE.User.lastname = LEAGUE.User.lastname.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
            LEAGUE.User.memberEmail = LEAGUE.User.memberEmail.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase(); });
            //console.log(LEAGUE.User.surname);
            
            //setTimeout(function() {
                assert.equal((new RegExp(regExp1)).test(LEAGUE.User.surname), true, "SURNAME: " + LEAGUE.User.surname + " is equal to the regular expression" );
                //done1();
            //}, 500 );
            //setTimeout(function() {
                assert.equal((new RegExp(regExp2)).test(LEAGUE.User.lastname), true, "LASTNAME: " + LEAGUE.User.lastname + " is equal to the regular expression" );
                //done2();
            //}, 500 );
            //setTimeout(function() {
                assert.equal((new RegExp(regExp3)).test(LEAGUE.User.personcode), true, "CODE: " + LEAGUE.User.personcode + " is equal to the regular expression" );
                //done3();
            //}, 500 );
            //setTimeout(function() {
                assert.equal((new RegExp(regExp4)).test(LEAGUE.User.memberEmail), true, "E-MAIL: " + LEAGUE.User.memberEmail + " is equal to the regular expression" );
                //done4();
            //}, 500 );
        }
    });
    
};

var testcases = function() {

    // Testfall 3: Kontrollera rätt format på inmatade värden
    QUnit.test( "Testfall 3: Beräkning av högsta och lägsta värde", function(assert) {
        var gymnastPnts1 = [2, -1, 4, 8, 5];
        var gymnastPnts2 = [5, 6, 4, 11, 7];
        var gymnastPnts3 = [2, 10, 5, 7, 4];
        var gymnastPnts4 = [2, 10, 5, 7, 4]; 

        assert.throws(CalcGymnastPnt(gymnastPnts1), "ERROR! The point is to low");
        assert.throws(CalcGymnastPnt(gymnastPnts2), "ERROR! The point is to hig"); 
        assert.equal(CalcGymnastPnt(gymnastPnts3).minPnt, 2, "The lowerst point is 2."); 
        assert.equal(CalcGymnastPnt(gymnastPnts4).maxPnt, 10, "The highest point is 10.");
    });
    
    // Testfall 4: Kontrollera rätt format på inmatade värden
    QUnit.test( "Testfall 4: Beräkning av medelpoäng", function(assert) {
        var gymnastPnts1 = [7, 9, 5, 10, 4];
        var gymnastPnts2 = [7, 10, 9, 10, 6];
        
        assert.equal(CalcGymnastPnt(gymnastPnts1).averagePnt, 7, "The average point is 7.");
        assert.equal(CalcGymnastPnt(gymnastPnts2).averagePnt, 8.67, "The average point is 8,67."); 
    });
    
    
    // Testfall 5: Beräkning av lagets totala poäng
    QUnit.test( "Testfall 5: Beräkning av lagets totala poäng", function(assert) {
        var gymnasts1 = [
    		{surname: "Erik", lastname: "Svensson", personcode: "9011272933", memberEmail: "erik@mail.se", point: 8}, 
    		{surname: "Sara", lastname: "Eriksson", personcode: "8404123104", memberEmail: "sara@mail.se", point: 9},
    		{surname: "Per", lastname: "Andersson", personcode: "8702282932", memberEmail: "per@mail.se", point: 7},
    		{surname: "Elin", lastname: "Åkesson", personcode: "9101080405", memberEmail: "elin@mail.se", point: 8}
    	]; 
    	
    	assert.equal(CalcTeamPnt(gymnasts1).teamPnt, 32, "The team total point is 32"); 
    
    });
    
    // Testfall 6: Beräkning av lagets totala poäng
    QUnit.test( "Testfall 6: Beräknar den vinnande gymnasten", function(assert) {
        var gymnasts1 = [
    		{surname: "Erik", lastname: "Svensson", personcode: "9011272933", memberEmail: "erik@mail.se", point: 8}, 
    		{surname: "Sara", lastname: "Eriksson", personcode: "8404123104", memberEmail: "sara@mail.se", point: 9},
    		{surname: "Per", lastname: "Andersson", personcode: "8702282932", memberEmail: "per@mail.se", point: 7},
    		{surname: "Elin", lastname: "Åkesson", personcode: "9101080405", memberEmail: "elin@mail.se", point: 6}
    	];
    	
    	assert.equal(CalcTeamPnt(gymnasts1).gold, "Sara Eriksson is the winner with 9 points", CalcTeamPnt(gymnasts1).gold);
        assert.equal(CalcTeamPnt(gymnasts1).silver, "Erik Svensson comes second with 8 points", CalcTeamPnt(gymnasts1).silver);
        assert.equal(CalcTeamPnt(gymnasts1).bronze, "Per Andersson comes third with 7 points", CalcTeamPnt(gymnasts1).bronze);
    });
    
};


var clear = function(details){
    //var lista = document.getElementById('qunit');
    //var html = div.innerHTML;
    //div = null;
    

    //var lista = document.getElementById("qunit-tests");
    //lista.innerHTML = "<ol id='qunit-tests'></ol>";
    

    //var div = document.getElementById("qunit");
    //var html = div.innerHTML;
    //div = "";
    //return html;
};

