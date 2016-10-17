// TypeScript automatically allows us to bundle all of our files into one single file through use of Namespaces and Modules
// this way, we do not need a module loader.

// we can put all of our modules into one file by adding the --outFile flag to tsc and providing a name to the file (tsc --outFile app.js)

// in this case, we need to add files in order (tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts)

// not, we only need to output app.js in our html page

// now we just need to specify namespace imports

// *** TS has its own import syntax for namespaces ***

// the below are not comments...but rather imports

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

const PI = 2.99 // wrong, but no errors

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(3));
console.log(PI); // this PI const is registered on the global scope, which does not interefere with the namespace

// then I had to run "tsc app.ts --outFile app.js" to add the outFile

// Note: you can have nested namespaces!!!

// This can be kind of hard to clearly see which file has which dependencies, which makes it hard to manage