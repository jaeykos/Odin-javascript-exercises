const palindromes = function (str) {
    let strPuncRemoved = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"")
    let strCheck = strPuncRemoved.toLowerCase();
    

    for (i = 0; i< strCheck.length/2; i++ ){
        if (strCheck.charAt(i) != strCheck.charAt(strCheck.length-i-1)){
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
