debugger;
function weeklySalary(hours){
    let i = 0,
        salary = 0;
        current = 0;

    function workdays(hour){
        current = (Math.min(8, hour) * 10)
        if(hour > 8){
            current += (hour - 8) * 15;
        }
        return current;
    }

    while(i < hours.length){
        if((i >= 0 && i <= 4) && (hours[i] !== 0)){
            salary += workdays(hours[i]);
        }

        else if((hours[i] !== 0) && (i >= 5 && i <= 6)){
            salary += 2 * workdays(hours[i]);
        }
        i++;
    }

    return salary;
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]));
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]));
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));
console.log(weeklySalary([0, 6, 0, 13, 0, 12, 0]));