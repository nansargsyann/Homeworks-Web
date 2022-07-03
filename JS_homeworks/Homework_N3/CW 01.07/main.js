function sevenBoom(arr){
    if((arr.toString()).includes('7')){
        return "Boom!";
    }
    else{
        return "Please try again!";
    }
}

const arr1 = [1, 27, 4];
const arr2 = [1, 2, 3];
console.log(sevenBoom([1, 2, 3, 7, 4]));
console.log(sevenBoom(arr1));
console.log(sevenBoom(arr2));
