function reverseArrayInplace(arr) {
    let len=arr.length;
    for(let i=0;i<len/2;i++) {
        let temp=arr[i];
        arr[i]=arr[len-1-i];
        arr[len-1-i]=temp;
    }
    return arr;
}
let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArrayInplace(arr));