//apply 函数同call函数功能类似，只是传参上不同，call传递的是参数序列，而apply传递的是数组
//apply函数做了两件事
//1. this指向改变了
//2. 函数执行了

Function.prototype.myApply = function(context) {
    if(typeof this !== "function") {
        throw new error (this + "must be a function");
    }

    //获取参数
    let args = arguments[1];
    if(!Array.isArray(args)) {
        throw new Error("第二参数需要为数组")
    }
    //context若没传则设置为window
    context = context || window;

    //给传入对象绑定函数
    let fnSymbol = Symbol();
    context[fnSymbol] = this;

    let result = context[fnSymbol](...args);

    //手动删除
    delete context[fnSymbol];

    return result;
}

//测试
function foo(a, b) {
    console.log(this.value);
    console.log(a,b)   
}

let obj = {
    value:  "test"
}

foo.apply(obj, [1,2])

foo.myApply(obj, [3,4])