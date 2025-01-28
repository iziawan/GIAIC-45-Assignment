/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/
//Version 1 runs if block
var Alien_Color = 'green';
if (Alien_Color === 'green') {
    console.log('you just earned 5 points for shooting the Alien');
}
else if (Alien_Color !== 'green') {
    console.log('you just earned 10 points');
}
//version 2 runs else block
if (Alien_Color !== 'green') {
    console.log('you just earned 5 points for shooting the Alien');
}
else if (Alien_Color === 'green') {
    console.log('you just earned 10 points');
}
