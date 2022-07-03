function findBrokenKeys(correctstr, typedstr){
    let i = 0,
        arr = [];

    while(i < correctstr.length){
        if(correctstr[i] !== typedstr[i]){
            if(arr.indexOf(correctstr[i]) === -1){
                arr.push(correctstr[i]);
            }
        }
        i++;
    }
    return arr;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));

console.log(findBrokenKeys("starry night", "starrq light"));

console.log(findBrokenKeys("beethoven", "affthoif5"));