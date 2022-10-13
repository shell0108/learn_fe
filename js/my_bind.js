//bind()方法创建一个新函数，新函数的this指向bind的第一个参数，而其余参数则将作为新函数的参数进行调用
Function.prototype.myBind = function (context) {
    if(typeof this !== "function") {
        throw new Error(this + "must be a function");
    }

    const args = [...arguments].slice(1);
    const fn = this;
    return function Fn() {
        return fn.apply(context, args.concat([...arguments]))
    }
}

// 测试
let obj = {
    value: 'test',
};
function foo(a, b){
    console.log(this.value);
    console.log([a, b]);
}
let bound = foo.bind(obj, 1);
bound(2);

let bound2 = foo.myBind(obj, 2);
bound2(3);
