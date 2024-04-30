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
// call make_great function to modofy magician name
var great_magician = make_great(magician_name);
// call  show_magician  that show modified list of magician
show_magician(great_magician);
