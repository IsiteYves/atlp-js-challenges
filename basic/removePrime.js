const myArr=[4, 3, 11, 8, 6, 9, 5, 12, 7];
function isPrime(number) {
    if(number < 4)
        return true;
    for(let x=2;x<=Math.floor(number/2);x++) { 
        if(number%x==0) {
            return false;
        }
    }
    return true; 
}
console.log("Initial array: ", myArr, "\n");
function filterOutPrime(arr) {
    let arrReplica=[...arr], numberOfRemovedItems=0;
for(let i=0;i<arr.length;i++) {
    if(isPrime(arr[i])) {
        arrReplica.splice(i-numberOfRemovedItems, 1);
        numberOfRemovedItems++;
    }
}
return arrReplica;
}
console.log("Final array: ", filterOutPrime(myArr));