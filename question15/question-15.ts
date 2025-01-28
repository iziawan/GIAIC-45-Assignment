/*Changing Guest List: You just heard that one of your
 guests can’t make the dinner, so you need to send out 
 a new set of invitations.You’ll have to think of
someone else to invite.
*/


//Zahir could'nt make it to the dinner due to his busy schedule.
//instead we will invite Arif.

//Modified list
let guestList = ['Shahabuddin', 'Hitler','Arif'];

//Inviting all guests without zahir;
let invitations = 'Assalamualikum!, with the love from the\ndepth of my heart, i would like to invite\nyou';

  console.log(`${invitations} ${guestList[2]} for a small dinner at my home.`);

  for(let guest in guestList){
    console.log(`${invitations} ${guestList[guest]} for a small dinner at my home.`);
    
  };

  console.log("Zahir could'nt make it to the dinner due to his busy schedule.");
  