// / trim method used for remove spaces ...
// split method used for split the sentence ..
//    let sentence = "i am a comma seperated sentence"
//         console.log(sentence.length)
//    let words = sentence.split("a")
//         console.log(words);// 'i ', 'm ', ' comm', ' seper', 'ted sentence' ]
//    let words2 = sentence.split(" ");
//         console.log(words2); //[ 'i', 'am', 'a', 'comma', 'seperated', 'sentence' ]
// // // Find out the occurence of "r" in the given text
// let str = "tu meri mai tera me tera tu meri"
// console.log(str.split("r").length-1)
// // Regular function
// function demo(){
//     let a =10;
//     console.log(demo)
// }
// demo()

// function sample(){
//     console.log("sample")
// }
// sample()
// callback demo
// function sample(callback){
//     console.log("sample")
//     callback()
// }
// function demo(){
//     console.log("demo")
// }
// sample(demo)

// // Callback function:we can pass a function as an argument to another function. the function passed as an argument is called a callback function..
// function demo3(){
//     return "demo3";
// }
// console.log(demo3())

// const demo2 =()=>console.log("demo");
// demo()

// first class function: 
// 1. we can treat a variBLE as a function
// 2. we can pass a function as an argument inside another function
//3. we can a return a function from a function
// function test(){
//     return function test2(){
//         console.log("test2");
//         return function test3(){
//             console.log("test3")
//         } 
//     }
// }
// // test()()()
// let value = test()
// let value2 = value()
// value2()
// 4. higher order function

// map,filter ,reduce 

// 5. anonomous function
// setTimeout(()=>{

// },1000)
// 6. self invoking function(IIFE): to obtain data privacy and to call a function immediately after the function  scope .




// function classtest(){
//     console.log("classtest")
// }
// let a =10;
// function midterm(){
//     classtest();
// }
// midterm()

//  let test5 =(function(){
//    return "sample5";
// })()
// console.log(test5)            

var x =1;
{
    var x=2;
}
console.log(x);