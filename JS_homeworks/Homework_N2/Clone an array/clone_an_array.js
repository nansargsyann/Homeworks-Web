//incorrect solution
function clone(arr){
    arr[arr.length] = [...arr];
    return arr;
}

//correct solution
function cloneright(arr){
    arr = [...arr, ...arr];

    //or
    //const arrcopy = [...arr];
    //arr = [...arr, ...arrcopy];

    return arr;
}

console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));

console.log(cloneright([1, 1]));
console.log(cloneright([1, 2, 3]));
console.log(cloneright(["x", "y", ""]));