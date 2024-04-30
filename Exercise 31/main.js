"use strict";
let userNames = ['Ali', 'Mahad', 'Zaid', 'Admin', 'Sibtain'];
userNames = [];
if (userNames.length === 0) {
    console.log("Your array is empty you need to find some users.");
}
else {
    // using ForEach loop on array
    userNames.forEach(oneUser => {
        if (oneUser === 'Admin') {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for login again.`);
        }
    });
}
