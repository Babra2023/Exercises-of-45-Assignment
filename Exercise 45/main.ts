
 // function creating car object with options

 function creat_car(manufacturer, model, ...options){

    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;

 }

 let my_car = creat_car("Toyota", "Corolla", "Color: Black", "Sunroof: True");
 console.log(my_car);