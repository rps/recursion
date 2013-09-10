// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
	var ans = "";
	if(typeof obj === undefined){
		return;
	}
	else if (obj === null){
		return 'null';
	}
	else if(typeof obj === 'object'){	
	//array
		if(Array.isArray(obj)){
			if(obj.length === 0){
				return '[]';
			}
			ans = ans.concat('[');
			for(var i = 0;i<obj.length;i++){
				ans = ans.concat(stringifyJSON(obj[i])+',');
			}
			return ans.slice(0,-1).concat(']');
		}
	//object or null
		else {
			if(Object.keys(obj).length === 0) return '{}';
			ans = ans.concat('{');
			for (var keys in obj){
				ans = ans.concat(stringifyJSON(keys)+":"+stringifyJSON(obj[keys])+',')
			}
			if(ans.indexOf('undefined')>-1){
				return '{}';
			}
			return ans.slice(0,-1).concat('}');
		}
	}
	else if(typeof obj === 'string'){
		return ('"'+obj+'"');
	}
	else if (typeof obj === 'boolean' || typeof obj === 'number'){
		return String(obj);
	}
	else {
		return;
	}
	
}