function pizzaPoints(obj, minorders, minprice){

    let resarr = [];
    Object.keys(obj).forEach(elem => { if((obj[elem].filter(word => word > minprice)).length >= minorders){
                                            resarr.push(elem);
                                        }
                                    });
    // for sorted array we can return resarr.sort();
    return resarr;
}


let customersObj = {
    "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
    "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
}

console.log(pizzaPoints(customersObj, 5, 20));
console.log(pizzaPoints(customersObj, 3, 10));
console.log(pizzaPoints(customersObj, 5, 100));