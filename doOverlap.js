
	doOverlap = function(aX,aY,aW,aH,bX,bY,bW,bH){
		var res = false;
		if( (aX<=bX)&&((aX+aW)>bX)){
			if( ((aY<=bY)&&((aY+aH)>bY)) || ((bY<=aY)&&((bY+bH)>aY))){
				res=true;
			}
		} else if( (bX<=aX)&&((bX+bW)>aX)){
			if( ((bY<=aY)&&((bY+bH)>aY)) || ((aY<=bY)&&((aY+aH)>bY))){
				res=true;
			}
		}
		return res;
	}