function uncensor(censored, vowels){

    let i = 0;
    
    while(i < vowels.length){
        censored = censored.replace(censored[censored.indexOf("*")], vowels[i]);
        i++;
    }

    return censored;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEAE"));