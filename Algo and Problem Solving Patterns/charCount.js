function charCount(str) {
    // make object to return at end
    var obj = {};
    // loop over string, for each character...
    for(var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        // test if a char is alphanumeric
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;


        // if the char is a number/letter AND is a key in an object, add one to count

        // if(obj[char] > 0) {
        //     obj[char]++;
        // }

        // if the char is a number/letter AND not in object, add it to object and set value to 1

        // else {
        //     obj[char] = 1;
        // };
    }
}
        // if character is something else (space, period, etc.) don't do anything
    // return object at end
    return obj;
}




// approx %55 faster than regexp

function isAlphanumeric(str) {
    var code;

    for (var i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
    }
}
return true;

isAlphanumeric(text);