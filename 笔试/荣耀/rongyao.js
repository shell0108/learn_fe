let arr = [161, 162, 163, 164, 164, 164, 166, 167, 168, 170, 170, 173]

const n = arr.length;
//找到最多的元素
let map = new Map();
for(let item of arr) {
    if(map.has(item)) map.set(item, map.get(item)+1)
    else map.set(item, 1)
}

let N = 1
for(let value of map.values()){
    if(value > N)
        N = value
}

// 可以整除情况下， 每行K个，一共N行
let K = arr.length / N;
let ans = new Array(N).fill(0).map(k => new Array());
//遍历map，将value不为1的依次分配到不同行
for(let [key, value] of map.entries()){
    if(value > 1) {
        while(value > 0) {
            ans[--value].push(key)
        } 
    }
}

for(let [key, value] of map.entries()){
    if(value === 1) {
        for(let it of ans) {
            if(it.length < K) {
                it.push(key)
                break;
            }
        }
    }
}

console.log(ans.map(item=>item.sort()))