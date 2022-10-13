// 用递归去做，和商汤利用setTimeout来实现setInterval一样
function serialPromises(arr=[]) {
    //promise的结果数组
    const result = [];
    const arrLength = arr.length;
    return new Promise((resolve, reject) => {
      let index = 1;
      //then的回调函数，通过该函数实现promise依次调用
      function resolvePromise(v) {
        result.push(v);
        //不是最后一个
        if (index + 1 < arrLength) {
          //调用index下标的函数生成下一个promise
          arr[index++]().then(resolvePromise);
        } else {
          //最后一个promise完成后，resolve返回的promise
          arr[index]().then((v) => {
              result.push(v);
              resolve(result);
            }).catch((err) => {
              reject(err);
            });
        }
      }
      if (arrLength === 0) {
        resolve(result)
      } else {
        //触发第一个promise
        arr[0]().then(resolvePromise);
      }
    });
  }