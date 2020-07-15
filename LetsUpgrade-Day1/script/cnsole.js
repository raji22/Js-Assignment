console.time('Time taken');

var a=10,b=5,c;
c=a+b;
console.log("This is a sample javascript code");
console.log("The result is "+ c);

console.error("This is a error msg");
console.warn("warning msg");

var person1={name:"Ram",age:"24"}
var person2={name:"Sam",age:"34"}
var person3={name:"sanjay",age:"44"}
var person4={name:"RAshok",age:"27"}

console.table({person1, person2, person3, person4});

console.log('%c Custom message','color:Green;')

console.timeEnd('Time taken')