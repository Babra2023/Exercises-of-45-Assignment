
 // Define function to print magician names from array

function show_magician(magician: string[]){
   magician.forEach(name => console.log(name));
}

 // Function to make magician great through map()
 function make_great(magician: string[]){
    return magician.map(name => `The Great  ${name}`);
 }

 // Define an array containing magician name
 let magician_name = ["Harry Potter", "Samri", "Billu"]

  // call make_great function to modofy magician name
  let great_magician = make_great(magician_name);


  // call  show_magician  that show modified list of magician
  show_magician(great_magician);