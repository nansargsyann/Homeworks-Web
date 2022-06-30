function hackerSpeak(str){
    str = str.replaceAll('a', 4);
    str = str.replaceAll('e', 3);
    str = str.replaceAll('i', 1);
    str = str.replaceAll('o', 0);
    str = str.replaceAll('s', 5);
    return str;
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
