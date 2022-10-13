function reverseString(str) {
    let arr = str.split(" ");
    return arr.map(v => v.split("").reverse().join("")).join(" ");
}

console.log(reverseString("how are you"))

function reverseString2(str) {
    console.log(str.split("").reverse().join("").split(" ").reverse().join(" "))
}

console.log(reverseString2("how are you"))