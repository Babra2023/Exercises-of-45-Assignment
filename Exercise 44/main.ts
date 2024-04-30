
 // define a function with Rest parameterthat accepts items arguments

 function make_sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy your sandwich");
 }

  // call function 3 times with diff. numbers of arguments

  make_sandwich("chicken", "cheese", "mayo", "egg");

  make_sandwich("bread", "butter");

  make_sandwich("bread", "butter", "chicken", "egg", "lettuce", "tomato");