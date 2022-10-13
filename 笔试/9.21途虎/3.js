//买三种轮胎的方案数
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    const [total, ...cost] = line.split(' ').map(Number);
    let track = [], set = new Set(), tmp = [0,0,0];
    const dfs = (now) => {
        if(total - now >= 0) {
            tmp = [0,0,0];
            track.forEach(it => tmp[it]++);
            let elm = String(tmp[0]) + ',' + String(tmp[1]) + ',' + String(tmp[2])
            if(set.has(elm)) return;
            set.add(elm);
        }
        for(let i = 0; i < 3; i++)
            if(total - now >= cost[i]) {
                track.push(i);
                dfs(now+cost[i]);
                track.pop(i);
            }
    }
    dfs(0);
    console.log(set.size);
});