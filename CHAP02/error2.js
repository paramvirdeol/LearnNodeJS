try{
	setTimeout(function(){
		console.log('About to throw an error');
		throw new Error('Error thrown');
	});
}
catch(e){
	console.log('I will never execute!');
}

console.log('I am outside the try block');