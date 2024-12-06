//2

// for(let i = 1; i<=100; i++) {
//     if(i%5 == 0 && i%3 ==0) {
//         console.log("FizzBuzz")
//     } else if(i%3 == 0) {
//         console.log("Fizz")
//     }else if(i%5==0){
//         console.log("Buzz")
//     }
//     else{ console.log(i)}
// }

//4

// let n1 = 22

// for(let i =1; i<=n1; i++){
//     if(i%2== 0 ){
//         console.log(i)
//     }
// }

//5
// let str = "javascript"
// let result = ''
// for(let i =0; str.length>i; i++){
//     if(i % 2 == 0){
//         result=result + str[i]
//     } else {
//         result=result + 'Z'
//     }
// }
// console.log(result)

//6
// let str ='aqweqweq'
// let y = false
// for(let i =0; str.length>i;i++){
//     if(str[i] == 'y'){
//         y = true
//     }
// }
// console.log(y)

//7
// let n = 4
// let result=1
// for(let i=1; n>=i; i++){
//     result=result*i
// }
// console.log(result)

//8
// let n 
// for(let i =0;i<=10;i++ ){
//     n=i*9
//     console.log(n)
// }

//9
// for(let i =60; i<=100; i=i+5){
//     if(i>=90){
//         console.log(`${i} is A`)
//     } else if(i>=80){
//         console.log(`${i} is B`)
//     } else if(i>=70){
//         console.log(`${i} is C`)
//     } else{
//         console.log(`${i} is D`)
//     }
// }

//10
// for(let i =1; i<=10; i++){
//     console.log(i)
// }

//11
// let n=0
// for(let i =1; i<=20; i++){
//     n=n+i
// }
// console.log(n)

//12
// let str = "aasdqwe"
// let count = 0
// let vowels = "aeiouAEIOU"
// for (let i = 0; str.length > i; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if (str[i] == vowels[j]) {
//             count++;
//         }
//     }
// }
// console.log(count)

//13
// for(let i =1; i<=10; i++){
//     if(i%2==1){
//         console.log(i)
//     }
// }

//14
// let n = 6
// let isPrime = true;
// for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
// }
// console.log(isPrime)

//15
// let str = "java"
// let rstr = ""
// for (let i = str.length - 1; i >= 0; i--) {
//   rstr += str[i];
// }

// console.log(rstr);

//16
// let base = 2
// let exp = 5
// let res = 1

// for (let i = 1; i <= exp; i++) {
//     res = res * base
// }
// console.log(res);

//17
// for(let i =5; i<=50;i=i+5){
//     console.log(i)
// }

//18
// let arr = [3, 67, 15, 98, 23];
// let largest = arr[0];            
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
// }
// console.log(largest)

//19
// let str = "javascript";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === 'a') {
//     count++
//   }
// }

// console.log("Number of 'a':", count);

//20
// let n = 8;  
// let a = 0;
// let b = 1;
// let fibonacciSequence = [];
// let next

// for (let i = 0; i < n; i++) {
//   fibonacciSequence.push(a)
//   next = a + b
//   a = b 
//   b = next
// }

// console.log(fibonacciSequence);

//21
// let n =12
// for(let i =1; i<=n; i++){
//     if(n%i==0){
//         console.log(i)
//     }
// }

//22
let str = "radar"
for(let i = 0; i<str.length/2; i++){

}