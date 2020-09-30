/*Use 2 while loops. 
Get as many cities from the user as they want - stop getting cities when the user says to stop. 
The user can use any case mixture in their input (eg. SAN FranciSCO)
Cities go into an array named 'cities'.  
When city input is done, use a while loop that outputs each city on its' own line in all lower case.
The output must be to the console, in this format:

eg. say the user inputs "OmaHa" and "St. LOUIS"
*/

cityArray = []
cityInput = prompt('Please enter a city')
while (cityInput != ''){
    cityArray.push(cityInput)
    cityInput = prompt('Please enter a city, or nothing to end the input.')
}
i = 0
while (i < cityArray.length){
    console.log(cityArray[i].toLowerCase())
    i += 1
}