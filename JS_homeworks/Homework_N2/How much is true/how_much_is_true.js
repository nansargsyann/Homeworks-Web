function countTrue(arr){
    let count = 0;
        i = 0;
    while(i < arr.length){
        if(arr[i] === true){
            count++;
        }
        i++;
    }
    return count;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
console.log(countTrue([true, false, false, true, true]));
