//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var ordinal = '';
for (var _i = 0, numberList_1 = numberList; _i < numberList_1.length; _i++) {
    var number = numberList_1[_i];
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(number).concat(ordinal));
}
