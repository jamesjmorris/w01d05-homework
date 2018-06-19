// Conceptual Questions              
// 1. let var = value
// 2. var = "other value"
// 3. newVar = var

//Strings                            
//1.
// firstVariable = ["Hello World"];
// firstVariable = 20;
// secondVariable = firstVariable
// secondVariable = [];
// console.log()
//2.                                  
let yourName = ['James']
console.log("Hello, my name is " + yourName)

// Booleans                         
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  // The Farm                         
  let farm = () => {
  	let cow = 5
  	let animal = 6
  if (animal === cow){
  	console.log("mooooo")
  }
  else{
  	console.log("Hey! You're not a cow.")
  }
};
farm();

// Driver's Ed
let drivered = (age) => {
if (age >= 16){
	return "Here are the keys."
}
else{
	return "Sorry, you're too young."
}
}
console.log(drivered(16))

// Just Loop It
for (i = 0; i <= 10; i++) {
	console.log(i)
}

for (i = 10; i <= 4000; i++) {
	console.log(i)
}

for (i = 10; i <= 4000; i+=2) {
	console.log(i)
}

// Lets get even
for (i = 2; i <= 100; i+=2) {
	console.log(i + " is an even number")
}

// Give me Five
for (i = 0; i <= 100; i++) {
	if(i > 1 && i % 3 === 0){
	console.log("I found a " + i + ". Three is a crowd")
}
else if(i > 1 && i % 5 === 0){
	console.log("I found a " +  i + ". High five!")
}
};

// Savings account                           
const bankAccount = (savings) => {
            let sum = 0;
            for (let i = 1; i <= savings; i++) {
              sum += i * 2;
            }
            return sum;
        }
        console.log(bankAccount(100)); 

// Multiples of 3 and 5
const sum = () => {
  totalSum = 0;
  for (let i = 0; i < 1000; i++){
    if (i % 3 === 0){
      totalSum += i;
    }
    else if(i % 5 === 0){
      totalSum += i;
    }
  }
  return totalSum;
}
console.log(sum())

// Easy Does It
const arr = ["quote one", 
"quote two", 
"quote three"]
const quotes = arr
console.log(quotes)

// Random
const randomThings = [1, 10, "Hello", true]
// 1.
console.log(randomThings[0])
// 2.
randomThings[2] = "World"
// 3.
console.log(randomThings)

// We've Got Class
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
// 1.
console.log(ourClass[2]);
// 2.
ourClass[2] = "Octocat"
console.log(ourClass);
// 3.
ourClass.push("Cloud City");
console.log(ourClass);

// Mix It Up
// 4.
const myArray = [5 ,10 ,500, 20]
// 5.
myArray.push("Egon")
// 6.
myArray.slice(-1)
// 7.
myArray.unshift("Bob Marley")
// 8. 
myArray.splice(1, 1, 5)
// 9.
myArray.reverse

// Biggie Smalls
const biggieSmalls = (num) => {
if (num < 100) {
console.log('little number');
} else if(num > 1000){
  console.log('big number');
}
};
console.log(biggieSmalls(1500));

// Monkey in the Middle
const monkey = (bobo) => {
  if (bobo < 5) {
    console.log('little number');
  }
    else if (bobo > 10) {
      console.log('big number');
      }
      else {
        console.log('monkey');
      }
    };
console.log(monkey(14));

// What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// 2.
const kristynShoe = kristynsCloset.splice(0, 1);
// 3.
kristynsCloset.splice(5, 0, 'raybans');
// 4.
kristynsCloset.splice(4, 1, "stained knit hat");
// 5.
console.log(thomsCloset[0][0]);
// 6.
console.log(thomsCloset[1][0]);
// 7.
console.log(thomsCloset[2][0]);
// 8.
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][0] + " and " + thomsCloset[2][0] + "!");
// 9.
thomsCloset[1][2] = "Footie Pajamas";

// Functions
const printGreeting = (name) => {
  console.log("Hello there, " + name + "!");
};
console.log(printGreeting("Slimer"));
// reverseWordOrder
const reverseWordOrder = (string) => {
  return string.split("").reverse().join("");
};
// calculate
const calculate = (num1, num2, operation) => {
  let sum = 0;
  if (operation === "add") {
    sum = num1 + num2
  }
  if (operation === "sub") {
    sum = num1 - num2
  }
  if (operation === "mult") {
    sum = num1 * num2
  }
  if (operation === "div") {
    sum = num1 / num2
  }
  if (operation === "exp") {
    sum = num1 % num2
  }
    else {console.log('Wrong!')}
      return sum;

};
console.log(calculate(5, 5, 'mult'))

// 1.
const printCool = (name) => {
  console.log(name + " is cool")
};
// 2.
const calculateCube = (cube) => {
  let sum = cube * cube * cube
  return sum
};
console.log(calculateCube(5));
// 3.
const isAVowel = (vow) => {
  if (vow === "a", "e", "i", "o", "u") {
    console.log("true")
  } else {
    console.log("false")
  }
};
console.log(isAVowel(a));
// 4.                                             
     const getTwoLengths = (word1, word2) => {
            return [word1.length, word2.length];
        }
        console.log(getTwoLengths("Hank", "Hippopopalous")); 
// 5.                                            
 const getMultipleLengths = (wor) => {
  return [wor.length];
        };
        console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// 6.                                                            WRONG
const maxOfThree = (num1, num2, num3) => {
  sum = Math.max.apply(null, num1, num2, num3);
  return sum
};
// 7.
const printLongestWord = (arr) => {
 let words = arr.split(' ');
  let longest = 0;

  for (i = 0; i <= words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest
};
// 8.
const transmogrify = (mor1, mor2, mor3) => {
  let sum = 0
  sum = mor1 * mor2 % mor3
  return sum
};
// Syntax
// {} curly braces define the object
// [] contain objects on an array
// let/const sets a variable
// for/while set a loop function

// Me
const me = {
  name: 'Mad Max',
  age: 97,
  email: 'therealmadmax@askjeeves.net'
}
console.log(me.name);
me.age = 1000
console.log(me.age);
me.placeOfResidence = ['Hometown']
console.log(me.placeOfResidence);

// Slimer
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}
console.log(monster.name)
monster.type = 'creature'
monster.age = 6
console.log(monster)

// Ogres
const adventurer = {
  name: 'John',
  class: 'Warrior',
  hp: 10
}

const ogre = {
  ugly: true,
  class: 'jerk',
  hp: 10
}

const fightScene = () => {
  let sum = 0;
  for(i = 0; i < adventurer.hp.length; i++){
    i - adventurer.hp;
    i - ogre.hp;
    if(adventurer.hp = 0){
      console.log('YOU LOSE')
      else if(ogre.hp = 0){
        console.log('YOU WIN')
      }
    } 
  }
};





















