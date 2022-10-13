const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n,k,arr;
rl.on('line', function (line) {
    const tokens = line.split(' ').map(Number);
    if(tokens.length === 2) {
        [n, k] = tokens;
    }else {
        arr = tokens;
        let pair = new Array(n).fill(1).map(v => new Set());
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(i === j)continue;
                if((arr[i]+k) * (arr[j]+k) % 2 === 0) pair[i].add(j);
            }
        }
        let ans = [];
        while(pair.filter(it => it.size===1).length !== 0) {
            for(let x_idx = 0; x_idx < n; x_idx++) {
                if(pair[x_idx].size === 1) {
                    let y_idx = [...pair[x_idx]][0];
                    ans.push([arr[x_idx], arr[y_idx]]);
                    pair[x_idx].clear(), pair[y_idx].clear();
                    for(let i=0;i<n;j++) {
                        pair[i].delete(x_idx), pair[i].delete(y_idx);
                    }
                }
            }
        }
        for(let x_idx = 0; x_idx < n; x_idx++) {
            if(pair[x_idx].size === 0) continue;
            let y_idx = [...pair[x_idx]][0];
            ans.push([arr[x_idx], arr[y_idx]]);
            pair[x_idx].clear(), pair[y_idx].clear();
            for(let i=0;i<n;i++) {
                pair[i].delete(x_idx), pair[i].delete(y_idx);
            }
        }
        console.log(ans.length);
        ans.map(it => {console.log(it[0], it[1])})
    }
});