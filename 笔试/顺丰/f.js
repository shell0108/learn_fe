const n = 100000;

if(n <= 3) {
    console.log(3)
}else {
    const arr = new Array(n).fill(1);
    // 自底向上
    // arr[n] = arr[n-1] + arr[n-2] + arr[n-3] + 1;
    for(let i = 3; i < n; i++) arr[i] = (arr[i-1]+arr[i-2]+arr[i-3]+1) % 1000000007;
    console.log(arr[n-1])
}