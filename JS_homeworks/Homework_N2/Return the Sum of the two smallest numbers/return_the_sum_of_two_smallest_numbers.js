//not a good solution
function sumTwoSmallestNums(arr){
    let i = 0;
    while(i < arr.length){
        if(arr[i] < 0){
            arr.splice(i, 1);
        }
        else{
            i++;
        }
    }
    
    function minelem(arr){
        let i = 0;
            min = arr[0];
        while(i < arr.length){
            if(arr[i] < min){
                min = arr[i];
            }
            i++;
        }
        return min;
    }
    let minelarr1  = minelem(arr);
    let minindex1 = arr.indexOf(minelarr1);
    arr.splice(minindex1, 1);
    let minelarr2  = minelem(arr);
    let minindex2 = arr.indexOf(minelarr2);
    arr.splice(minindex2, 1);
    return (minelarr1 + minelarr2);
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));

console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));

console.log(sumTwoSmallestNums([2, 9, 6, -1]));

console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -7234, 791, -587]));

console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));