var testcase1 = function() {
    
    // Testfall 1: Kontrollera rätt format på inmatade värden
    QUnit.test( "Testfall 1: Kontroll av format på inmatade värden", function(assert) {

        var done1 = assert.async();
        var done2 = assert.async();
        var done3 = assert.async();
        var done4 = assert.async();
        var done5 = assert.async();
        var done6 = assert.async();
    
        var regExp1 = /^[A-ZÅÄÖ0-9]{1}[A-ZÅÄÖa-zåäö0-9 ]+$/;
        var regExp2 = /^[A-ZÅÄÖ]{1}[a-zåäö ]+\s[0-9]{1,4}[A-ZÅÄÖ]{0,4}$/;
        var regExp3 = /^[2-9]\d{4}$/;
        var regExp4 = /^[A-ZÅÄÖ]{1}[A-ZÅÄÖa-zåäö ]+$/;
        var regExp5 = /^0\d{7,9}$/;
        var regExp6 = /^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$/;
        
    
        LEAGUE.Start.teamName = LEAGUE.Start.teamName.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
        LEAGUE.Start.street = LEAGUE.Start.street.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
        LEAGUE.Start.zipcode = LEAGUE.Start.zipcode.replace(/\s+/g, '');
        LEAGUE.Start.city = LEAGUE.Start.city.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        LEAGUE.Start.phone = LEAGUE.Start.phone.replace(/\s+/g, '');
        LEAGUE.Start.teamEmail = LEAGUE.Start.teamEmail.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase(); });
        
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
       
        setTimeout(function() {
            assert.deepEqual((new RegExp(regExp1)).test(LEAGUE.Start.teamName), true );
            done1();
        }, 500 );
        setTimeout(function() {
            assert.deepEqual((new RegExp(regExp2)).test(LEAGUE.Start.street), true );
            done2();
        }, 500 );
        setTimeout(function() {
            assert.deepEqual((new RegExp(regExp3)).test(LEAGUE.Start.zipcode), true );
            done3();
        }, 500 );
        setTimeout(function() {
            assert.deepEqual((new RegExp(regExp4)).test(LEAGUE.Start.city), true );
            done4();
            }, 500 );
        setTimeout(function() {
            assert.deepEqual((new RegExp(regExp5)).test(LEAGUE.Start.phone), true );
            done5();
        }, 500 );
        setTimeout(function() {
            assert.deepEqual((new RegExp(regExp6)).test(LEAGUE.Start.teamEmail), true );
            done6();
        }, 500 );
    });
};

var testcase2 = function() {

    // Testfall 2: Kontrollera rätt format på inmatade värden
    QUnit.test( "Testfall 2: Kontroll av format på inmatade värden", function(assert) {
        for(var g = 1; g <= LEAGUE.User.count; g += 1){
            LEAGUE.User.surname = document.getElementById('surname' + g).value;
            LEAGUE.User.lastname = document.getElementById('lastname' + g).value;
            LEAGUE.User.personcode = document.getElementById('personcode' + g).value;
            LEAGUE.User.memberEmail = document.getElementById('memberEmail' + g).value;
                
            //var done1 = assert.async();
            //var done2 = assert.async();
            //var done3 = assert.async();
            //var done4 = assert.async();
        
            var regExp1 = /^[a-zåäöA-ZÅÄÖ]+(([\'\-\s][a-zåäöA-ZÅÄÖ])?[a-zåäöA-ZÅÄÖ]*)*$/;
            var regExp2 = /^[a-zåäöA-ZÅÄÖ]+(([\'\-\s][a-zåäöA-ZÅÄÖ])?[a-zåäöA-ZÅÄÖ]*)*$/;
            var regExp3 = /\b(((20)((0[0-9])|(1[0-1])))|(([1][^0-8])?\d{2}))((0[1-9])|1[0-2])((0[1-9])|(2[0-9])|(3[01]))[-+]?\d{4}[,.]?\b/;
            var regExp4 = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
            
            //console.log(LEAGUE.User.surname);
            LEAGUE.User.surname = LEAGUE.User.surname.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
            LEAGUE.User.lastname = LEAGUE.User.lastname.replace(/[A-ZÅÄÖa-zåäö]\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1); });
            LEAGUE.User.memberEmail = LEAGUE.User.memberEmail.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase(); });
            //console.log(LEAGUE.User.surname);
            
            //setTimeout(function() {
                assert.equal((new RegExp(regExp1)).test(LEAGUE.User.surname), true );
                //done1();
            //}, 500 );
            //setTimeout(function() {
                assert.equal((new RegExp(regExp2)).test(LEAGUE.User.lastname), true );
                //done2();
            //}, 500 );
            //setTimeout(function() {
                assert.equal((new RegExp(regExp3)).test(LEAGUE.User.personcode), true );
                //done3();
            //}, 500 );
            //setTimeout(function() {
                assert.equal((new RegExp(regExp4)).test(LEAGUE.User.memberEmail), true );
                //done4();
            //}, 500 );
        }
    });
    
};


var clear = function(){
    //var div = document.getElementById('qunit');
    //var html = div.innerHTML;
    //div = null;
    
    
    var lista = document.getElementById("qunit-tests");
    lista.innerHTML = "";

    //return html;
};