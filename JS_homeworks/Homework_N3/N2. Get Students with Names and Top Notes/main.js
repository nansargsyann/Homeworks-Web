function getStudentsWithNamesAndTopNotes(arr){

    function getmax(arr){
        const sortarr = arr.sort((a, b) => a - b);
        return  sortarr[sortarr.length - 1];
    }

    arr.forEach(element => { element["topNote"] = getmax(element["notes"]);
                             delete element["notes"];
                            });

    //or
    // let i = 0;
    // while(i < arr.length){
    //     arr[i]["topNote"] = getmax(arr[i]["notes"]);
    //     delete arr[i]["notes"];
    //     i++;
    // }

    return arr;
}

console.log(getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
  ]));
