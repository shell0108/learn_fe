//反转字符串
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    const [str, start, end] = line.split(' ');
    const n = str.length;
    let i = str.indexOf(start), j = str.lastIndexOf(end), ans = [], tmp = [];
    i = i === -1 ? 0 : i, j = j === -1 ? n - 1 : j;
    for(let k=0; k < n; k++){
        if(k < i || k > j) ans.push(str[k]);
        else {
            tmp.unshift(str[k]);
            if(k===j) ans = ans.concat(tmp);
        }
    }
    console.log(ans.join(''))
});