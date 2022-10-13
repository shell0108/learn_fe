var data = [{
    id: '100',
    name: '上海',
    children: [{
        id: '101',
        name: '浦东',
        children: []
    }, {
        id: '102',
        name: '浦西',
        children: []
    }]
}, {
    id: '103',
    name: '上海2',
    children: [{
        id: '104',
        name: '浦东2',
        children: []
    }, {
        id: '105',
        name: '浦西2',
        children: []
    }]
}, {
    id: '106',
    name: '上海3',
    children: [{
        id: '107',
        name: '浦东3',
        children: []
    }, {
        id: '108',
        name: '浦西3',
        children: []
    }]
},]

function getNameById(id, data) {
    let ans;
    const dfs = (id, arr) => {
        if(ans !== undefined) return;
        for(let i=0; i<arr.length;i++) {
            if(arr[i].id === id) {
                ans = arr[i].name;
                break;
            }
            dfs(id, arr[i].children);
        }
    }
    dfs(id, data);
    return ans;
}

console.log(getNameById('100', data))
console.log(getNameById('101', data))
console.log(getNameById('102', data))
console.log(getNameById('103', data))
console.log(getNameById('104', data))
console.log(getNameById('105', data))
console.log(getNameById('106', data))
console.log(getNameById('107', data))
console.log(getNameById('108', data))