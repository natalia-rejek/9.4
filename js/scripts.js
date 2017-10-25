function drawTree (i) {
    
	for (var i = 0; i <= 5; i++){
 
		var star = '';
          
		for (var j = 1; j <= i; j++){
        
			star = star + '*';
      
		}
      
		console.log(star);
    
	}  

}

console.log (drawTree (5));
