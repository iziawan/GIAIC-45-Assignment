/*Checking Usernames: Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.
 Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

let current_users = ['Shahabuddin','Zahir','Arif','Haris','Junaid'];

let new_users = ['Shahabuddin','Javed','Qaiser','Arif','Irfan','Usman'];

for(let new_user of new_users){
  if(current_users.includes(new_user)){//comparison of users to identify doubling
    console.log(`User name ${new_user} already exist, enter another name.`);
  }else {
    console.log(`User ${new_user} is availible`);
    
  }
}

//version 2 with case insensitivity


 let Current_users = ['Shahabuddin','Zahir','Arif','Haris','Junaid'];

 let New_users = ['Shahabuddin','Javed','Qaiser','ARIF','Irfan','Usman'];

 for(let newUser of New_users){
   if(Current_users.map(user => user.toLowerCase()).includes(newUser.toLowerCase())){
     console.log(`User ${newUser} already exists, enter another name`);
   }else{
     console.log(`User ${newUser} is availible`);
   }
 }

