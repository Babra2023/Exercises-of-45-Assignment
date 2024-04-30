"use strict";
let book = "book";
let uppercaseBook = "BOOK";
let ten = 10;
let twenty = 20;
let colors = ["pink", "red", "orange", "blue"];
// Test equality and non equality in strings
console.log("Is this book equal to book");
console.log(book == "book");
console.log("\nIs this book not equal to book");
console.log(book != "book");
//Test usint lowercase Function
console.log("\nIs BOOK equal to book after converting to lowercase?");
console.log(uppercaseBook.toLowerCase() == "book");
console.log("\nIs BOOK not equal to book after converting to lowercase?");
console.log(uppercaseBook.toLowerCase() != "book");
// Numerical tests
console.log("\nIs ten equal to twenty");
console.log(ten == twenty);
console.log("\nIs ten not equal to twenty");
console.log(ten != twenty);
// greater than less than
console.log("\nIs ten greater than zero");
console.log(ten > 0);
console.log("\nIs twenty less than 10");
console.log(twenty < 10);
console.log("\nIs ten greater or equal to 5?");
console.log(ten >= 5);
console.log("\nIs twenty less than or equal to 10");
console.log(twenty <= 10);
// Test "and" (&&)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
// Test "or" (||)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is  not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include in array
console.log("Is blue include in my colors array");
console.log(colors.includes("blue"));
// not include
console.log("\nIs blue not include in my colors array");
console.log(!colors.includes("blue"));
