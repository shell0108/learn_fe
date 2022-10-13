//1.基础架构
function myPromise(fn) {
    let self = this;
    self.status = "pending";
    self.value = null;
    self.reason = null;

    //7.发布订阅模式，支持异步
    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];

    //成功的回调
    function resolve(value) {
        //5.状态判断，只有等待的状态才能操作
        if (self.status === "pending") {
            self.value = value;
            self.status = "fulfilled";
            //9. 状态改变，发布 => 依次取出
            self.onFulfilledCallbacks.forEach(callback => callback(value))
        }
    }

    //失败的回调
    function reject(reason) {
        if (self.status === "pending") {
            self.reason = reason;
            self.status = "rejected";
            self.onRejectedCallbacks.forEach(callback => callback(reason))
        }
    }

    //4.立即执行
    try {
        fn(resolve, reject);
    } catch (err) {
        reject(err)
    }

    //2.then 方法
    myPromise.prototype.then = function (onFulfilled, onRejected) {
        //6.状态改变了， 就会调用then方法
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) { resolve(data) }
        onRejected = typeof onRejected === 'function' ? onRejected : function (err) { throw err }

        //self => myPromise
        let self = this;
        //8. 订阅的操作
        if (self.status === "pending") {
            self.onFulfilledCallbacks.push(onFulfilled);
            self.onRejectedCallbacks.push(onRejected);
        }
    }
}



//3.构造函数立即执行
let demo = new myPromise((resolve, reject) => {
    console.log("hahaha")
    setTimeout(() => {
        resolve(1)
    }, 1000);
})

demo.then(res => console.log(res))

