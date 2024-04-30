
// Define function to print magician names from array

function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
 }
 
  // Function to make magician great through map()
  function make_great(magician: string[]){
     return magician.map(name => `The Great  ${name}`);
  }
 
  // Define an array containing magician name
  let magician_name = ["Harry Potter", "Samri", "Billu"];

   // copy of array through slice
   let copy_magician_name = magician_name.slice()

    // modify the copied array to include "The Great"
    let copy_great_magician = make_great(copy_magician_name);

    // both array

    console.log("Original Array\n")
    show_magician(magician_name);

    console.log("\nCopied Array\n")
    show_magician(copy_great_magician);
 
   