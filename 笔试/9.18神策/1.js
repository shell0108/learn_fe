//最大公约数 gcd
function gcd(a, b) {
    let x = Math.min(a, b), y = Math.max(a, b)
    if(y%x === 0) {
        return x;
    }else {
        return gcd(y%x, x);
    }
}
