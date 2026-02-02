// let numbers=[1,2,3];
// let doubled=numbers.map(x=>x*2);
// console.log(doubled);

// let fruits = ["apple", "banana"];
// let newLength = fruits.push("cherry")
// console.log(fruits); 
// console.log(newLength);

// let fruits =["apple", "banana", "cherry"];
// let removed = fruits.pop();
// console.log(fruits);

// let fruits =["apple", "banana", "cherry"];
// let removed = fruits.shift();
// console.log(fruits);

// let newLength = fruits.unshift("apple");
// console.log(newLength);
// console.log(fruits);

// Q1. reverse the array using push and pop method?

// let arr=[1,2,3,4,5];
// let reversedarr=[];
// while(arr.length>0){
//     let removeElement=arr.pop();
//     reversedarr.push(removeElement);
// }
// console.log(reversedarr);



// let arr=[1,2,3,4,5];
// let reverse=[]

// while(arr.length>0){
//     reverse.push(arr.pop())
// }
// console.log(reverse);


// Q2. remove all negative numbers from array?
// let arr=[5,-3,16,-11,-7,8]
// result: [5,16,8]

// let arr = [5, -3, 16, -11, -7, 8];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     result.push(arr[i]);
//   }
// }

// console.log(result);




// Q3. check if array is palindrome or not?


// function isPalindrome(arr) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     if (arr[start] !== arr[end]) {
//       return "Not Palindrome";
//     }
//     start++;
//     end--;
//   }
//   return "Palindrome";
// }

// let arr = [1, 2, 3, 2, 1];
// console.log(isPalindrome(arr));

