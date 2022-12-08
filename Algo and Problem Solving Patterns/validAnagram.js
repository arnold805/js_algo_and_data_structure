function validAnagram (first_string, second_string) {

    // compare string lengths with each other
    if(first_string.length !== second_string.length) {
        return false
    }
    // convert first string to array
    let first_string_split = first_string.split("")
    console.log(first_string_split)

    // convert second string to array and flip
    let second_string_split = second_string.split("")
    let second_string_flipped = second_string_split.reverse()
    console.log(second_string_flipped)
    // compare first string and second string flipped
    if(first_string_split = second_string_flipped) {
        return true
    }
}