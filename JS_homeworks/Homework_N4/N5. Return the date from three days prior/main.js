// debugger;
function threeDaysAgo(date){
    let miliseconds = Date.parse(date),
        resultMilisec = miliseconds - (2 * 86400000),
        result = new Date(resultMilisec);
    result = (result.toISOString()).slice(0, 10);
    return result;
}

console.log(threeDaysAgo(new Date(2018, 0, 1)));
console.log(threeDaysAgo(new Date(2015, 5, 17)));
console.log(threeDaysAgo(new Date(1965, 3, 15)));
