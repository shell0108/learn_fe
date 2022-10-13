//最长字母
let str = readline();
// let str = 'aaatra';
// let str = 'tqqa';
let a = 0, b = 0; //a为元音个数，b为辐音个数
for(let char of str) {
    if(['a','e','i','o','u'].indexOf(char) > -1) a++;
    else b++;
}

//两个fu音不能相邻
if(a >= b-1) {
    console.log(a+b);
}else {
    console.log(2*a+1);
}

