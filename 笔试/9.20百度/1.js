//1. 贴吧水贴
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n, arr
rl.on('line', function (line) {
    const tokens = line.split(' ').map(Number);
    if(tokens.length===1) {
        n = tokens[0];
    }else {
        arr = tokens;
        let reply = 0, approve = 0;
        arr.map(cur => {
            if(cur === 1) {
                reply++
            }else if(cur === 2) {
                approve++;
            }else if(cur === 3) {
                if(reply > approve) reply++;
                else if(reply < approve) approve++;
                else {
                    reply++;
                    approve++;
                }
            }
        })
        console.log(reply, approve)
    }
});