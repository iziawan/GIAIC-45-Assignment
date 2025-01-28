/*Guest List: If you could invite anyone, living or 
deceased, to dinner, who would you invite? Make a 
list that includes at least three people you’d like 
to invite to dinner. Then use your list to print a 
message to each person, inviting them to dinner.
*/

let guests = ['Shahabuddin', 'Hitler','Zahir'];

let invitation = 'Assalamualikum!, with the love from the\ndepth of my heart, i would like to invite\nyour majesty ';

for(let guest in guests){
  console.log(`${invitation} ${guests[guest]} for a small dinner at my home.`);
  
};