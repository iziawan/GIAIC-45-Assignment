/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
*/

let users = ['Shahabuddin','Zahir','Arif','Admin','Haris'];

for(let i in users){
  console.log(`Hello there ${users[i]} welcome to the website. Thanks for logging again.`);
  if(users[i] === 'Admin'){
    console.log('Welcome back "Admin"! we are happy to see you again.\nWould you like to see the status report?');

  }
  
}