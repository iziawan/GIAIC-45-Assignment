/*Shrinking Guest List: You just found out that
 your new dinner table won’t arrive in time for
 the dinner, and you have space for only two guests.
*/
console.log("Dear guests our dinner table has'nt yet arrive, due to which we can only invite Two Guests to the Dinner");
var allGuests = [
    'Zubair',
    'Shahabuddin',
    'Hitler',
    'Qaiser',
    'Arif',
    'Ali',
    'Ubaid',
    'Sheraz'
];
while (allGuests.length < 2) {
    allGuests.pop();
    console.log(allGuests);
}
var removedGuests = ['Hitler', 'Qaiser', 'Arif', 'Ali', 'Ubaid', 'Sheraz'];
for (var guest in removedGuests) {
    console.log("Dear ".concat(removedGuests[guest], " We are sorry to let you know that you are no longer invited."));
}
console.log("Dear ".concat(allGuests[0], " and ").concat(allGuests[1], " you are still invited to the dinner."));
allGuests.length = 0;
console.log(allGuests);
