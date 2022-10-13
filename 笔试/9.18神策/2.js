//找出数组中第k大的数字在数组中出现多少次
function getTimes(array, k) {
    const arr_unique = [...new Set(array)].sort((a,b)=>b-a);
    let ans = 0;
    array.map(item => {
        if(item === arr_unique[k-1]) ans++;
    })
    return ans;
}