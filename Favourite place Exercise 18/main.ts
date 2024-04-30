// Visit worlds favourite places, Think of atleast five places,
// make a list array(not in alphabetical order)

let places : string [] = ["Dubai", "Islamabad", "Kashmir","capetown", "Switzerland"]
// console.log("original :" + places);
// . print array in alphabetical order without modifying the actual list.
//  console.log('copy' + [...places].sort());

// . show that array is still in its original order
// console.log('origin :' + places);

// . print array in reverse order
console.log("copy" + [...places].sort().reverse())

// .show that array is still in its original order by printing it again
console.log('copy' + [...places].sort().reverse());

// . Reverse the order of your list. Print the array to show that its order has changed.
console.log('original :' + places.sort());

// . Reverse the order of your list again. print
console.log('original :' + places.sort().reverse());