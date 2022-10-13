var o = Object.create({x:1, y:2});
o.z = 3;
let {x,...r} = o;
console.log(x);
console.log(r);