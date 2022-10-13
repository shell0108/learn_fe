const obj = {};
const son1 = {};
const son2 = {};
const map = new Map();
obj[son1] = 1;
obj[son2] = 2;
map.set(son1, 1)
map.set(son2, 2)
console.log(obj[son1])
console.log(obj[son2])
console.log(obj)
console.log(map.get(son1))
console.log(map.get(son2))
console.log(map)