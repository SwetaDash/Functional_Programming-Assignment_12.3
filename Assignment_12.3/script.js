var arr = [2, 4, 6];
console.log("Original Array: " +arr);
var dblar = arr.map(num =>{
    return num*2;
});
console.log("Array as a result of callback function: " +dblar);