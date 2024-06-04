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



//-----------------

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