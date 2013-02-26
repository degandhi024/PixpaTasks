	toDecimal = function(hex){
		//return parseInt(hex,16);
		var val={'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,
				'9':9,'A':10,'B':11,'C':12,'D':13,'E':14,'F':15};
		hex=hex.toUpperCase();
		if(hex.match(/[0-9A-F]/g)){
			var sum=0,
				i=0;
			while(i<hex.length){
				var s=Math.pow(16,hex.length-i-1);
				sum+=(val[hex[i]]*s);
				i++;
			}
			return sum;
		} else if(hex==''){ return '' } 
		else { return 'NOTaHEX' }
	};