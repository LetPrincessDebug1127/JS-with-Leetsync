function isPalindrome(x: number): boolean {
    const x2 = x.toString();
    const size = x2.length; //7
    for (let i = 0;i<= size -1; i++){
    if (x2[size-i-1] !== x2[i]) {
        return false;
    }
    }
    return true;
};