/*Create a new form named 'forAB.
Create an array named 'names' that holds this data:

Bob, Janet, Tom, Bob, Randy, Elizabeth, Kim, Nancy
Each time the loop runs, it must output a name. So eventually your program will have output each name, one name per line.
The output must be to the console, with the first line showing the last name in the array, then the second line showing the second to last name in the array, etc. until the last name output will be the one that was first in the array. Basically in reverse order (there are several ways to do this - choose any one).
Use this format:

Nancy
Kim
Elizabeth
Randy
Bob
Tom
Janet
Bob
*/ 

names = ['Bob', 'Janet', 'Tom', 'Bob', 'Randy', 'Elizabeth', 'Kim', 'Nancy']
for (i = 1; i <= names.length ; i++){
    console.log(names[names.length -i])
}
