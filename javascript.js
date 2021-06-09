//For Loops
// for (let i = 0; i < 5; i++) {
//     console.log('in loop')
// }
// console.log('loop finished')

// const names = ['Lonny', 'Mawrk', 'Hanna'];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

//===============================================================================

//While Loops
// const names2 = ['Lonny', 'Mawrk', 'Hanna']
// let i = 0;

// while(i < names2.length){
//     console.log(names2[1]);
//     i++;
// }

//================================================================================
//Do While Loops
// let x = 3;

// do{
//     console.log('val of i is: ', x);
//     x++;
// } while(x < 5);

//================================================================================
//If Statements

// const age = 22;

// if(age > 20){
//     console.log('you are over 20 years old your old as dirt');
// }

// const shinobi = ['naurto', 'saskuke', 'kakashi', 'Hinata', 'madara', 'itachi'];

// if(shinobi.length > 4){
// console.log("oh its to many of em lets retreat");
// }

// const password = 'thisisapassword';

// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is strong asf')
// }else if (password.length >= 8 || password.includes('@') && password.length >= 10) {
//     console.log('Thats a good password bro')
// }else{
//     console.log('password is not long enough bro')
// }
//==================================================================================

//String Example

// "this is a string duh lol";

// console.log("oh hey whats up lol");

// alert("dang im tired");

// const myString = "this is my string stored in a variable";
// console.log(myString);

// const callOfDuty = "Black Ops 2";
// const gameSystem = "Xbox 360";

// const favGame = "My favorite call of duty was " + callOfDuty + " on " + gameSystem + ".";

//====================================================================================


// Initializing a new string primitive
// const myString2 = "This is a new string.";

// // Initializing a new String object
// const stringObject = new String("A new string.");


//Indexing 
// "Hi my name is Mekhi Washington"[10];

// "yoooo you try go to the gym later or you ducking that work?".charAt(15);

// "what what you tryna grub on?".lastIndexOf("n");

// "when the cookout bro? I need some good food!!!".slice(8);

// "when the cookout bro? I need some good food!!!".length;

//========================================================================
//converting data types

// let numberOfJutsuKakashiKnows = 10000;
// console.log(typeof numberOfJutsuKakashiKnows);

// numberOfJutsuKakashiKnows = String(numberOfJutsuKakashiKnows);
// console.log(typeof numberOfJutsuKakashiKnows);


// let howOldAmI = "22";
// Number(howOldAmI);
//=========================================================================

//Understanding Variables
//  var username = "BubbaKashi";

// if (username = "BubbaKashi") {
//     console.log(true)
// }else(false);


// Assignment of various variables
// var name = "Mekhi";
// var shinobi = 5000;
// var clans = [ "Uchiha", "Namikaze", "Uzumaki" , "hatake"];
// var Logos = { Marvel: "red", DC: "blue" , Xbox: "green"};
// var success = true;
// var nothing = null;

//Variable Scope
//Global variables are those declared outside of a block
//Local variables are those declared inside of a block
// Use var to initialize a variable

// Initialize a global variable
// var race = "Reg Humans";

// function transform() {
//   // Initialize a local, function-scoped variable
//   var race = "Shinobi";
//   console.log(race);
// }

// Log the global and local variable
// console.log(race);
// transform();
// console.log(race);




// var species = "Regular Person";

// if (goToNinjaSchool) {
//   // Attempt to create a new variable in a block
//   var species = "shinobi";
//   console.log(`If you got to ninga school you are${species}.`);
// }

// console.log(`if you dont go to ninja school you arent a  ${species}.`);

//Hoisting




//=========================================================
//Arrays

//array literal
let shinobis =[
    "naruto",
    "sasuke",
    "kakashi",
    "Minato",
    "hashirama",
];

//array constructor
// let shinobis2 = new Array(
//     "naruto",
//     "sasuke",
//     "kakashi",
//     "Minato",
//     "hashirama",
// );

//indexing arrays
// let shinobis3 = [
//     "naruto",
//     "sasuke",
//     "kakashi",
//     "Minato",
//     "hashirama",
// ];
// shinobis.length;
// shinobis.indexOf("kakashi");

//Mutator Methods
 Array.isArray(shinobis);

// shinobis.pop();

// shinobis.shift();

// shinobis.push("");
// shinobis.unshift("");
// shinobis.splice(5, 0, "boruto");
// shinobis.reverse();

//for each
// Print out each item in the array
shinobis.forEach(singleShinobi => {
console.log(singleShinobi);
})


//=========================================================================================

//Objects

// Initialize naruto object
// const naruto = {
//     name: "Naruto",
//     clan: "uzumaki",
//     justu: "multi-shadow clones",
//     favQuote: function() {
//         return `Believe It!`;
//     },
// };

// naruto.clan;

// naruto.age = 34;

// naruto.uses = function(){
//     return 'naruto uses rasengan'
// }


//for in loop
// for (attribute in naruto) {
//     console.log(attribute);
// }

// //for of loops
// for (let shinobis of shinobis) {
//     console.log(shinobis);
// }


//JSON Data
// var MekhiWashignton = {
//     "first_name"  :  "Mekhi",
//     "last_name"   :  "Washington",
//     "Age"      :  "22",
//     "Weight" : "163",
//     "favorite_color" : "blue",
//     "hobbie" : "gaming"
//   }


//functions

// function tellMeIBigAsHellLol(){
//     console.log("bro ya gains are crazyyyyy")
// }


//arrow
// const multiply = (x, y) => {
//     return x * y;
// }

// multiply(57, 9);

//classes



//events

// const changeText = () => {
//     const p = document.querySelector('p');

//     p.textContent = "dang you clicked the button thats weird.";
// }

// const button = document.querySelector('button');
// button.onclick = changeText;













