function dayOfYear(stringDate){
    let startStr = new Date(stringDate);
        startYear = startStr.getFullYear(),
        startarr = new Date(startYear, 0);
    return (startStr - startarr) / 86400000 + 1;
}

console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("12/17/2020"));
console.log(dayOfYear("11/16/2020"));
console.log(dayOfYear("1/9/2019"));
console.log(dayOfYear("3/1/2004"));
console.log(dayOfYear("12/31/2000"));
