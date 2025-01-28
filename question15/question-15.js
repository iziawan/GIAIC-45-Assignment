/*Changing Guest List: You just heard that one of your
 guests can’t make the dinner, so you need to send out
 a new set of invitations.You’ll have to think of
someone else to invite.
*/
//Zahir could'nt make it to the dinner due to his busy schedule.
//instead we will invite Arif.
//Modified list
var guestList = ['Shahabuddin', 'Hitler', 'Arif'];
//Inviting all people again
var invitations = 'Assalamualikum!, with the love from the\ndepth of my heart, i would like to invite\nyou';
console.log("".concat(invitations, " ").concat(guestList[2], " for a small dinner at my home."));
for (var guest in guestList) {
    console.log("".concat(invitations, " ").concat(guestList[guest], " for a small dinner at my home."));
}
;
console.log("Zahir could'nt make it to the dinner due to his busy schedule.");
