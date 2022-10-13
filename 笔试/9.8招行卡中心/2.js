const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let k;
const arr = [];
rl.on('line', function (line) {
    if(isNaN(Number(line))){
        let item = line.split(' ');
        if(item[1] !== '?' && item[2] !== '?' && item[3] !== '?') 
            item[4] = Number(item[1]) + Number(item[2]) + Number(item[3])
        if(item[4] !== '?') {
            if(item[2] !== '?' && item[3] !== '?')
                item[1] = Number(item[4]) - Number(item[2]) - Number(item[3])
            if(item[1] !== '?' && item[3] !== '?')
                item[2] = Number(item[4]) - Number(item[1]) - Number(item[3])
            if(item[1] !== '?' && item[2] !== '?')
                item[3] = Number(item[4]) - Number(item[1]) - Number(item[2])
        }
        arr.push(item);  
    }else {
        k = Number(line);
    }

    if(k === arr.length){
        arr.sort((a, b) => {
            let [t1, t2] = [a[4], b[4]];
            if(t1 === '?' && t2 === '?') {
                if(a[0] === '?' && b[0] !== '?') {
                        return 1;
                    }else if(a[0] !== '?' && b[0] === '?') {
                        return -1;
                    }else if(a[0] !== '?' && b[0] !== '?'){
                        if(a[0] > b[0]) return 1;
                        else if(a[0] < b[0]) return -1;
                        return 0;
                    }
            }else if(t1 === '?' && t2 !== '?') {
                return 1;
            }else if(t1 !== '?' && t2 === '?') {
                return -1
            }else {
                if(Number(t1) > Number(t2)) {
                    return -1;
                } else if(Number(t1) < Number(t2)) {
                    return 1;
                } else  {
                    if(a[0] === '?' && b[0] !== '?') {
                        return 1;
                    }else if(a[0] !== '?' && b[0] === '?') {
                        return -1;
                    }else if(a[0] !== '?' && b[0] !== '?'){
                        if(a[0] > b[0]) return 1;
                        else if(a[0] < b[0]) return -1;
                        return 0;
                    }
                }
            }
        })
        for(let it of arr){
            console.log(it.join(' '))
        }
    }
});