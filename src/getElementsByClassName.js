// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

	var tracker = [];
		
	var main = arguments[1] || document.body;
	if(main.hasChildNodes()){
		var arr = main.childNodes;
		for (var i in arr){
			if(typeof arr[i] === 'object' && arr[i].classList.contains(className)){  
				var m = getElementsByClassName(className,arr[i]);	
				if (m !== undefined) tracker.push(m);
			}
		}					
	}
	else {
		var cl = arguments[1].classList;
		if(typeof cl === 'object' && cl.contains(className)){
			return(arr[i]);
		}
	}
}
	