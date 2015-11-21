// Lets create a test function and set a member on its prototype
function foo() {}
foo.prototype.bar = 123;

// Lets create an object using new
var bas = new foo();

// Verify the prototype has been copied
console.log(bas.__proto__ === foo.prototype );
console.log(bas.bar);