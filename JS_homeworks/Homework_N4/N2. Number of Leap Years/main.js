// function numLeapYears(str){
//     let arr = str.split("-");
//         count = 0;
//     for(arr[0]; arr[0] <= arr[1]; arr[0]++){
//         if((arr[0] % 4 === 0 && arr[0] % 100 !== 0) || (arr[0] % 400 === 0)){
//             count++;
//         }
//     }   
//     return count;
//     //return arrfirst;
// }
// console.log(numLeapYears("1980-1984"));
// console.log(numLeapYears("2000-2020"));
// console.log(numLeapYears("1600-2000"));

const foo = (year) => {
    let count = 0,
        years = year.split("-").map(el => Number(el));
    for(let i = years[0]; years[0] <= years[1]; years[0]++){
        if(new Date(years[0], 1, 29).getMonth() === 1){
            count++;
        }
    }
    return count;
};

console.log(foo("1980-1984"));
console.log(foo("2000-2020"));
console.log(foo("1600-2000"));


