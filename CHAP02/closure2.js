function outerFunction(arg){
	var variableInOuterFunction = arg;
	return function(){
		console.log(variableInOuterFunction);
	}	
}

var innerFunction = outerFunction('hello closure');

// note that outer function has returned
innerFunction();