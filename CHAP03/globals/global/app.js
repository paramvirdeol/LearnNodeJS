console.log(console === global.console);
console.log(setTimeout === global.setTimeout);
console.log(process === global.process);

// Add something to global
require('./addToGlobal');
console.log(something);