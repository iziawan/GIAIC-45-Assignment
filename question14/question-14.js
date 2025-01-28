/*Guest List: If you could invite anyone, living or
deceased, to dinner, who would you invite? Make a
list that includes at least three people you’d like
to invite to dinner. Then use your list to print a
message to each person, inviting them to dinner.
*/
var guests = ['Hazrat Umar RA', 'Hazrat Muhammad SAW', 'Sultan Adbul Hameed'];
var invitation = 'Assalamualikum!, with the love from the\ndepth of my heart, i would like to invite\nyour majesty ';
for (var guest in guests) {
    console.log("".concat(invitation, " ").concat(guests[guest], " for a small dinner at my home."));
}
;
