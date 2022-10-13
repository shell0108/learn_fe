// let arr = [{flag:false, id:1},{flag:true, id:2},{flag:true, id:3}]

// let ans = [];
// for(let item of arr) {
//     if(item.flag) ans.push(item.id)
// }

// console.log(ans);

//遍历数组
// map、forEach、for、filter、while

// //遍历对象
// for in
// Object.keys
// Object.values
// Object.entries

const navs = [{name:"A", path:"A", children:{name:"B", path:"A/B", children:{name:"C",  path:"A/B/C"}}}, 
{name:"D", path:"D", children:{name:"E", path:"D/E"}}, {name:"F", path:"F"}]

const flatNavs = function(navs) {
    //前序遍历，记录到当前的name路径
    let track = [], ans = [];
    const dfs = (node) => {
        track.push(node.name);
        ans.push({name:track.join("/"), path:node.path});
        
        if('children' in node) dfs(node.children)
        track.pop(node.name);
    }
    for(let item of navs) dfs(item);
    console.log(ans);
}

flatNavs(navs);