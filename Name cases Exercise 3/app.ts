// lower case

let personName ="Bilal";
console.log("lowercase!",personName.toLowerCase());

//Upper case
console.log('uppercase!', personName. toUpperCase());

//Titlecase
console.log("titlecase!", personName.replace(/\bw/g,c=>c.toUpperCase()));