//1. 数组中次数超过一半的数字

let max = arr[0], cnt = 1;
for(let i=1;i<arr.length;i++) {
    if(arr[i] === max) {
        cnt++;
    }else {
        cnt--;
        if(cnt === 0) {
            max = arr[i];
            cnt = 1;
        }
    }
}

return max;