// N1 - insertion sort 

function insertionSort(arr){
    let pivot, j;
    for(let i = 1; i < arr.length; i++){
        pivot = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > pivot){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = pivot;
    }
    return arr;
}


// N2 - unique chars

function uniqueStr(str){
    let hashtable = {};
    for(let i = 0; i < str.length; i++){
        if(hashtable[str[i]] == undefined){
            hashtable[str[i]] = 1;
        }
        else{
            return  "not unique" ;
        }
    }
    return "unique";
}


// N3 find index
function findInd(str, char){
    let ind = -1;
    for(let i = 0; i < str.length; ++i){
        if(char[0] == str[i]){
            for(let k = i + 1, n = 1; n < char.length; k++, n++){
                if(char[n] == str[k]){
                    ind = i;
                }
                else{
                    ind = -1;
                    break;
                }
            }
        }
    }
    return ind;
}







