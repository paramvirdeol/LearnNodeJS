function longRunningOperation(callback){
	// simulate long running operation
	setTimeout(callback, 3000);
}

function userClicked(){
	console.log('starting a long operation');
	longRunningOperation(function(){
		console.log('ending a long operation');
	});
}

userClicked();