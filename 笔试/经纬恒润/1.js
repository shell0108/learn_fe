const s = "NowCOder";
console.log(s.length === new Set(s).size)

let flag = true;
for(let i = 0; i < s.length && flag; i++)
    if(s.indexOf(s[i]) !== i) flag = false; 

console.log(flag);
