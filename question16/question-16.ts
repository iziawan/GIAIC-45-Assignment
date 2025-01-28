//More Guests: You just found a bigger dinner table,
// so now more space is available.Think of
// three more guests to invite to dinner.

let newGuests = ['Shahabuddin', 'Hitler','Arif','Ali','Ubaid','Sheraz'];

//adds guest at the start of the array
newGuests.unshift('Zubair')
console.log(newGuests);



//adds guest at the end of the array (Append()method not working)
newGuests.splice(3,0,'Qaiser');
console.log(newGuests);


console.log("This letter is to inform our guests that we found a Bigger table.");

