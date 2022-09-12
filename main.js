const myNumber = 42; // 42
console.log(myNumber);

const myNum = 42.0; // 42
console.log(myNum);
console.log(typeof myNum); //datatype - number- white

const myFloat = 42.11; //42.11
console.log(myFloat); //purple value in console
console.log(typeof myFloat);

const myNumb = "42"; //string
console.log(myNumb); // white value
console.log(typeof myNumb); //string -white

console.log(myNumber === myNumb); //false - purple value
console.log(myNumber === myNum); //true
console.log(myNumber === myFloat); //false
console.log(typeof (myNumber === myNumb)); //boolean -white

console.log(myNumb + 4); //"42" + 4= 424 string - white
console.log(Number(myNumb) + 4); //42+4 =46 - purple
console.log(Number(myNumb) === myNum); //true
console.log(Number(myNumb) === myNumber); //true -purple

console.log(Number("Paridhi")); // rteurns NaN - Not a Number - purple
console.log(Number(undefined)); //NaN
console.log(Number(true)); //1 - purple
console.log(Number(false)); //0- purple

//Number.isInteger()
console.log(Number.isInteger(myNumber)); //t
console.log(Number.isInteger(myNum)); //t
console.log(Number.isInteger(myFloat)); //f datatype = number but not an integer
console.log(Number.isInteger(myNumb)); //f

//Number.parseFloat()
console.log(Number.parseFloat(myNumb)); //42
console.log(Number.parseFloat(myNumber)); //42
console.log(Number.parseFloat(myNum)); //42
console.log(Number.parseFloat(myFloat)); //42.11

const random = "142.453abc";
console.log(Number.parseFloat(random)); //142.45 - removes non numeric characters
console.log(Number.parseFloat("Paridhi")); //NaN
console.log(Number.parseFloat("8s"));

//toFixed() - String data return
console.log(Number.parseFloat(random).toFixed(1));
console.log(Number.parseFloat(random).toFixed(2));
console.log(Number.parseFloat(random).toFixed(0));

const myN = 142.035;
console.log(myN.toFixed(2));

const myNu = 142.0151;
console.log(myNu.toFixed(2));

//Number.parseInt() - returns Integer
console.log(Number.parseInt(myNumber)); //42
console.log(Number.parseInt(myNum)); //42
console.log(Number.parseInt(myFloat)); //42
console.log(Number.parseInt(myNumb)); //42
console.log(Number.parseInt("143.09abc"));

console.log(myFloat.toString());
console.log(myFloat);
console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat("143.56abc")); //number
console.log(typeof "143.67abc"); //string

console.log(Number.parseFloat("143.56abc")); //143.56
console.log(Number.parseFloat("143,56abc")); //143

//CHAINING METHOD
console.log(Number.parseFloat("4.237aghyun").toFixed(2).toString()); //4.24 - no need to use toString as toFixed already returns String value

console.log(Number("Paridhi")); //returns NaN

//Number.isNaN()
console.log(Number.isNaN("Singhal Paridhi")); //false
console.log(Number.isNaN("435")); //false
console.log(Number.isNaN(42)); //false

//Global isNan() - corce its parameter to a number
console.log(isNaN("Paridhi")); //true
console.log(isNaN(456)); //false
console.log(isNaN("4567.78abc")); //true
console.log(isNaN(false)); //fa
console.log(isNaN(true)); //f
console.log(isNaN(undefined)); //true

console.log(typeof true); //boolean
console.log(isNaN("")); //false coerces to 0
console.log(isNaN(null)); //false -coerces to 0
console.log(isNaN(" ")); // false coerces to 0
console.log(isNaN({})); //true

console.log(isNaN(0 / 0));
console.log(Number.isNaN(0 / 0)); //Not Understood
