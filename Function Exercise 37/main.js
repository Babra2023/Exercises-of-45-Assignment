"use strict";
// making a function
function make_shirt(size = "Large", printMessage = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with ${printMessage} printed on shirt`);
}
// calling a function
make_shirt();
// calling a function with Medium size and default message
make_shirt("Medium");
// calling a function with Small size and different message
make_shirt("Small", "I love Pakistan");
