const jump = (arr) => {
    //到达arr[i]的时候k是知道的
    //再去到arr[i]+k-1, arr[i]+k, arr[i]+k-1这三块石头，如果有的话, 此时下一块石头的k也是知道的，
    //直到跳到最后一块石头，或者跳过了
    // x为当前的石头，k为跳到这块石头经过的步数
    let flag = false, track = [], ans = [];
    const dfs = (x, k) => {
        console.log(x,k)
        if (flag) return;
        if (x === arr[arr.length - 1]){
            ans = [...track];
            flag = true;
        } 

        //选择列表
        for (let i = - 1; i<= 1; i++)
            if (k+i > 0 && arr.indexOf(x + k + i) > 0){
                track.push(x+k+i)
                dfs(x + k + i, k + i); 
                track.pop();
            }
                
    }
    
    dfs(1, 1);
    console.log(ans);
    return flag;
}

console.log(jump([0, 1, 3, 5, 6, 8, 12, 17]))