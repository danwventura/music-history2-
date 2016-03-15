"use strict"
let playlist = document.getElementById("music")
let songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


//Using push/unshift array methods to add songs to beginning/end of array
songs.push("Reptilia > by The Strokes on the album Room on Fire") 
songs.unshift("Spirits > by The Strumbellas on the album TBA");




//For loop to iterate through songs
for (let i = 0; i < songs.length; i++) {
//adding replace methods to remove "*","@","(","!" and replace ">" with "-"
  let cleanStrings = songs[i].replace (/[*@(!]/g,"").replace(">","-")
  
  


  //Printing list of songs to DOM
   playlist.innerHTML += `<div>${cleanStrings}</div>`;


}

