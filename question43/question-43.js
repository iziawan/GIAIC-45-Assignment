/*Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of
  magicians’ names. Because the original array will be
  unchanged, return the new array and store it in a separate
   array. Call show_magicians() with each array to show that
    you have one array of the original names and one array with
     the Great added to each magician’s name.
*/
function show_magicians() {
    var Magician_names = ['Haris', 'Zahir', 'Arif', 'Shahab'];
    console.log(Magician_names);
}
function Make_Great() {
    var magicians_names = ['Haris', 'Zahir', 'Arif', 'Shahab'];
    for (var _i = 0, magicians_names_1 = magicians_names; _i < magicians_names_1.length; _i++) {
        var magician = magicians_names_1[_i];
        console.log("The Great ".concat(magician));
    }
}
show_magicians(); //unchanged arrays
Make_Great();
