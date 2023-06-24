const arr = [1,2,3,4,5,6,7,8];

function arraySum(array) {

    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum+=element;
    }

    return sum;
}

console.log(arraySum(arr));
