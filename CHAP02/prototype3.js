// Lets create a test function and set a member on its prototype
function foo(){};
foo.prototype.bar = 123;

// Lets create two instances
var bas = new foo();
var qux = new foo();

// Show original value
console.log(bas.bar);
console.log(qux.bar);

// Modify prototype
foo.prototype.bar = 456;

// All instances changed
console.log(bas.bar);
console.log(qux.bar);
