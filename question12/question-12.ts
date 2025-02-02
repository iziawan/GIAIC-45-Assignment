/*Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print
 a message to them. The text of each message should be
 the same, but each message should be personalized with
 the person’s name.
*/



let greeting = ['Assalamualikum how are you','How are you doing','Best of Luck!'];

let MyFriends = ['Zainab','Khizra','Humaira','Khadija'];

for(let friend in MyFriends){
  console.log(`${greeting[friend]} ${MyFriends[friend]}`);
  
}
