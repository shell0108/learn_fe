const cache = [100]; //缓存数组, cache[i]即为第i个弹跳数
function calNum(n) {
    const isUp = (num) => {
        //判断num是否是上升数
        const arr = String(num).split('');
        for(let i = 0; i < arr.length-1; i++) {
            if(arr[i] > arr[i+1]) return false;
        }
        return true;
    }
    const isDown = (num) => {
        //判断num是否是下降数
        const arr = String(num).split('');
        for(let i = 0; i < arr.length-1; i++) {
            if(arr[i] < arr[i+1]) return false;
        }
        return true;
    }

    //若n 已经在缓存数组里，直接读缓存
    if(n <= cache.length - 1) return cache[n];

    //n超过缓存数组，则从缓存数组末尾位置开始，计算得到第n个弹跳数
    let cur = cache[cache.length-1] + 1;
    while(cache.length - 1 <= n) {
        //既不是上升数也不是下降数，则为弹跳数，存入缓存数组中
        if(!isUp(cur) && !isDown(cur)) cache.push(cur);
        cur++;
    }

    return cache[n];
}

console.log(calNum(1))
console.log(calNum(10000000))
console.log(calNum(10000))