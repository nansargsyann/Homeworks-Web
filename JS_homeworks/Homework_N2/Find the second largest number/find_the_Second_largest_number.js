// with bubble sort
function sortArr(arr){
    let i = 0;
        j = 0;
    while(i < arr.length){
        while(j < arr.length - i - 1){
            if(arr[j + 1] < arr[j]){
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
            j++;
        }
        i++;
    }
    return arr;
}

function secondLargest(arr){
    let max = sortArr(arr);
    max.pop();
    let result = sortArr(max);
    return result[result.length - 1];
}

//or with method sort
function secondLarg(array){
    const sortarr = array.sort();
    sortarr.pop();
    const result = sortarr.sort();
    return result[result.length - 1];
}

//for any number
function foranynum(arr, number){
    let i = 1;
    let sortarr = [];
    let result = [];
    while(i < number){
        sortarr = sortArr(arr);
        sortarr.pop();
        result = sortArr(sortarr);
        i++;
    }
    return result[result.length - 1];
}


console.log(secondLargest([10, 40, 30, 20, 50]));
console.log(secondLargest([25, 143, 89, 13, 105]));
console.log(secondLargest([54, 23, 11, 17, 10]));

console.log("With method sort");
console.log(secondLarg([10, 40, 30, 20, 50]));
console.log(secondLarg([54, 23, 11, 17, 10]));
console.log(secondLarg([25, 143, 89, 13, 105])); //problem

console.log("For any number");
console.log(foranynum([10, 40, 30, 20, 50], 3));
console.log(foranynum([54, 23, 11, 17, 10], 4));
console.log(foranynum([25, 143, 89, 13, 105], 5));