//传入promises实例数组，若都resovled, 则返回resolved数组，否则reject
promise_all = function(promises){
    return new Promise((resolve, reject) => {
        if(promises.length === 0){
            resolve([]);
        }else{
            let ans = [], total = promises.length;
            for(let i=0;i<total;i++) {
                Promise.resolve(promises[i]).then(res=>{
                    ans[i] = res;
                    if(i === total-1) resolve(ans);
                }).catch(err=>
                    reject(err)
                )
            }
        }
    })
}
