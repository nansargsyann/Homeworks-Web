function findNaN(arr){
    let i = 0;
    while (i < arr.length){
        if(isNaN(arr[i])){
            return i;
        }
        i++;
    }
    return -1;
}

//with findIndex method
function findnan(arr){
    const array = (element) => isNaN(element);
    return arr.findIndex(array);
}

console.log(findNaN([1, 2, NaN]));
console.log(findNaN([NaN, 1, 2, 3, 4]));
console.log(findNaN([0, 1, 2, 3, 4]));

console.log(findnan([1, 2, NaN]));
console.log(findnan([NaN, 1, 2, 3, 4]));
console.log(findnan([0, 1, 2, 3, 4]));