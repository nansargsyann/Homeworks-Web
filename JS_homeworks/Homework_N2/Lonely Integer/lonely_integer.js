function lonelyInteger(arr){
    let i = 0;
    while(i < arr.length){
        if(!arr.includes(-arr[i])){
            return arr[i];
        }
        else{
            i++;
        }
    }
}

console.log(lonelyInteger([1, -1, 2, -2, 3]));
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]));
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));