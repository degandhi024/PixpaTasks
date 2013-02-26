	roundIt = function(n){
		if(!isNaN(parseFloat(n)) && parseFloat(n) > 0){
			var num=n.toString().split('.')[0],
				dec=n.toString().split('.')[1];
			if(dec){
				var	i=dec.length-1,
					flag=0;
				while(i>=0){
					var nt = dec[i];
					if(flag) nt++;
					if(nt>=5){
						flag=1;
						if(i==0) num++;
					}
					i--;
				}
			}
			return parseFloat(num);
		} else if(n=='') { return ''; }
		else { return NaN; }
	};
