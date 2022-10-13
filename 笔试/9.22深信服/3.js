//寻找最佳站点的位置
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    let graph = line.split('|').map(edgeStr => edgeStr.split(" "))
    let arr = [];
    graph.map(edge => {
        if(arr.indexOf(edge[0]) > -1) edge[0] = arr.indexOf(edge[0])
        else {
            arr.push(edge[0])
            edge[0] = arr.length-1
        }
       
        if(arr.indexOf(edge[1]) > -1) edge[1] = arr.indexOf(edge[1])
        else {
            arr.push(edge[1])
            edge[1] = arr.length-1
        }
        
        edge[2] = Number(edge[2])
    })
    
    const n = arr.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));
    graph.map(edge => {dp[edge[0]][edge[1]] = edge[2]})
    for(let i = 0; i < n; i++) dp[i][i] = 0;
    
    // 使用 floyd 算法预处理出所有点对之间的最短路径长度
    for (let k = 0; k < n; k++) 
        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j])
    
    let min = Infinity, ans
    dp.map((it,idx) => dp[idx] = it.reduce((pre, cur)=>pre+cur));
    
    for(let i=0;i<n;i++)
        if(dp[i] < min) min = dp[i], ans = arr[i];
    
    console.log(ans)
});