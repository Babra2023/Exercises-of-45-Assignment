// Define function to print magician names from array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Function to make magician great through map()
function make_great(magician) {
    return magician.map(function (name) { return "The Great  ".concat(name); });
}
// Define an array containing magician name
var magician_name = ["Harry Potter", "Samri", "Billu"];
// copy of array through slice
var copy_magician_name = magician_name.slice();
// modify the copied array to include "The Great"
var copy_great_magician = make_great(copy_magician_name);
// both array
console.log("Original Array\n");
show_magician(magician_name);
console.log("\nCopied Array\n");
show_magician(copy_great_magician);
