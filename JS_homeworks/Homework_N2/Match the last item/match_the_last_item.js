function matchLastItem(arr){
    let i = 0;
    let result = "";
    while(i < arr.length - 1){
        result += arr[i];
        i++;
    }
    if(result === arr[arr.length - 1]){
        return true;
    }
    else{
        return false;
    }
}

//or
function matchLast(arr){
    let lastItem = arr[arr.length - 1];
    arr.pop();
    let str = arr.join();
    if (lastItem === str.replace(/,/g, '')){ // /_/g - global match
        return true;
    }
    else{
        return false;
    }

}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([1, 1, 1, "11"]));
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

console.log(matchLast(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLast([1, 1, 1, "11"]));
console.log(matchLast([8, "thunder", true, "8thundertrue"]));