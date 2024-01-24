// Activity1 Creating an array of favourite films
let favouriteFilms = ['Twin Peaks', 'Kramer contra Kramer', 'The Godfather','Breakfast at Tiffani'];
//Adding two more films using push method
favouriteFilms.push('Matilda','Forrest Gump');
//Using a loop to cycle through the array and log each film 
for (let i = 0; i < favouriteFilms.length; i++) {
    console.log ("Film "   + (i + 1) + ":" + favouriteFilms[i]);

}
//activity 2 Using  for loop to count from 9 to 0
for (let i = 9; i >= 0; i--) {
    console.log(i);
}

//activity3 Using a loop to generate and log 6 random numbers
for (let i = 0; i < 6; i ++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log("Random Number " + (i +1) + ": " +randomNumber);
}

// activity4 Arrays of films 
let films = ['Matilda','Tango', 'Natalie', 'Babel'];
for (let i = 0; i < films.length; i++) {
    console.log("Film " + (i +1) + ": " +films[i])
    
}
//Checking if the 3rd film is Natalie
if (films[2]=== 'Natalie') {
    console.log('Yay its Natalie');
} else {
    console.log("Boo! We want Natalie");

}

//activity 5 Using a for loop to generate and check random numbers
for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random()* 39) + 1;
    if (randomNumber % 7 === 0) {
        console.log(randomNumber + " is divisable by 7.");
    } else {
    console.log(randomNumber + " is not divisable by 7 .")
    }
}
//activity6 building a prototype for a mutual followers program
let anaisFollowers = ['Jane', 'Mark', 'John', "Marie"];
let evasFollowers = ['Jessica', 'Chris', 'Jack', 'Ryam'];
//Using nested loops to find mutual followers
for (let i = 0; i < anaisFollowers.length; i++) {
    for (let j = 0; j < evasFollowers.length; j++) {
        if (anaisFollowers[i] === evasFollowers[j]) {
            console.log("Mutual Follower: " + anaisFollowers[i]);
        }
 
    }
}

//for loop 
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//Pros: Convenient for iterating over a known range
//Initialization, condition, and increment can be declared in one line
Cons:
//May be better for simple loops.
//Not suitable when the number of iterations is unknown.

//while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;

}
//Pros:
//Useful when the number of iteration is unknown or variable.
//More concise for simple conditions.
//Cons:
//Initialization and increment must be handled separately.
//The condition might not be checked if it's false from the beginning.

//Do...While Loops:
let k = 0;
do {
    console.log(k);
    k++;
 } while (k < 5);

