const [n, m] = readline().split(' ').map(Number);
const arr = readline().split(' ').map(Number);
let cur = 'A';
while(arr.filter(it => it!=='A' && it!=='B').length !== 0) {
    //找到最大的
    let idx, max = 0;
    for(let i=0;i<n;i++) {
        if(arr[i] > max) {
            max= arr[i];
            idx = i;
        }
    }
    arr[idx] = cur;
    //左右侧n个
    let total = 0;
    for(let j = idx+1; j<n && total < m; j++) {
        if(arr[j]!=='A' && arr[j] !=='B'){
            total++;
            arr[j] = cur;
        }
    }
    total = 0;
    for(let j = idx-1; j>=0 && total < m; j--) {
        if(arr[j]!=='A' && arr[j] !=='B'){
            total++;
            arr[j] = cur;
        }
    }
    cur = cur==='A'? 'B': 'A';
}
console.log(arr.join(''));