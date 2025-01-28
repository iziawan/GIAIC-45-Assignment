/*Album: Write a function called make_album() that builds
 a Object describing a music album. The function should take
 in an artist name and an album title, and it should return
 a Object containing these two pieces of information.
 Use the function to make three dictionaries representing 
 different albums. Print each return value to show that Objects
 are storing the album information correctly. Add an optional      parameter to make_album() that allows you to store the number
 of tracks on an album. If the calling line includes a value 
 for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number
 of tracks on an album.
*/


//Write a function called make_album() that builds a Object describing a music album

interface Album {
  artist: string;
  title: string;
  track?: number;
}

function make_album(artist:string , title:string, track?:number):Album{
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
  let album:Album =  {artist: artist, title: title};
  if(track !== undefined){
    album.track = track;
  }

  return album;
}
 //Takes two parameters
make_album('Ed sheeran','Shape of you');
// Use the function to make three dictionaries representing different albums.
let album_1 = make_album('Ed sheeran','Shape of you',);
let album_2 = make_album('Chahat fateh ali khan','Salamalekumm',);
let album_3 = make_album('Rock jhonson','Thatastu',);
//Print each return value to show that Objects are storing the album information correctly.
console.log(album_1);
console.log(album_2);
console.log(album_3);

// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.

let album_4 = make_album('Rahat fateh','Teri ankho ka Darya', 10);

console.log(album_4); 

