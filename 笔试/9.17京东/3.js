let [n, k] = readline().split(' ').map(Number);
let arr = readline().split(' ').map(Number);
let t1 = [], t2 = [];
for(let i = 0; i < k; i++) if(arr[i] > k) t1.push(i);
for(let j = k; j < n; j++) if(arr[j] <= k) t2.push(j);
let ans = 0;
for(let idx = 0; idx < t1.length; idx++) ans += (t2[idx] - t1[idx]);

console.log(ans);