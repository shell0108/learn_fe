function my_flat(arr) {
    let ans = [];
    for(let item of arr) {
        if(Array.isArray(item)){
            //合并两个数组
            // ans = ans.concat(my_flat(item));
            ans = [...ans,...my_flat(item)]
            // let tmp = ;
            // for(let it of tmp) ans.push(it);
        } else {
            ans.push(item);
        }
    }
    
    return ans;
}

console.log(my_flat([[1,2],3,[[4,5],6]]))