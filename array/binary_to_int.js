const arr5 = [0,1,0,1];
const arr9 = [1,0,0,1];

function convert_to_int(binary_array) {

    let binary_string = binary_array.join("");
    let digit = parseInt(binary_string,2);
    return digit;
}

console.log(convert_to_int(arr5));
console.log(convert_to_int(arr9));