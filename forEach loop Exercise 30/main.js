"use strict";
// creating array
let userNames = ['Ali', 'Mahad', 'Zaid', 'Admin', 'Sibtain'];
// using ForEach loop on array
userNames.forEach(oneUser => {
    if (oneUser === 'Admin') {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for login again.`);
    }
});
