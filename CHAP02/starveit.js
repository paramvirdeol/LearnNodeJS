// utility function
function fibonacci(n){
	if(n<2) return n;
	else
	{
		return fibonacci(n-2) + fibonacci(n-1);
	}
}

// setup the timer
console.time('timer');

setTimeout(function(){
	console.timeEnd('timer'); // 
},1000);

// start the long running function
fibonacci(44);