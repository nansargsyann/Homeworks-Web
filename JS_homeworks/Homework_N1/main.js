// N1
function isSpecialArray(array){
    let i = 0;
    let j = 0;
    while(i != array.length){
        if(((array[i] % 2 == 0) && (i % 2 == 0)) || ((array[i] % 2 != 0) && (i % 2 != 0))){
            j++;
        }
        else{
            break;
        }
        i++;
    }
    if(j == array.length){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

const arr1 = [2, 7, 4, 9, 6, 1, 6, 3];
const arr2 = [2, 7, 9, 1, 6, 1, 6, 3];
const arr3 = [2, 7, 8, 8, 6, 1, 6, 3];
console.log("Answers for N1:");
isSpecialArray(arr1);
isSpecialArray(arr2);
isSpecialArray(arr3);


// N2

function allTruthy(){
    let i = 0;
    let j = 0;
    while(i != arguments.length){
        //or just isNaN(arguments[i]) == true
        if(arguments[i] == false || arguments[i] == 0 || arguments[i] == "" || arguments[i] == null || arguments[i] == undefined || Number.isNaN(arguments[i]) == true){
            j--;
        }
        else{
            j++;
        }
        i++;
    }
    if(j == arguments.length){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

console.log("Answers for N2:");
let wow = 0/0; //NaN
let str = "NaN";
let x;
let y = null;
allTruthy(true, true, true);
allTruthy(true, wow, true); //wow is NaN
allTruthy(true, str); // with isNaN(arguments[i]) == true, this will be false
allTruthy(true, false, true); //false
allTruthy(3, 24, str, "", 321); //empty string
allTruthy(5, 4, 3, 2, 1, 0); //because of 0
allTruthy(true, 5, 2, x); // x - undefined
allTruthy(123, "abc", y); //y - null


// N3
function mean(number){
    let sum = 0;
    let counter = 0;
    let forlater = number;
    while(number){
        sum += number % 10;
        number = Math.floor(number / 10);
        counter++;
    }
    let result = sum / counter;
    console.log("mean of " + forlater + " is " + result);
}
console.log("Answers for N3:");
mean(42);
mean(12345);
mean(666);