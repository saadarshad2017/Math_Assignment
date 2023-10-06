// var number = 3.45214;

// var result = (number);
// document.write("Positive value" + "<br>");
// document.write("a. Number: " + result + "<br>");

// var number = 3.45214;

// var round = Math.round(number);

// document.write("b. Round Off Value: " + round + "<br>");

// var number = 3;

// var floor = Math.floor(number);

// document.write("c. Floor Value: " + floor + "<br>");

// var number = 3.999;

// var Ceil = Math.ceil(number);

// document.write("d. Ceil Value: " + Ceil + "<br>" + "<br>");
// document.write("Negative value" + "<br>");

// /*
// 2nd
// */


// var number = -2.673;

// var result = (number);

// document.write("a. Number: " + result + "<br>");

// var number = -3.45214;

// var round = Math.round(number);

// document.write("b. Round Off Value: " + round + "<br>");

// var number = -2.3654;

// var floor = Math.floor(number);

// document.write("c. Floor Value: " + floor + "<br>");

// var number = -2.6589;

// var Ceil = Math.ceil(number);

// document.write("d. Ceil Value: " + Ceil + "<br>" + "<br>");
// document.write(" Absolute value of -4 is 4 & absolute value of 5 is 5" + "<br>");


// var number = -4;

// var result = Math.round(number);

// document.write("Rounded Value: " + result + "<br>");
// document.write("Absolute Value: " + Math.abs(number) + "<br>" + "<br>");

// document.write(" Display the value of the dice in the browser  " + "<br>");


// var diceValue = Math.round(Math.random() * 6) + 1;

// var diceValue2 = Math.floor(Math.random() * 6) + 1;
// var diceValue3 = Math.ceil(Math.random() * 6) + 1;


// // Display the value of the dice in the browser
// document.write("Random dice value: " + diceValue + "<br>");
// document.write("Random dice value: " + diceValue2 + "<br>");
// document.write("Random dice value: " + diceValue3 + "<br>" + "<br>");


// document.write("  that simulates a coin toss using random  " + "<br>");


// // Generate a random number between 0 and 1 to simulate a coin toss
// var coinTossResult = Math.random() < 0.5 ? "Heads" : "Tails";
// var coinTossResult2 = Math.random() > 0.5 ? "Heads" : "Tails";

// // Display the result of the coin toss in the browser
// document.write(2 + "<br>")
// document.write("Random coin value:" + coinTossResult + "<br>");
// document.write(1 + "<br>")
// document.write("Random coin value:" + coinTossResult2 + "<br>" + "<br>");

// document.write("Write a program that shows a random number between 1 and 100 in your browser. " + "<br>");
// // Generate a random number between 1 and 100
// var randomNum = Math.round(Math.random() * 100) + 1;

// // Display the random number in the browser
// document.write("Random Number between 1 and 100: " + randomNum  + "<br>"  + "<br>");

// document.write("Write a program that shows a random number between 1 and 100 in your browser. " + "<br>");


// // Ask the user for their weight
// var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

// // Function to extract the weight value from user input
// function parseWeight(input) {
//     // Remove non-numeric characters and convert to a floating-point number
//     var numericValue = parseFloat(input.replace(/[^\d.]/g, ""));
//     return isNaN(numericValue) ? null : numericValue;
// }

// // Parse the user input
// var weight = parseWeight(userInput);

// // Display the parsed weight in the browser
// if (weight !== null) {
//     document.write("The weight of user is : " + weight + " kgs" + "<br>" + "<br>");
// } else {
//     document.write("Invalid input. Please enter a valid weight." + "<br>" + "<br>");
// }


// document.write("Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congralate the user." + "<br>");


// // Generate a random secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Ask the user to input a number between 1 and 10
// var userInput = prompt("Guess the secret number (between 1 and 10):");

// // Parse the user input as an integer
// var userGuess = parseInt(userInput);

// // Check if the user's guess is equal to the secret number
// if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
//     if (userGuess === secretNumber) {
//         alert("Congratulations! You guessed the secret number: " + secretNumber);
//     } else {
//         alert(secretNumber + ". Try again!");
//     }
// } else {
//     alert("Please enter a valid number between 1 and 10.");
// }






// // ?Q1 answer

// var today = new Date(); 
// console.log(today)

// // ?Q2 answer

// var month =["janurary","feburary","march","april","may","june","july","august","september","october","november","december"]
// var d = new Date();
// var currentMonth = d.getMonth();
// let monthname = month[currentMonth]

//  console.log("Current month is : "+monthname)

// // ?Q3 answer

// var day =["sun","mon","tue","wed","fri","sat"]
// var d = new Date();
// var currentday = d.getDate();
// let datename = day[currentday]

//  console.log("Current day is : "+datename)


// // ?Q4 answer

// let text5 = prompt("enter a day")

// if (text5 != "saturday"&&"sunday") 
// console.log("Its a working day")
// else if(text5 == "saturday","sunday")
// console.log("Its a fun day");

// // ??OR

// var day =["sun","mon","tue","wed","fri","sat"]
// var d = new Date();
// var currentday = d.getDate();
// let datename = day[currentday]

//  console.log("Current day is : "+datename)
//  if (currentday != [1],[2],[3],[4])
//  console.log("Its a working day")
// else if(currentday =[0],[5])
// console.log("Its a fun day")


// //  ?Q5 answer    


//  var todayDate = new Date();
//  var Todaymilli = todayDate.getTime();
//  var todayMin = todayDate.getMinutes();
//  var diff = Todaymilli - todayMin;
//  var diffMin = diff/(1000*60*60);
//  var accurateMin = Math.floor(diffMin);
 
  
//  document.write("Current Date: " + todayDate);
//  document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
//  document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// //  ?Q6 answer
 
 
//  var d = new Date();
//  var Hrs = d.getHours();

//  console.log(Hrs)
//  if (Hrs >= 0 && Hrs <=12)
//           console.log(" Its AM ");
//         else if (Hrs > 12 && Hrs <= 24)
//           console.log(" Its PM ");


// //  ?Q7 answer


//  let dateobj =
//  new Date('October 13, 1996 05:35:32');
// dateobj.setDate(15);
// let B = dateobj.getDate();
// console.log(B);


// //  ?Q8 answer

// var laterDate = new Date(2020, 11, 31);


// // ?Q9 answer

// var ramadanStartDate = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan (June 18, 2015): " + daysPassed + " days");

// // ?Q10 answer

// var referenceDate = new Date('2000-01-01');
// var startDate = new Date('2015-01-01');
// var timeDifference = startDate - referenceDate;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed + " seconds");

// // ?Q11 answer

// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Current Date and Time: " + currentDate);


// //  ?Q12 answer

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// var formattedDate = (currentDate.getMonth() + 1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
// alert("100 years ago, the date was: " + formattedDate);

// // ?Q13 answer

//  var d = new Date().getFullYear();
//  let text6 =  prompt("enter your birth yeaar")
// console.log("your birth year is: "+text6)
//  console.log( "your age is : "+  Math.abs(text6 - d));


// // ?Q14 answer

// document.write("K.Electric bill <br>")
// document.write("Coustumer name : Mr Hello <br>")
// var month =["janurary","feburary","march","april","may","june","july","august","september","october","november","december"]
// var d = new Date();
// var currentMonth = d.getMonth();
// let monthname = month[currentMonth]

//  document.write("Month Bill  : "+monthname+"<br>")
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 1000) + 1;
// var numberOfStars = Math.floor(improvedNum);

// document.write("Used Units : "+numberOfStars+"<br>")

// var price = 16
// document.write("Per Unit price : "+ price + "<br>")

// document.write("Net Amount Payable Bill(with in due date) : "+ price*numberOfStars +"<br>")

// var late = 350
// document.write("Late Amont Charge : "+ late + "<br>")

// document.write("Net Amount Payable Bill(with Late Charges) : "+ ((price*numberOfStars)+late) +"<br>")




