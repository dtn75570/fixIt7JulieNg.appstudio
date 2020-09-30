/*Create a form named 'calc'.
Create a function named Calculate that takes 2 parameters , adds them together, and returns the answer to the main program. Name the parameters 'num1' and 'num2'. 
Create a variable in the main program named 'summedNumbers'.
In the main program, get two numbers from the user, then call the function, sending it the two numbers.  So the two numbers must be passed into the function when you call it from the main program. Name the variables in the main program different names than the function Calculate parameter names.
All output must be done in the main program (not in the function).
All output goes to the console in this format:

The sum of X and Y is Z.     (where X  and Y come from the user, and Z is the sum  from the function). 
*/
function calculate (num1, num2){
  return parseInt(num1) + parseInt(num2)
}

let num1 = prompt('Enter the first number')
let num2 = prompt('Enter the second number')

let summedNumbers = calculate(num1, num2)
console.log(`The sum of ${num1} and ${num2} is ${summedNumbers}`)
