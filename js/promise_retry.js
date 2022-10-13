function promise_retry(promiseFun, times) {
    let count = 1;
    return new Promise((resolve, reject) => {
        let fn = function () {
            promiseFun().then(res => {
                console.log("成功")
                resolve(res.toFixed(2))
            }).catch(err => {
                if (count <= times) {

                    console.log(err.toFixed(2) + " 失败，第" + count + "重新尝试")
                    count++;
                    fn();
                } else reject(err);
            })
        }
        fn();
    })
}

let foo = function () {
    return new Promise((resolve, reject) => {
        let num = Math.random();
        if (num > 0.65) resolve(num);
        else reject(num);
    })
}

promise_retry(foo, 5).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err);
});