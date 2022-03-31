const myArr=[4, 3, 11, 8, 6, 9, 5, 12, 7];
// function to check if the passed number is prime
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

// function to remove prime numbers from the array
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
function customSorting(arr) {
  let numArr=filterOutPrime(arr);
  var i, j, n=numArr.length;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (numArr[j] < numArr[j+1])
        {
        let temp=numArr[j];
        numArr[j]=numArr[j+1];
        numArr[j+1]=temp;
        }
    }

}
return numArr;
}
console.log(customSorting(myArr));