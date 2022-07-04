function makeBox(n){
    let result = Array(n).fill(''),
        i = 0;
    while(i < n){
        if(i === 0 || i === (n - 1)){
            result[i] = "*".repeat(n);
        }
        else{
            result[i] = "*".repeat(1);
            result[i] += " ".repeat(n - 2);
            result[i] += "*".repeat(1);
        }
        i++;
    }
    // return result.join('\n');
    //or 
    return result;
}

console.log(makeBox(15));
console.log(makeBox(5));
console.log(makeBox(3));
console.log(makeBox(2));
console.log(makeBox(1));