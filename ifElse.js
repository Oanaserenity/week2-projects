let weather = "sunny";
if (weather == "sunny") {
    console.log ("Well, I better wear some sunscreen!")
}   else if  (weather = "rainy") {
        console.log ("Better take an umbrella")
}   else {
    console.log("Hmmm,it could go either way!")

}
//activity 1 

let pizza = "Pepperoni";
if (pizza == "Pineaple" || pizza == "Chicken"){

console.log("Myfavourite pizza is Pepperoni!"); 
}   else if (pizza == "Marguerita" || pizza == "Pepperoni"){
        console.log ("I prefer Pepperoni");
    }
//activity2

let password = "myfeericWorld";
if (password.length < 8) {
    console.log("Password too short");

  }  else {

        console.log ("Password:myfeericWorld" + password);

}
//activity3
        let num = 15;
        if (num% 3 === 0 || num % 5 === 0) {
            console.log("This number is divisable by 3 or 5.");

        } else {
            console.log("This number is not divisable by 3 or 5");
        }
//activity4
let num4 = 15;
if (num4 % 3 ===0 && num % 5 === 0) {
    console.log("Fizz Buzz");
} else if (num4 % 3 === 0) {
    console.log("Fizz");
    
} else {
    console.log(num);


}
//activity5

let num5 = 12321;
let numString = num5.toString();
let reversedString = numString.split('').reverse().join('');
if (numString === reversedString) {
    console.log(num5 + " is a palindrome.");
}else {
    console.log(num5 + " is not a palindrome.");
}
//activity6
let time = 8;
let placeOfWork = "Office"
let townOfHome =  "Home"
if (time ===7){
    console.log("At 7 am, Im at " + townOfHome + ".")
} else if (time ===8) {
    console.log("At 8 am, I'm commuting to " + placeOfWork + ".");
} else if (time === 9){
    console.log("At 9 AM, I'm at " + placeOfWork + ".");

} else {
    console.log("Im somewhere else at this time.")

}
//activity7 
//Take the string "gjklfsuogdnkjhg". Find the index of a last vowel in the string.
let myString = "jhgfdshjjngfhljfds" 
myString = myString.toLowerCase();
const vowels = ['a', 'e', 'i','o','u'];
let lastIndex = -1;
for (let i = 0; i < myString.length;i++) {
if (vowels.includes(myString[i])) {
    lastIndex = i
}
}
let word = "example";
word = word.toLowerCase();
if (word.charAt(0) === word.charAt(word.length - 1)) {
    console.log(true);
}else {
    console.log(false);

}
//activity8
let num1 = 5;
let num2 = 8;
let sum = num1 + num2;
if (sum % 2 === 0 ) {
    console.log("Sum is even: "+ sum);
} else {
    let product = num1 * num2;
    console.log("Sum is odd. Product:  " +product);
}






