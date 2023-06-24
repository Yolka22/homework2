
const arr = [1,2,3,4,5,6,7,8,9,10];

function getMaxEvenElement(arr) {

    let Max = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]>Max){
            Max=arr[i];
        }
    }

    return Max;
}


console.log(getMaxEvenElement(arr));