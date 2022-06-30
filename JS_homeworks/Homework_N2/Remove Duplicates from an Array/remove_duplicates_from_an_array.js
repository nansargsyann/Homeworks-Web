function removeDups(arr){
    let i = 0;
        j = 1;
    while(i < arr.length){
        while(j < arr.length){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
            }
            else{
                j++;
            } 
        }
        i++;
        j = i + 1;
    }
    return arr;
}

//using set
// function setremove(arr){
//     let result = [...new Set(arr)];
//     console.log(result);
// }

// console.log("With set")
// setremove([1, 0, 1, 0, 1, 2, 0, 1, 2]);
// setremove(["The", "big", "cat"]);
// setremove(["John", "Taylor", "John"]);


console.log("With splice")
console.log(removeDups([1, 0, 1, 0, 1, 2, 0, 1, 2]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));