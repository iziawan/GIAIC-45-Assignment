/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each
 message is printed for the appropriate color alien.
*/

//version 1
let alienColor = 'red';

if(alienColor == 'green'){
  console.log('You earned 5 points');
}else if(alienColor == 'yellow'){
  console.log('You earned 10 points');
}else if (alienColor == 'red'){
  console.log('You earned 15 points');
}

//version 2
let alien_Color = 'green';

if(alien_Color == 'green'){
  console.log('You earned 5 points');
}else if(alien_Color == 'yellow'){
  console.log('You earned 10 points');
}else if (alien_Color == 'red'){
  console.log('You earned 15 points');
}

//version 3
let alien_color = 'yellow';

if(alien_color == 'green'){
  console.log('You earned 5 points');
}else if(alien_color == 'yellow'){
  console.log('You earned 10 points');
}else if (alien_color == 'red'){
  console.log('You earned 15 points');
}