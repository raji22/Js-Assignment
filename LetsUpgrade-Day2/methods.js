//String methods

//substring()
var samp="Welcome";
console.log(samp.substring(1,4));

//slice()
var b="Welcome to my home"
console.log(b.slice(2,5));

//replace
var str = "Visit Microsoft!";
console.log(str.replace("Visit", "Welcome"));


//trim()
var s="       Welcome to my home   "
console.log(s.trim());


//substr()
var sample="Welcome";
console.log(sample.substr(1,4));


//Array Methods

//splice()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);

//slice()
var colors= ["Red", "Orange", "Blue", "Brown", "yellow"];
var res =colors.slice(1, 3);
console.log(res);

//indexOf()
var fruits1 = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
var a = fruits1.indexOf("Apple", 4);
console.log(a);


//lastIndexOf()
var colors1= ["Red", "Orange", "Blue", "Brown", "yellow"];
var pos= colors1.lastIndexOf("Brown");
console.log(pos);

//join()
var x = ["Banana", "Orange", "Apple", "Mango"];
var y=x.join(" and ");
console.log(y);