//JSON.parse(JSON.stringify()) 面对拷贝函数与循环引用会失效

const obj = {
    a: 'a',
    b: 'b',
    c: [1,2,3],
    d: {
        d1:'d1',
        d2:{
            d3:'d3'
        }
    }
}

obj.obj = obj

function clone(target, map = new WeakMap()) {
    if(typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? []: {};
        if(map.has(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for(let key in target) {
            //还需排除其原型链上的属性
            if(target.hasOwnProperty(key)){
                cloneTarget[key] = clone(target[key], map); 
            }
        }
        return cloneTarget;
    }else {
        return target;
    }
}
let newObj = clone(obj);

newObj.d.d1 = 'd1111'

console.log(obj);
console.log(newObj);