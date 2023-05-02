// SECTION 1

// Question 1:

/* What does the acronym DRY stand for? 
The acronym DRY stands for "Don't Repeat Yourself" */

/* Why should we pay attention to it? 
Because it is a programming principle that allows us to write repetitive code 
in just a few lines instead of hundreds or thousands of the same lines. */

/* What programming tools have we learned to write DRY code?
Programming tools like using while loops which allow us to use 
repetitive code without having to repeat yourself, in turn following the DRY  */

// Question 2:
/* What is the difference between const and let and var?
Const - A declaration stating that the variable is constant and does NOT change(This is block-scope)
let - A declaration stating that the variable is abe to changed/reassigned(It is mutable and block-scope)
var - an outdated way of decaring a variable that can be reassigned, it's like using let. 
(we now use const and let instead)(This is global-scope) */

// <============================================================>

// SECTION 2


// Answer Key
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kelvin';
//   const f = false;

// Answers:

//   (a < b) 
//   c > d
//   "name" === "name"
//   a < b < c
//   a === a < d
//   e === "Kevin"
//   48 !== "48"
//   f !== e
//   let g = 0
//   console.log(g)
//   g = b + c;
//   console.log(g)

// Did you use const, let or var? Why did you choose the one you chose?
// I used let because the original had to later be reassigned to a new value

// What happens if you don't use const , let or var? Do you get an error? If so what does it say?
//We get a syntax error, the errror is listed below

// what happens if you write 10 = g?
//Answer:
// console.log(10=g);
// SyntaxError: Invalid left-hand side in assignment

/* BONUS CHALLENGE: optional): Replace the underscores to make a Boolean expression 
that evaluates to true. Use no more than one of the following: > , < !== and ===.
*/
// a _ (b || f) _ !f && e _ c
//ANSWER:
// console.log(a !== (b || f) && !f && e !== c)


// <============================================================>

//SECTION 3

// Question 1
// Is the code below an infinite loop? Why or why not? while (true) { console.log('Do not run this loop');}
//ANSWER:
// Yes This is an infinite loop. The reason why is because the while loop is a truthy value all the time.

//Question 2: is this loop an infinite loop? Why or why not?
// ANSWER:
// No this is not an infinite loop, it logs a syntax error: TypeError: Assignment to constant variable. 
// IT shows this error because runProgram is a const, this CANNOT BE REASSIGNED.

// QUESTION 3: Without running this loop, what is the expected output?
// Read the code line by line-- everything happens in sequence. Write down what you think
// the code will log in the Terminal by adding comments before each line of code, explaining what that line of code will do. 
//ANSWER:
// let letters = "A"; // assigns the value of letter to "A"
// let i = 0; // assigns the value of i to 0
// //starts a while loop that will continue as long as the value of i is less than 20
// while (i < 20) {
//     // increments the value of letters by adding "A" to the value each time
// 	letters += "A";
//     //increments the value of i by 1
// 	i++;
// }
// //logs/prints the value of letters to the terminal/console
// console.log(letters); // ==> AAAAAAAAAAAAAAAAAAAAA

// <============================================================>

// SECTION 4

//QUESTION 1: A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
//ANSWER:

// Differences: With a for loop, We don't have to declare any variables outside of the loop, theres is also less room for infinite errors this way. 
//Whereas with a while loop, a variable has to be declared in order for the loop to know what it is looping

//Similarities: A for and while loop perform the same exact operation - by allowing us to loop a line of code insteasd of having repetitive lines, 


// Question 2: What are the three components of the control panel? Each component is separated by a semicolon ;.
// for (let i = 0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }

// Remember: Write your answers as comments in the file.

// The first part of the control panel is: Initialization
// The second part of the control panel is: Condition
// The third part of the control panel is: Iteration

//QUESTION 3: Write a for loop that will console.log the numbers 0 to 999.
// ANSWER:
// for(let i = 0; i <= 999; i++){
//     console.log(`The number is ${i}`)
// }

// Bonus Challenge (optional):
// What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?
// console.log('Without you, today\'s emotions are the scurf of yesterday\'s'); 
//ANSWER:
// since the '' single quotations represent and also create a string, having multiple single quotations in a sentence may create a conflict
// so in order to treat all the single quotations besides the first and last ones, a backward slash is needed in front of any other single quotations within the sentence



//QUESTION 4: Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
// ANSWER:
// for(let i = 999; i >= 0; i--){
//     console.log(`The number is ${i}`)
// }

//QUESTION 5: Write a for loop that uses string concatenation to send a message to the console as well as the current value of i. The loop should run from 1 to 10.
// ANSWER:
// for(let i = 1; i <=10; i++){
//     console.log("The value of i is: " + i + " of 10")
// }

// Bonus Challenge (optional):
// Rewrite the above loop using String Interpolation/Template Literals instead of concatenation
// for(let i = 1; i <=10; i++){
//     console.log(`The value of i is: ${i} of 10`)
// }

// QUESTION 6:
// Iterate over the StarWars array and print each element to the console.
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// for(i=0; i < StarWars.length; i++) {
//     console.log(StarWars[i])
// }

//Iterate over the StarWars array again and print each character's name as well as the value of i.
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// for(i=0; i < StarWars.length; i++) {
//     console.log("The value of StarWars at index number " + i + " is " + StarWars[i])
// }

//Figure out how to iterate over every second element of the StarWars array, starting with the first element.
// const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// for(i=0; i < StarWars.length; i = i + 2){
//     console.log(StarWars[i])
// }

// <============================================================>


