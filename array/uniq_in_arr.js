const arr = [2,3,4,2,4,"a","c","a"];

function uniq(array) {
    return uniqueChars = [...new Set(array)];
}

console.log(uniq(arr));