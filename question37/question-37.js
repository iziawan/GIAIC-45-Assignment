/*Large Shirts: Modify the make_shirt() function so that shirts
are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with
the default message, and a shirt of any size with a different message.
*/
function make_shirt(size, text) {
    if (size === void 0) { size = "L"; }
    if (text === void 0) { text = "I love Typescript"; }
    return console.log("Size:".concat(size, ".\nMessage: ").concat(text));
}
make_shirt();
make_shirt("S", "Feeling Lucky!");
make_shirt("XL", "Racer");
