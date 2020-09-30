//Create a variable named quoteString and put this string in it: "Failure is simply the opportunity to begin again this time more intelligently."
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."

//Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString. Use this format for your output to the console:
let upperCaseString = quoteString.toUpperCase()
console.log('Upper case string is:', upperCaseString)

//Create a new variable named authorString and put this text in it. "- Henry Ford"
let authorString = "- Henry Ford"
/*Then create a new variable completeString that holds a new string created by  adding the author 
(in authorString) on the end of the string in quoteString. Then create a new variable named 
'found' that outputs a message as to whether the string "Henry" was in the string in 'completeString' 
or not.*/
let completeString = quoteString + authorString
let found = completeString.includes(authorString)
if(found == true){
  console.log("Henry was in the quote string")
}else{
  console.log("Henry was NOT in the quote string")
}

//Now create a new string variable named secondQuote and put this string in it: "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
//Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString. Use this format for your output to the console:
let lowerCaseString = secondQuote.toLowerCase()
console.log("Lower case string is:", lowerCaseString)

//Get a number from the user using 'prompt'. Then add 10 to the number and output it to the console in the format:
let number = prompt("Please enter the number here.")
let numberInt = parseInt(number)
let answer = numberInt + 10
console.log(`The number ${number} + 10 is ${answer}.`)