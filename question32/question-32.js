/*Checking Usernames: Do the following to create a program that simulates
how websites ensure that everyone has a unique username.
 Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ['Shahabuddin', 'Zahir', 'Arif', 'Haris', 'Junaid'];
var new_users = ['Shahabuddin', 'Javed', 'Qaiser', 'Arif', 'Irfan', 'Usman'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users.includes(new_user)) { //comparison of users to identify doubling
        console.log("User name ".concat(new_user, " already exist, enter another name."));
    }
    else {
        console.log("User ".concat(new_user, " is availible"));
    }
}
//version 2 with case insensitivity
var Current_users = ['Shahabuddin', 'Zahir', 'Arif', 'Haris', 'Junaid'];
var New_users = ['Shahabuddin', 'Javed', 'Qaiser', 'ARIF', 'Irfan', 'Usman'];
for (var _a = 0, New_users_1 = New_users; _a < New_users_1.length; _a++) {
    var newUser = New_users_1[_a];
    if (Current_users.map(function (user) { return user.toLowerCase(); }).includes(newUser.toLowerCase())) {
        console.log("User ".concat(newUser, " already exists, enter another name"));
    }
    else {
        console.log("User ".concat(newUser, " is availible"));
    }
}
