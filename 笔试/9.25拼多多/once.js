function once(fn) {
    let isFirst = true;
    let result = undefined
    return function () {
        if(isFirst) {
            result = fn.apply(this, arguments);
            isFirst = false;
        }
        return result;
    }
}

let a = once((x) => x);
console.log(a(1))
console.log(a(2))
console.log(a(3))