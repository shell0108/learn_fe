//2 找到数组中符合规则的数字
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    const arr = line.split(' ').map(Number);
    const k = arr.pop(), n = arr.length;
    if(k >= arr.length - 1) {
        console.log(Math.max(...arr));
        return
    }
    let max = -Infinity
    for(let i = 0; i < n; i++) {
        if(arr[i] > max) {
            let j = i+1, cnt = 0;
            while(j < n && cnt < k - 1 && arr[j] < arr[i]){
                j++;
                cnt++
            } 
            if(cnt === k - 1){
                console.log(arr[i]);
                break;  
            } 
            max = arr[i];
        }
    }
});