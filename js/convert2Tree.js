let str = JSON.stringify([{"id":1},{"id":2, "pid":1},{"id":3, "pid":1},{"id":4, "pid":1},{"id":2, "pid":1}])
let arr2 = [...new Set(str.split("}")
    .map(item => { let cur = item+"}";return cur.slice(1)})
    .slice(0,-1))]
    .map(item => JSON.parse(item))
console.log(arr2)
// console.log(arr2.map(item => JSON.parse(item)))
//去重
// let arr2 = [...new Set(arr.map(obj => JSON.stringify(obj)))].map(str=>JSON.parse(str));

// //遍历一遍，对于每个有pid的，去插到其父节点上去
for(let i = 0; i < arr2.length; i++)
    if("pid" in arr2[i])
        for(let j=0; j<arr2.length;j++) {
            if(arr2[j].id === arr2[i].pid) {
                if("child" in arr2[j]) arr2[j].child.push(arr2[i]);
                else arr2[j].child = [arr2[i]];
                break;
            }
        }

console.log(arr2)