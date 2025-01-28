/*Magicians: Make a array of magician’s names.
 Pass the array to a function called show_magicians(),
  which prints the name of each magician in the array.
*/

let magician_names = ['Haris','Zahir','Arif','Shahab'];

function Show_magicians(){
  for(let magician=0; magician<magician_names.length; magician++)
  console.log(magician_names[magician]);
}

Show_magicians();