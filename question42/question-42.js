/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of
 magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.
*/
function show_Magicians() {
}
function make_Great() {
    var magicians_names = ['Haris', 'Zahir', 'Arif', 'Shahab'];
    for (var _i = 0, magicians_names_1 = magicians_names; _i < magicians_names_1.length; _i++) {
        var magician = magicians_names_1[_i];
        console.log("The Great ".concat(magician));
    }
}
show_Magicians();
make_Great();
