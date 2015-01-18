function CalcGymnastPnt(gymnastPnts){
    
    // gymnastPnts är en array med fem värden som matas in av sekreteraren för varje gren
    
    try{
        
        var points;
        
        var totalPnts = 0;
        var averagePnt = 0;
            
        // Kollar om poängen är inom spannet 0-10
        for (var i = 0; i < gymnastPnts.length; i++) {
    		if(gymnastPnts[i] > 10 || gymnastPnts[i] < 0){
    			throw new Error("ERROR! The point " + gymnastPnts[i] + " is out of range."); 
    		}
    	}
        
        function sortNumber(a,b) {
            return a - b;
        }
        
        // Sorterar arrayen och speglar den
        gymnastPnts = gymnastPnts.sort(sortNumber);
        gymnastPnts = gymnastPnts.reverse();
        console.log("Sorted and reversed: " + gymnastPnts);
        
        // Sätter maxpoäng och minsta poäng
        var minPnt = gymnastPnts[gymnastPnts.length - 1];
    	var maxPnt = gymnastPnts[0];
    	console.log("Min: " + minPnt);
    	console.log("Max: " + maxPnt);
            
        // Tar bort den högsta och lägsta poängen
        gymnastPnts.splice(0, 1);
        gymnastPnts.splice(gymnastPnts.length - 1, 1);
        console.log("Gymnast Spliced points: " + gymnastPnts);
        
        // Adderar värdena i arrayen
        totalPnts = gymnastPnts.reduce(function(a,b){return a+b;});
        console.log("Gymnast Added Score: " + totalPnts);
            
        // Räknar ut medelvärdet av arrayen och avrundar till två decimaler
        averagePnt = Math.round((totalPnts / gymnastPnts.length) * 100) / 100;
        console.log("Gymnast Medium Score: " + averagePnt);
        
        points = {minPnt : minPnt, maxPnt : maxPnt, averagePnt : averagePnt};
        
        return points;
    }
	catch(error){
		console.log(error.message); 
	}
}

function CalcTeamPnt(teamGymnasts){
    
    // teamPnts är en array med samtliga gymnaster i laget
    // {surname: "Förnamn", lastname : "Efternamn", personcode : "Personnummer", memberEmail : "e-post", point : Medelpoäng}, 
    
    try{
        var scores = [];
        var points;
        var teamPnt = 0;
        var gold, silver, bronze;
        
        teamGymnasts.forEach(function(member, index){
			scores[index] = member.point; 
		}); 
		
		function sortNumber(a,b) {
            return a - b;
        }
        
		scores.sort(sortNumber); 

		console.log(scores);
		
		teamGymnasts.forEach(function(member){

    		if(member.point == scores[scores.length - 1]){
    			gold = member.surname + " " + member.lastname + " is the winner with " + member.point + " points";  
    		}
    		if(member.point == scores[scores.length - 2]){
    			silver = member.surname + " " + member.lastname + " comes second with " + member.point + " points";  
    		}
    		if(member.point == scores[scores.length - 3]){
    			bronze = member.surname + " " + member.lastname + " comes third with " + member.point + " points";  
    		}
    	}); 
		
		// Adderar värdena i arrayen
        teamPnt = scores.reduce(function(a,b){return a+b;});
        console.log("Team Added Score: " + teamPnt);
		
        // Sätter maxpoäng och minsta poäng
        // Här inser jag nyttan med att skicka med en array med gymnast-objekt
        // På så vis kan jag enklare lista vilken gymnast som är bäst
        //var minPnt = teamPnts[teamPnts.length - 1];
    	//var maxPnt = teamPnts[0];

    	console.log(gold);
        
        
        points = {teamPnt : teamPnt, gold : gold, silver : silver, bronze : bronze};
        
        return points;
    }
	catch(error){
		console.log(error.message); 
	}
}