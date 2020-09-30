
//Get as many cities from the user as they want - stop getting cities when the user says to stop. 
let cityArray = []
let cityInput = prompt('Please enter a city')
while (cityInput != ''){
//Cities go into an array named 'cities'. 
    cityArray.push(cityInput)
    cityInput = prompt('Please enter a city, or nothing to end the input.')
}
i = 0
while (i < cityArray.length){
  
//When city input is done, use a while loop that outputs each city on its' own line in all lower case.
    console.log(cityArray[i].toLowerCase())
    i += 1
}