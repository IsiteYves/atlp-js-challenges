// WITH NO BUILT-IN FUNCTIONS
function isPalindrome(str) {
    let i, n=str.length;
    for(i=0;i<n/2;i++)
        if(str[i] != str[n-1-i])
            return false;
    return true;
}

// USING BUILT-IN FUNCTIONS
// function isPalindrome(str) {
//     if(str.split('').reverse().join('')==str)
//         return true;
//     return false;
// }
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));