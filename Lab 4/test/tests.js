var runAllTest = function() {
    
    
    // Testfall 1: Kontrollera rätt format på inmatade värden
    QUnit.test( "Kontroll av format på inmatade värden", function(assert) {

        var done1 = assert.async();
        var done2 = assert.async();
        var done3 = assert.async();
        var done4 = assert.async();
        var done5 = assert.async();
        var done6 = assert.async();
    
        var regExp1 = /^[A-ZÅÄÖ0-9]{1}[A-ZÅÄÖa-zåäö0-9 ]+$/;
        var regExp2 = /^[A-ZÅÄÖ]{1}[A-ZÅÄÖa-zåäö]+\s+[0-9]+([\w]+)*$/;
        var regExp3 = /^[2-9]\d{4}$/;
        var regExp4 = /^[A-ZÅÄÖ]{1}[A-ZÅÄÖa-zåäö ]+$/;
        var regExp5;
        var regExp6 = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
        
    
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
            assert.ok( LEAGUE.Start.teamName.match(regExp1), "Passed! " + LEAGUE.Start.teamName );
            done1();
        }, 500 );
        setTimeout(function() {
            assert.ok( LEAGUE.Start.street.match(regExp2), "Passed! " + LEAGUE.Start.street );
            done2();
        }, 500 );
        setTimeout(function() {
            assert.ok( LEAGUE.Start.zipcode.match(regExp3), "Passed! " + LEAGUE.Start.zipcode );
            done3();
        }, 500 );
        setTimeout(function() {
            assert.ok( LEAGUE.Start.city.match(regExp4), "Passed! " + LEAGUE.Start.city );
            done4();
            }, 500 );
        setTimeout(function() {
            assert.ok( LEAGUE.Start.phone.match(regExp5), "Passed! " + LEAGUE.Start.phone );
            done5();
        }, 500 );
        setTimeout(function() {
            assert.ok( LEAGUE.Start.teamEmail.match(regExp6), "Passed! " + LEAGUE.Start.teamEmail );
            done6();
        }, 500 );
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