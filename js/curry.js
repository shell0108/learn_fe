// 1. 固定参数，且每次传参参数固定
// const addCurry = function (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//   }
// }

//2. 固定参数，且每次传参长度不固定
// const curry = function (fn, ...a) {
//     return a.length >= fn.length ? fn(...a): (...b) => curry(fn, ...a, ...b);
// };
// const add = (a, b, c) => a + b + c;
// // 将add加工成柯里化函数
// const addCurry = curry(add);
// console.log(addCurry(1, 2, 3));
// console.log(addCurry(1)(2)(3));
// console.log(addCurry(1, 2)(3));
// console.log(addCurry(1)(2, 3));

//3. 不固定参数，每次返回函数和结果
const add = (...a) => {
    let res = a.reduce((pre, cur)=>pre+cur);
    const _add = (...b) => add(res, ...b);
    _add.toString = () => {
        return res;
    }
    return _add;
}

// 注意，方法前都有一个+, 会自动去执行改写后的toString函数
console.log(+add(1)(2));
console.log(+add(1)(2, 3));
console.log(+add(1)(2, 3)(4));