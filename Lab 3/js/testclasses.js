function CalculateGymnastMediumPnt(gymnastPnts){
    
    // gymnastPnts är en array med fem värden som matas in av sekreteraren för varje gren
    
    try{
        
        var gymnastAddedScore = 0;
        var gymnastMediumScore = 0;
        var points;

        function sortNumber(a,b) {
            return a - b;
        }

        gymnastPnts.sort(sortNumber);
        gymnastPnts.reverse();
        console.log(gymnastPnts);
        
        // Sätter maxpoäng och minsta poäng
        var minPnt = gymnastPnts[gymnastPnts.length - 1];
    	var maxPnt = gymnastPnts[0];
    	
        // Tar bort den högsta och lägsta poängen
        gymnastPnts.splice(0, 1);
        gymnastPnts.splice(3, 4);
        console.log(gymnastPnts);
        
        gymnastAddedScore = gymnastPnts.reduce(function(a,b){return a+b;});
        console.log(gymnastAddedScore);
        
        gymnastMediumScore = Math.round((gymnastAddedScore / gymnastPnts.length) * 100) / 100;
        console.log("Gymnast Medium Score: " + gymnastMediumScore);
        
        points = {minPnt : minPnt, maxPnt : maxPnt, gymnastMediumScore : gymnastMediumScore};
        
        return points;
    }
	catch(error){
		console.log(error.message); 
	}
}

function CalcTeamPnt(teamGymnasts){
    
    // teamGymnasts är en array med samtliga gymnaster i laget

    
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
    			gold = member.name + " is the winner with " + member.point + " points";  
    		}
    		if(member.point == scores[scores.length - 2]){
    			silver = member.name + " comes second with " + member.point + " points";  
    		}
    		if(member.point == scores[scores.length - 3]){
    			bronze = member.name + " comes third with " + member.point + " points";  
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