        //**Class assginmemt **/

// function anyTable() {
    
// var number = parseInt(document.getElementById('numberInput').value);

// if (!isNaN(number)) {

// var table = "<br>";

// for (var i = 1; i <= 10; i++) {

// var result = number * i;

// table +=  number + " x " + i +" = "+ result +"</br>";
// }
// table += "</table>";

//  document.getElementById('tableContainer').innerHTML = table;

// } else {
//  document.getElementById('tableContainer').innerHTML = "Invalid input. Please enter a valid number.";
// }
// }
        


// xx-----------------------------------xx




//**If else & else if statements, | Testing set of conditions & | Switch statement **/

// Question 1

// let userInput = prompt("Enter a number:");

// let number = parseInt(userInput);

// if (number) {
//     console.log("Number is divisible by 3");
// } 
// else {
//     console.log("Number is not divisible by 3");
// }

// Question 2

// let userValue = prompt()               R


// var userInput = prompt("Enter a number:");

// var number = parseInt(userInput);

// if (!isNaN(number)) {
//   if (number % 2 === 0) {
       
//         alert(number + " is an even number.");
//   } else {
//         alert(number + " is an odd number.");
//   }
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }

// Question 3

// let age = prompt('Enter your age ')

// if (age<18 && age<=18){
//   document.write('too young')
// }else {
//   document.write('Old enough')
// }

// Question 4

// let userName =prompt("Enter your name")        R

// let yourName = "Ayan";

// if (userName === yourName) {
  
//     console.log("Hello, " + userName + "! Welcome!");
// } else {
 
// }

// Question 5

// var userValue = prompt("Enter a number:");


// if (userValue < 3 && userValue <= 3) {
   
//      console.log("Number is divisible by 3");
       
// }else{
//      console.log("Number is not divisible by 3");
   
// }

// Question 6

// var userInput = prompt("Enter a character:");      

// var charCode = userInput.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     console.log("The input is a number.");

// } else if (charCode >= 65 && charCode <= 90) {
//     console.log("The input is an uppercase letter.");

// } else if (charCode >= 97 && charCode <= 122) {
//     console.log("The input is a lowercase letter.");

// } else {
//     console.log("Invalid input.");
// }

// Question 7

// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));     R
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// var result;
// switch (operator) {
//     case "+":
//         result = number1 + number2;
//         console.log("Result: " + result);
//         break;
//     case "-":
//         result = number1 - number2;
//         console.log("Result: " + result);
//         break;
//     case "*":
//         result = number1 * number2;
//         console.log("Result: " + result);
//         break;
//     case "/":
//         if (number2 !== 0) {
//             result = number1 / number2;
//             console.log("Result: " + result);
//         } else {
//             console.log("Error: Division by zero is not allowed.");
//         }
//         break;
//     case "%":
//         if (number2 !== 0) {
//             result = number1 % number2;
//             console.log("Result: " + result);
//         } else {
//             console.log("Error: Modulo by zero is not allowed.");
//         }
//         break;
//     default:
//         console.log("Invalid operator.");
//         break;
// }

// Question 8

// var inputTime = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));    R

// if (inputTime >= 0 && inputTime <= 2359) {

//     var hours = Math.floor(inputTime / 100);
//     var minutes = inputTime % 100;

//     var period = (hours >= 12) ? "PM" : "AM";
//     hours = (hours > 12) ? hours - 12 : hours;
//     hours = (hours === 0) ? 12 : hours; 

//     console.log("Converted time: " + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period);
// } else {
//     console.log("Invalid input. Please enter a valid time in 24-hour format.");
// }

// Question 9

// // Prompt the user for input year in YYYY format
// var inputYear = parseInt(prompt("Enter a year (YYYY format):"));      R

// // Check if it's a leap year using if, else if, and else statements
// if (inputYear % 4 === 0) {
//     if (inputYear % 100 === 0) {
//         if (inputYear % 400 === 0) {
//             console.log(inputYear + " is a leap year.");
//         } else {
//             console.log(inputYear + " is not a leap year.");
//         }
//     } else {
//         console.log(inputYear + " is a leap year.");
//     }
// } else {
//     console.log(inputYear + " is not a leap year.");
// }


// Question 10

// a.
// let enterPass = prompt("Enter your correct password")

// b.
// let uPass = prompt("Enter your password")
// if(uPass===enterPass){
//   alert('Welcome! Password is correct');
// }else{
//   alert('Incorrect Password! enter a valid password');
// }

// c.
// let coPass = "ayan";

// let userPass = prompt("Enter your password")

// if (!userPass){
//         console.log("Please enter your password.");
// } else{
//     if (userPass === coPass) {
//         console.log("welcome! Password is correct ");
//     } else {
//         console.log("Incorrect! Try again");  
//     }
// }

// Question 11

// let userName = prompt("Enter your name ")

// if(userName.toLowerCase()==="ayan"){
//         document.write("Welcome " +userName)
// } else {
//         document.write("You are not Ayan")
// }

// Question 12

// let greeting;
// let hour  = 13 ;

// if(hour < 18 && hour > 18){
//         console.log("Good day");
// } else {
//         console.log("Good evening");
// }

// Question 13

// let num1 =prompt("Enter first Integer")
// let num2 = prompt("Enter second Integer")

// function findLargerInteger(num1,num2){
//         if(num1>num2){
//                 return num1 + " is larger"
//         }  else {
//                 return "Both are equal";
//         }
// }
// let result= findLargerInteger(num1,num2)
// console.log(result);

// Question 14

// let number =prompt("Enter a number")

// if(number>0){
//         console.log("Number is positive");
// } else if (number<0){
//         console.log("Number is negative");
// } else {
//         console.log('Number is zero')
// }

// Question 15

// let curhour = prompt("Enter current hour") 

// if (curhour>=6 && curhour<=9){
//         document.write("Breakfast served ");
// } else if (curhour>=11 && curhour<= 13){
//         document.write("Time for lunch")
// } else if ( curhour>=17 && curhour<=20 ){
//         document.write("Its Dinner time")
// } else {
//         document.write("Sorry, you have to wait, or go get a snack.")
// }

       //ASSIGNMENT ARRAY 2 

//question 1

// let studentNames = [];

// studentNames.push("Taha");
// studentNames.push("Saad");
// studentNames.push("Abdullah");

// console.log(studentNames); 

//question 2

// let studentNames = new Array();
// let studentNames = [];


//question 3

// let colors = ["red", "green", "blue", "yellow"];


//question 4

// let numbers = [1, 2, 3, 4, 5];


//question 5

// let flags = [true, false, true, false, true];


//question 6



//question 7

// let networks = ["Mobilink", "Telenor", "Zong", "Ufone", "Warid"];

// console.log("Available mobile networks in Pakistan:");
// for (let i = 0; i < networks.length; i++) {
//     console.log(networks[i]);
// }


//question 8

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h2>Available Education Qualifications in Pakistan:</h2>");
// document.write("<ol>");

// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }

// document.write("</ol>");


//question 9

// let topMovies2015 = [];

// topMovies2015.push("Avengers: Age of Ultron");
// topMovies2015.push("Star Wars: The Force Awakens");
// topMovies2015.push("Jurassic World");
// topMovies2015.push("Inside Out");
// topMovies2015.push("Mad Max: Fury Road");

// document.write("<h2>Top Movies of 2015:</h2>");
// document.write("<ul>");
// for (let i = 0; i < topMovies2015.length; i++) {
//     document.write("<li>" + topMovies2015[i] + "</li>");
// }
// document.write("</ul>");

// document.write("<p>Number of movies in the list: " + topMovies2015.length + "</p>");


//question 10

// let favoriteCars = ["Tesla Model S", "Porsche 911", "Audi R8", "BMW M3", "Mercedes-Benz S-Class"];

// console.log("First index of the array: " + favoriteCars[0]);

// console.log("Car at first index of the array: " + favoriteCars[0]);

// console.log("Last index of the array: " + (favoriteCars.length - 1));

// console.log("Car at last index of the array: " + favoriteCars[favoriteCars.length - 1]);

// LOOPS //

// question 1

// for (let i = 0; i < 5; i++){
//     document.write('Hello to the World of Loops <br>')
// }

//question 2

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

//question 3

// const number = +prompt('Enter any number to write its multiplication table:')
// const length = +prompt('Enter the lenght of multiplication table:')

// if (!isNaN(number) && !isNaN(length)){
//     document.write(`<h2>Multiplication Table of ${[number]} </h2>`)
//     document.write('<ul>')
//     for (let i = 1; i <= length; i++){
//         const result = number * i;
//         document.write(`<li>${[number]} x ${[i]} = ${[result]} </li>`)
//     }
//     document.write('</ul>')
// } else {
//     document.write(`<h2>Please enter a valid input number</h2>`)
// }

//question 4

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (let i = 0; i < A.length; i++){
//     console.log(A[i])
// }


//question 5

// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

//question 6 AI

// Ask the user for the number of items
// var N = parseInt(prompt("Enter the number of items for the array:"));

// if (!isNaN(N) && N > 0) {
//     var itemsArray = [];

//     for (var i = 0; i < N; i++) {
//         var item = prompt("Enter item " + (i + 1) + ":");
//         itemsArray.push(item);
//     }

//     console.log("Array of items: " + itemsArray);
// } else {
//     console.log("Invalid input. Please enter a valid number greater than 0.");
// }


//question 7

// document.write(`<h2>Counting: </h2>`)
// for (i = 1; i <= 15; i++){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Reverse Counting: </h2>')
// for (let i = 10; i >= 1; i--){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Even: </h2>')
// for (let i = 0; i <= 20; i += 2){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Odd: </h2>')
// for (let i = 1; i <= 19; i += 2){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Series: </h2>')
// for (let i = 2; i <= 20; i += 2){
//     document.write(`${[i]}k, `)
// }


//question 8 AI

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter the item you want to search:");

// var userInputLowercase = userInput.toLowerCase();

// var isFound = false;

// for (var i = 0; i < A.length; i++) {on
    // var itemLowercase = A[i].toLowerCase();
    // if (userInputLowercase === itemLowercase) {
        // isFound = true;
        // break;
    // }
// }


// if (isFound) {
//     alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }


//question 9

// let A = [24, 53, 78, 91, 12]
// let largestNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] > largestNum){
//         largestNum = A[i]
//     }
// }
// console.log(`The Largest number in the Array is ${[largestNum]}`);


//question 10

// let A = [24, 53, 78, 91, 12]
// let smallestNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] < smallestNum){
//         smallestNum = A[i]
//     }
// }
// console.log(`The smallest number in the Array is ${[smallestNum]}`);


//question 11

// let A = [24, 53, 78, 91, 12]

// let largeNum = A[0]
// let SmallNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] > largeNum){
//         largeNum = A[i]
//     } else if (A[i] < SmallNum){
//         SmallNum = A[i]
//     }
// }
// console.log(`The Array is ${[A]}`)
// console.log("The largest number in the array is: " + largeNum)
// console.log("The smallest number in the array is: " + SmallNum)

//question 12

// for (let i = 5; i <= 100; i += 5){
//     document.write(`${[i]}, `)
// }

//question 13

// let students = ["Ali", "Sami", "Taha", "Inam"]
// let scores = [58, 73, 89, 90]

// let table = "<table border='1'><tr><th>Student Name</th><th>Score</th></tr>"

// for ( i = 0; i < students.length; i++){
//     table += `<tr><td> ${[students[i]]} </td><td> ${[scores[i]]}</td> </tr>`
// }
// table += '</table>'
// document.write(table)


//question 14 

// var scores = [12, 45, 3, 22, 34, 50];

// var stopValue = parseInt(prompt("Enter the stop value:"));

// if (!isNaN(stopValue)) {
//     var output = [];
//     for (var i = 0; i < scores.length; i++) {
//         if (scores[i] <= stopValue) {
//             output.push(scores[i]);
//         } else {
//             break;
//         }
//     }
    
//     console.log(output);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


//question 15

// Given 2D array
// var A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (var i = 0; i < A.length; i++) {
//     for (var j = 0; j < A[i].length; j++) {
//         console.log(A[i][j]);
//     }
// }


//question 16

// var num = parseFloat(prompt("Enter a number:"));

// if (!isNaN(num)) {
//     while (num > 0) {
//         console.log(num);
//         num -= 0.5;
//     }
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


//question 17

// for (var i = 0; i <= 20; i++) {
//     // Checking if the current number is even or odd
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }


//question 18

// var product = 1;

// for (var i = 1; i <= 7; i++) {
//     if (i % 2 !== 0) {
//         product *= i;
//     }
// }

// console.log("Product of odd integers from 1 to 7: " + product);


//question 19

// var initialStars = parseInt(prompt("Enter the initial number of stars:"));

// if (!isNaN(initialStars) && initialStars > 0) {
//     // Loop to print lines of stars with decreasing count
//     for (var i = initialStars; i > 0; i--) {
//         var line = '';
//         for (var j = 0; j < i; j++) {
//             line += '*';
//         }
//         console.log(line);
//     }
// } else {
//     console.log("Invalid input. Please enter a valid positive number.");
// }


//question 20


// for (var i = 0; i < numLines; i++) {
//     var line = '';
//     for (var j = 0; j < 5; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// for (var i = 1; i <= numLines; i++) {
//     var line = '';
//     for (var j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// for (var i = numLines; i > 0; i--) {
//     var line = '';
//     for (var j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }