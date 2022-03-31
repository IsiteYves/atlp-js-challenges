function countOccurrences(arr, number) {
    let occurrences=0, i;
    for(i=0;i<arr.length;i++) {
        if(arr[i] == number)
            occurrences++;
    }
    return occurrences;
}
function checkMajorityElement(arr) {
    let half, x;
    half=Math.floor(arr.length/2);
    for(x=0;x<arr.length;x++) {
        if(countOccurrences(arr, arr[x])>half) {
            return true;
        }
    }
    return false;
}
let myArr=[3,1,3,4,4];
console.log(checkMajorityElement(myArr));