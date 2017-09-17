//variable declaration can be done using var or let
//var scope in Javascript is tied to the nearest function defined.
//let scope only in the nearest block instead function.
//let scope lagi kecik than var
//use let untuk declare variable in typesript
var number = 20;
var count = 2;
count = 'Faiz'; //in typescript cannot change type of var. but can compile sbb javascript boleh.
// but it's better to not do that.
//let genericType; //boleh tak declare type, dia jadi any.
var genericType; //it's better to explicitly declare with type. Mcm dalam Java.
genericType = 'Ni string';
//other types in Typescript.
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var taklehUbah = 65;
var COLLECTIONOFCONSTANT;
(function (COLLECTIONOFCONSTANT) {
    COLLECTIONOFCONSTANT[COLLECTIONOFCONSTANT["low"] = 1] = "low";
    COLLECTIONOFCONSTANT[COLLECTIONOFCONSTANT["medium"] = 2] = "medium";
    COLLECTIONOFCONSTANT[COLLECTIONOFCONSTANT["high"] = 3] = "high";
    COLLECTIONOFCONSTANT[COLLECTIONOFCONSTANT["extrem"] = 4] = "extrem";
})(COLLECTIONOFCONSTANT || (COLLECTIONOFCONSTANT = {}));
;
var severityLevel = COLLECTIONOFCONSTANT.high;
var a = 'faiz';
a.endsWith('z'); //endsWith is a method untuk string. *but only available on ES6
//let typeAssertion = (<string>d).endsWith('z');  //two ways of type assertion (override Typescript punya automatic type definitions)
//let typeAssertionv2 = (d as string).endsWith('z');
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
var arrowFunc = function () {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
};
doSomething();
arrowFunc();
