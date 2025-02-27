/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

//comparision With string

let string = 'Apple';
console.log(string == 'Apple');//true
console.log(string == 'apple'); //false

let lowerCaseString = 'banana'
console.log(lowerCaseString == 'banana');//true
console.log(lowerCaseString == 'BANANA');//false

//comparision With numbers

let NUMBER = 10;
console.log(NUMBER == 10);//true
console.log(NUMBER != 10);//false
console.log(NUMBER < 10);//false
console.log(NUMBER > 10);//false
console.log(NUMBER <= 10);//true
console.log(NUMBER >= 10);//true

//comparision With "&&" and "||" operaters

console.log(NUMBER == 10 && string == 'Apple'); //true
console.log(NUMBER !== 10 || string == 'Apple');//true

//Test whether an item is in a array

let array = ['Football','car','Hat'];

let arrayItem = 'car';

let result = array.includes('car');
console.log(result);//prints true

//test wether item is not in a array

let result2 = !array.includes('car');
console.log(result);//true






