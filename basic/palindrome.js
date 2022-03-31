function isPalindrome(str) {
    if(str.split('').reverse().join('')==str)
        return true;
    return false;
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));