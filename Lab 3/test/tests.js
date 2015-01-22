QUnit.test( "Testfall 1: Test av classen Gymnast", function(assert) {
    var gymnast = new Gymnast("Sara Larsson", 203)

    var expected = {
            name: "Sara Larsson",
            id: 203,
        };
    assert.equal(gymnast.getName(), expected.name, "The object returns the name");
    assert.equal(gymnast.getId(), expected.id, "The object returns the id");
});

QUnit.test( "Testfall 2: Test av classen Team", function(assert) {
    var gymnasts = [
		{name: "Erik Svensson", id : 226}, 
		{name: "Sara Larsson", id : 188},
		{name: "Thomas Björk", id : 197}, 
		{name: "Jenny Ahl", id : 256}, 
	];
	
    var team = new Team("FC Calmare", 26, gymnasts)

    var expected = {
            teamName: "FC Calmare",
            teamId: 26,
            gymnasts: [
        		{name: "Erik Svensson", id : 226}, 
        		{name: "Sara Larsson", id : 188},
        		{name: "Thomas Björk", id : 197}, 
        		{name: "Jenny Ahl", id : 256}, 
        	] 
        };
    
    assert.equal(team.getName(), expected.teamName, "The object returns the name");
    assert.equal(team.getId(), expected.teamId, "The object returns the id");
    assert.equal(team.getGymnasts()[0].name, expected.gymnasts[0].name, "The object returns the gymnast name");
    assert.equal(team.getGymnasts()[0].id, expected.gymnasts[0].id, "The object returns the gymnast id");
});

QUnit.test( "Testfall 3: Beräkning av högsta och lägsta värde", function(assert) {
    var gymnastPnts1 = [2, -1, 4, 8, 5];
    var gymnastPnts2 = [5, 6, 4, 11, 7];
    var gymnastPnts3 = [2, 10, 5, 7, 4];
    var gymnastPnts4 = [2, 10, 5, 7, 4]; 

    assert.throws(CalculateGymnastMediumPnt(gymnastPnts1), "ERROR! The point is to low");
    assert.throws(CalculateGymnastMediumPnt(gymnastPnts2), "ERROR! The point is to hig"); 
    assert.equal(CalculateGymnastMediumPnt(gymnastPnts3).minPnt, 2, "The lowerst point is 2."); 
    assert.equal(CalculateGymnastMediumPnt(gymnastPnts4).maxPnt, 10, "The highest point is 10.");
});

QUnit.test( "Testfall 4: Beräkning av medelpoäng", function(assert) {
    var gymnastPnts1 = [7, 9, 5, 10, 4];
    var gymnastPnts2 = [7, 10, 9, 10, 6];
    
    assert.equal(CalculateGymnastMediumPnt(gymnastPnts1).gymnastMediumScore, 7, "The average point is 7.");
    assert.equal(CalculateGymnastMediumPnt(gymnastPnts2).gymnastMediumScore, 8.67, "The average point is 8,67."); 
});


QUnit.test( "Testfall 5: Beräkning av lagets totala poäng", function(assert) {
    var gymnasts1 = [
		{name: "Erik Svensson", id : 226, point: 8}, 
		{name: "Sara Larsson", id : 188, point: 9},
		{name: "Thomas Björk", id : 197, point: 7},
		{name: "Jenny Ahl", id : 256, point: 8}
	]; 
	
	assert.equal(CalcTeamPnt(gymnasts1).teamPnt, 32, "The team total point is 32"); 

});

QUnit.test( "Testfall 6: Beräknar den vinnande gymnasten", function(assert) {
    var gymnasts1 = [
		{name: "Erik Svensson", id : 226, point: 8}, 
		{name: "Sara Larsson", id : 188, point: 9},
		{name: "Thomas Björk", id : 197, point: 7},
		{name: "Jenny Ahl", id : 256, point: 6}
	];
	
	assert.equal(CalcTeamPnt(gymnasts1).gold, "Sara Larsson is the winner with 9 points", CalcTeamPnt(gymnasts1).gold);
    assert.equal(CalcTeamPnt(gymnasts1).silver, "Erik Svensson comes second with 8 points", CalcTeamPnt(gymnasts1).silver);
    assert.equal(CalcTeamPnt(gymnasts1).bronze, "Thomas Björk comes third with 7 points", CalcTeamPnt(gymnasts1).bronze);
});

QUnit.test( "Testfall 7: Beräknar det vinnande laget", function(assert) {
    var gymnasts1 = [
		{name: "Erik Svensson", id : 226, point: 8}, 
		{name: "Sara Larsson", id : 188, point: 9},
		{name: "Thomas Björk", id : 197, point: 7},
		{name: "Jenny Ahl", id : 256, point: 6}
	];
	
	var gymnasts2 = [
		{name: "Mathila Jonsson", id : 334, point: 6}, 
		{name: "Jonas Sjöbom", id : 34, point: 4},
		{name: "Elin Dahlkvist", id : 339, point: 8},
		{name: "Tobias Torfeltd", id : 114, point: 7}
	];
	
	var team1 = new Team("FC Calmare", 26, gymnasts1);
	var team2 = new Team("Nybro IF", 15, gymnasts2);
	
	console.log(CalcTeamPnt(team1.getGymnasts()).teamPnt);
	console.log(CalcTeamPnt(team2.getGymnasts()).teamPnt);
	
	assert.equal(CalcTeamPnt(team1.getGymnasts()).teamPnt, 30, team1.getName() + " is the winner with " + CalcTeamPnt(team1.getGymnasts()).teamPnt) + " poäng";
	assert.equal(CalcTeamPnt(team2.getGymnasts()).teamPnt, 25, team2.getName() + " is the loser with " + CalcTeamPnt(team2.getGymnasts()).teamPnt) + " poäng";
});
