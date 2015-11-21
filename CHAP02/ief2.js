// create an immediately executing function to create a new variable scope.

var foo = 123;
if(true){
	var foo = 456;
}

console.log(foo); // 456