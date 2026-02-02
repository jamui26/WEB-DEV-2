// let arr=[5,-3,16,-11,-7,8]
// let res=[]
// while(arr.length>0){
//     let val = arr.shift();
//     if (val>0){
//         res.push(val);

//     }
// }
// console.log(res);

//Q3. check if array is palidrome or not?

// let arr2 =[1,2,3,2,1];
// let origin =[];
// for(let i=0;i<arr2.length;i++){
//     original.push(arr2[i]);
//     console.log(original);
// }
// while(arr2.length > 0) {
//     Reverse.push(arr2.pop())

// }

// for (i=0; i<original.length;i++){
//     if(original[i] === reverse [i]){
//         console.log("its a palindrome")
//     }
//     else{
//         console.log("not a palindrome")
//     }
// }


// let arr2 = [1, 2, 3, 2, 1];
// let original = [];
// let reverse = [];

// // copy original array
// for (let i = 0; i < arr2.length; i++) {
//     original.push(arr2[i]);
// }

// // reverse array
// while (arr2.length > 0) {
//     reverse.push(arr2.pop());
// }

// // check palindrome
// let isPalindrome = true;

// for (let i = 0; i < original.length; i++) {
//     if (original[i] !== reverse[i]) {
//         isPalindrome = false;
//         break;
//     }
// }

// if (isPalindrome) {
//     console.log("It's a palindrome");
// } else {
//     console.log("It's not a palindrome");
// }




function palindrome() {
    let arr2=[1,2,3,2,1]
    let  original = []; //1,2,3,2,1
    let reverse =[] //1,4,3,2,1
    //copy all the elements of given array to an original array
    for(let i=0; i< arr2.length; i++) {
        original.push(arr2[i]);
    }
    //reverse the given aaray
    while (arr2.length>0){
        reverse.push(arr2.pop())
    }
    for (i=0; i<original.length; i++) {
        if (original[i] !==reverse[i]) {
         return "not a palindrome"

        }
    }
return "its a palindrome";

}
console.log(palindrome());











