console.log ("Hello world")
console.log (  "Hello World".toUpperCase()    )
let myName = "Oana"
console.log(myName)

let number = 10
console.log (number +5)
console.log (number)
let i = 10
i = i + 2;
i += 2

const grid = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    
    
     }
}
let name = "Oana"
let age = 45;
let favDrink = "Coffee"
console.log ("Hi, my name is "  +name+  ". I am (45) and my favourite drink is {Coffee}.")

let Name = "Anais";
let Age = 18;
let favouriteColour = "purple";
console.log('Name: ${Anais}), Age: ${18}, Favourite Colour: ${purple}');
//update variables

Name = "Ilinca";
Age = 6
favouriteColour = "white";
//Log updated information 
console.log('Name: ${Ilinca}, Age: ${6}, Favourite Colour: ${favouriteColour}');

let breakfastToday = "Yoghurt";
let lunchToday = "Tuna salad";
let dinnerToday = "Pasta"
//Log today's meals
console.log ("Today's Meals: Breakfast - ${yoghurt}, Lunch- ${Tuna salad}, Dinner- ${Pasta}");
//Update variables for tomorrow
let breakfastTomorrow = "Omlette";
let lunchTomorrow = "Steak";
let dinnerTomorrow = "Fish"

//Log updated meals for tomorrow
console.log("Tomorrow's Meals: Breakfast - ${Omlette}, Lunch ${Steak}, Dinner - ${Fish}");


const today  = new Date (1978,10, 4).getTime()
const TimeNow = new Date ().getTime()

console.log ((TimeNow - today)/(1000*60*60*24)+" Days I have been alive for")
