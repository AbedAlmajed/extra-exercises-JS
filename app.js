//Q1: Evaluate each of the following Javascript expressions and show the value

// console.log(-5 * 3);
// console.log("javascript" + 50);
// console.log(17 % 5);
// console.log(5 % 17);
// console.log(5 / 10);
// console.log(4 === "4");
// console.log(4 != 5);
// console.log(7 <= 8);
// console.log("Hello" + 5);
// let n = 10.5;
// console.log(Math.ceil(n) - Math.floor(n));
// console.log(Math.pow(n, 2));

//Q2 : Read a number (using prompt) and display it using alert
// let y = prompt("Enter Number : ");
// alert("the Number is  " + y);


//Q3 : Read in two numbers and display them in ascending order.
// let numb1 = prompt("Enter Number one : ");
// let numb2 = prompt("Enter Number two : ");
// let maximum = Math.max(numb1 , numb2);
// let minumem=Math.min(numb1 , numb2);
//   alert("the small number is " + minumem);
//   alert("the larg number is " + maximum);


//Q4: Read in two numbers and display the larger
// let num1 = prompt("Enter Number one : ");
// let num2 = prompt("Enter Number two : ");
// let max = Math.max(num1, num2);
// alert("the largest numbers is " + max);


//Q5: Read two numbers and display their sum. 
// let number1=parseInt(prompt('Enter Number One : '));
// let number=parseInt(prompt('Enter Number two : '));
// let sum=number1+number;
// alert('the sumation is ' + sum );



//Q6: If you have a “Number” variable,  Your task is to print:
// let num = 10;
// switch (num) {
//   case 1:
//     alert(1);
//     break;
//   case 2:
//     alert(2);
//     break;
//   case 3:
//     alert(3);
//     break;
//   case 4:
//     alert(4);
//     break;
//   case 5:
//     alert(5);
//     break;
//   case 6:
//     alert(6);
//     break;
//   case 7:
//     alert(7);
//     break;
//   case 8:
//     alert(8);
//     break;
//   case 9:
//     alert(9);
//     break;
//   default:
//     alert("PLEASE TRY AGAIN");
//     break;
// }



//-------------------------------------------------------------------------------

//Q7:Use a loop to display the numbers 0 through 5, each in a separate alert window.


// for (let index = 0; index <= 5; index++) {
// alert(index);
// }


//Q8:Use a loop to display the numbers 0 through 5 in a single alert window


// var x=[];
// for (let index = 0; index <= 5; index++) {
//   x.push(index);
 
//   }
//   alert(x);

//Q9:Use a loop to display the numbers in the range 0…20 that are multiples of 3. 
// for (let i = 0; i <= 20; i++) {
//  if(i % 3 == 0)
//   alert(i);
// }

// //Q10:Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time

// let number=parseFloat(prompt("Enter Number from 0 to 100"));

// if(number<=100 && number >=0)
//   {
//     alert("thanks");
//   }

// else{
//   while(number >100 || number <0){
//     let number=prompt("Enter Number from 0 to 100" );
    
// if(number<=100 && number >=0)
//   {
// break;  }
//   }
// }


//Q11: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// let num=parseInt(prompt('Enter Number : '));//10
// var sum=0;
// for(let i=0;i<=num;i++){
//  sum=sum+i;
// }
// alert(sum);

//-------------------------------------------------------------------------------

//task 3

// Q1 :
//  Write a JavaScript function that reverses a number.
// Example x = 532443;
// Expected Output : 344235


//way 1 :
// function reverseNumber(number){
//     let num = number.toString();                  //String(number)
// for(let i=num.length-1;i>=0;i--){
//     let sum= "";
//     sum+=num[i];
//     document.write(sum);
// }
// }
// reverseNumber(532443);

// //way 2 :
// let reverseNumber=function (number){
//       let x=number.toString();
//     return alert(x.split("").reverse().join(""));
//     }
//  reverseNumber(532443);



// Q2 :
//   Use a loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the console .

// Example  :
// "0 is even"
// "1 is odd"

// for(let i =0;i<=15;i++){
//     if(i%2 === 0)
//                 {
//                  console.log(i + " even number");   
//                 }
//                 else{
//                     console.log(i + " odd number");   
        
//                 }
// }




// Q3 : 
// Write a function that returns a string that has letters in alphabetical order.
// Example string : 'Orange'
// Expected Output : 'aegnor'
// Assume punctuation and numbers symbols are not included in the passed string.

//way1:
// function sortString(stringg){
//     return stringg.split("").sort().join("");
// }
// console.log(sortString("orange"));

//way 2 using arrow function
// let sortString = (stringg) => {
//     return stringg.split("").sort().join("");
// };



// Q4 : 
//  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// function numbers(num){
//     let arr=[];
//    let x=num.toString();
//    for(let i=0;i<=x.length-1;i++){
//     if(x[i]%2==0 && x[i+1]%2==0)
//         {
//            arr.push(x[i] + "-");
//         }
//         else{
//             arr.push(x[i]);

//         }
//    }
//    let arrayToString=arr.join("");
// console.log(arrayToString);}
// numbers(425468);




// Q5: 
// Write a function (Agechecker) that checks age of the user if the age is larger than or equal 18, the output will be ( The user is Adult ) else ( The user is Minor) 
// Use ternary operator


// function Agechecker(age){
//     if(age >= 18)
//         {
//             console.log("The user is Adult");
//         }
//         else{
//             console.log("The user is Minor");
//         }
// }
// Agechecker(20);
// Agechecker(17);