/*T-Shirt: Write a function called make_shirt() that accepts a size and
 the text of a message that should be printed on the shirt. The function
 should print a sentence summarizing the size of the shirt and the message
  printed on it. Call the function.
*/
function Make_shirt(size, text) {
    return console.log("Size:".concat(size, ".\nMessage: ").concat(text));
}
Make_shirt("S", "Feeling Good!");
Make_shirt("XL", "Lumber 1");
