const caesar = function(str, shiftNum) {

    if (shiftNum > 26 || shiftNum < -26){
        shiftNum = shiftNum%26
    }

    let returnStr = ""
    for (var i = 0; i < str.length; i++){
        ascii = str.charAt(i).charCodeAt()
        if (ascii >=65 && ascii <= 90){
            if (ascii+shiftNum > 90){
                newAscii =  65 + (ascii+shiftNum -1 - 90);
            }else if (ascii+shiftNum < 65 ){
                newAscii =  90 + (ascii+shiftNum  +1 - 65);
            }else{
                newAscii = ascii+ shiftNum
            }
            returnStr = returnStr.concat(String.fromCharCode(newAscii))
        }else if (ascii >=97 && ascii <= 122){
            if (ascii+shiftNum > 122){
                newAscii =  97 + (ascii+shiftNum -1 - 122);
            }else if (ascii+shiftNum < 65 ){
                newAscii =  122 + (ascii+shiftNum +1  - 97);
            }else{
                newAscii = ascii+ shiftNum
            }
            returnStr = returnStr.concat(String.fromCharCode(newAscii))
        }else{
            returnStr = returnStr.concat(str.charAt(i))
        }
    }

    return returnStr;
};

// Do not edit below this line
module.exports = caesar;
