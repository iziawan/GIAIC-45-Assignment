/*Sandwiches: Write a function that accepts
 a array of items a person wants on a sandwich.
 The function should have one parameter that
 collects as many items as the function call
 provides, and it should print a summary of the
 sandwich that is being ordered. Call the function
 three times, using a different number of arguments each time.
*/
function sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("You Ordered a sandwich with ".concat(ingredients));
}
sandwich('Tomato', 'Letuce', 'cocumber');
sandwich('Chicken', 'Ketchup', 'mayo');
sandwich('Olives', 'Onion', 'Cheez');
