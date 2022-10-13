function range(start = 0 , end,  step = 1){
    let args = [...arguments];
    let ans = [];
    if(args.length === 1) {
        if(start > 0) {
            for(let i = 0; i < start; i++) ans.push(i);
        }else if(args[0] < 0) {
            for(let i = 0; i > start; i--) ans.push(i);
        }
    }else if(args.length === 2) {
        for(let i = start; i < end; i++) ans.push(i);
    }else {
        if(args[2] > 0) {
            for(let i = start; i < end; i += step) ans.push(i);
        }else if(args[2] < 0) {
            for(let i = start; i > end; i += step) ans.push(i);
        }else {
            for(let i = start; i <= Math.abs(start - end); i++) ans.push(start);
        }
    }
    return ans;
}

console.log(range(4))

console.log(range(-4))

console.log(range(1, 5))

console.log(range(0, 20, 5))

console.log(range(0, -4, -1))

console.log(range(1, 4, 0))

console.log(range(0))