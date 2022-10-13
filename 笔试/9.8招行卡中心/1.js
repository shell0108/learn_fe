const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let k, str;
rl.on('line', function (line) {
    if(isNaN(Number(line))) {
        str = line;
    }else {
       k = Number(line);
    }
    
    if(str) {
        let cnt = 0, ans = [];
        for(let i = 1; i < str.length; i++) {
            cnt = (cnt + 1) % (k+1);
            if(cnt === 0) continue;
            ans.push(str[i]);
        }
        console.log(ans.join(''));
    }
});

