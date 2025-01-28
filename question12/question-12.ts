/*Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print
 a message to them. The text of each message should be
 the same, but each message should be personalized with
 the person’s name.
*/



let greeting = ['Assalamualikum how are you','How are you doing','Nice to meet you','Best of Luck!'];

let MyFriends = ['Haris','Zahir','Arif','Shahab'];

for(let friend in MyFriends){
  console.log(`${greeting[friend]} ${MyFriends[friend]}`);
  
}
