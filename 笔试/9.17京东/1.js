let [a, b] = readline().split(' ').map(Number)
// a个1， b个2, 1的左右必须是2
let ans = new Array(a+b).fill(2);
if(b >= a || a === b + 1) {
    for(let i = 0; i < 2 * Math.min(b,a); i+=2) ans[i] = 1
    if(a === b+1) ans[ans.length-1] = 1;
    console.log(ans.join(" "));
} else { 
    console.log(-1);
}    