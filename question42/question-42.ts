/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of
 magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.
*/
function show_Magicians(){

}



function make_Great(){
  let magicians_names = ['Haris','Zahir','Arif','Shahab'];
  for(let magician of magicians_names){
   console.log(`The Great ${magician}`);
  }
}

show_Magicians();
make_Great();
