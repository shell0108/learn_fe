//call 函数实现了两点
//1. 改变了this指向
//2. 函数执行了

//可以给对象增加对应函数，调用函数后再删除掉

Function.prototype.myCall = function(context) {
    if(typeof this !== "function") {
        throw new Error(this + "must be a function")
    }
    //首先获取参数
    let args = [...arguments].slice(1); //arguments 为类数组对象

    let result = null;
    //判断context是否传入，没有则设置为window
    context = context || window;
    //this即为要执行的函数
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    //执行函数
    result = context[fnSymbol](...args);
    //手动删除属性
    delete context[fnSymbol];
    //返回函数执行结果
    return result;
}

var obj = {
    value: "vortesnail",
  };
  
function fn(a, b) {
    console.log(this.value);
    console.log(a, b)
}
  
fn.call(obj, 1, 2); 

fn.myCall(obj, 1, 2);