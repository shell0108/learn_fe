function fn(tree, name){
    //bfs
    let Queue = [[tree.name,tree.children]];
    while(Queue.length > 0) {
        //出队当前节点
        let cur = Queue.shift();
        if(cur[0] === name) return {name: name, code:cur[1]}
        //将children入队
        if(cur.length === 1) continue;

        for(let node of cur[1]) {
            let obj = [node.name];
            if(node.hasOwnProperty("children")) obj.push(node.children);
            if(node.hasOwnProperty("code")) obj.push(node.code);     
            Queue.push(obj);
        }
    }
    return -1;

    //解法二：可用dfs来做
}

var tree = {
 name : '中国',
 children : [
  {
   name : '北京',
   children : [
    {
     name : '朝阳群众'
    },
    {
     name : '海淀区'
    },
    {
     name : '昌平区'
    }
   ]
  },
  {
   name : '浙江省',
   children : [
    {
     name : '杭州市',
     code : '0571',
    },
    {
     name : '嘉兴市'
    },
    {
     name : '绍兴市'
    },
    {
     name : '宁波市'
    }
   ]
  }
 ]
};

var node = fn(tree, '杭州市');
console.log(node);    // { name: '杭州市', code: 0571 }