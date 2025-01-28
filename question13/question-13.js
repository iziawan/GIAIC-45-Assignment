/*Your Own Array: Think of your favorite mode of
transportation, such as a motorcycle or a car, and
 make a list that stores several examples. Use your
  list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”
*/
var favTransport = ['Kawasaki H2r Ninja', 'Honda 70', 'Boeng 777', 'Go Cart'];
var Mymessage = 'I would like to own a ';
for (var i in favTransport) {
    console.log("".concat(Mymessage, " ").concat(favTransport[i]));
}
