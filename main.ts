import {Calculator} from './calculator';
//variable declaration can be done using var or let
//var scope in Javascript is tied to the nearest function defined.
//let scope only in the nearest block instead function.
//let scope lagi kecik than var
//use let untuk declare variable in typesript

var number = 20;
let count = 2;
count = 'Faiz';  //in typescript cannot change type of var. but can compile sbb javascript boleh.
                // but it's better to not do that.

//let genericType; //boleh tak declare type, dia jadi any.
let genericType: string; //it's better to explicitly declare with type. Mcm dalam Java.
genericType = 'Ni string';
//other types in Typescript.
let b: boolean;
let c: number;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];
const taklehUbah = 65;
enum COLLECTIONOFCONSTANT {low = 1, medium, high, extrem};

let severityLevel = COLLECTIONOFCONSTANT.high;

let a = 'faiz';
a.endsWith('z'); //endsWith is a method untuk string. *but only available on ES6
//let typeAssertion = (<string>d).endsWith('z');  //two ways of type assertion (override Typescript punya automatic type definitions)
//let typeAssertionv2 = (d as string).endsWith('z');

function doSomething(){
  for(let i = 0; i < 5; i++){
    console.log(i);
  }

  console.log(i);
}

//another way of writing function. arrow function or in python lambda function
let arrowFunc = () => {
  for(let i = 0; i < 5; i++){
    console.log(i);
  }
  console.log(i);
}
doSomething();
arrowFunc();
let kirakira = new Calculator(10,4);
kirakira.addNumber();
