console.log("---Trying smth---");
function getDays(x, y){
    return (y.getTime() - x.getTime()) / 86400000;
}

console.log(getDays(new Date("June 14, 1979"),
                    new Date("June 14, 1980")));

console.log(getDays(new Date("December 29, 2018"),
                    new Date("January 1, 2019")));

console.log(getDays(new Date("July 20, 2019"),
                    new Date("July 30, 2019")));