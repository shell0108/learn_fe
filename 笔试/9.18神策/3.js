// 贪婪算法,leetcode 621
function leastInterval(tasks, n) {
    //先排序，最多的任务先排，其间隔为n个时间
    let map = new Map();
    tasks.map(item => {
        if(map.has(item)) map.set(item, map.get(item)+1);
        else map.set(item, 1);
    })

    let tasks_sort = Array.from(map).sort((a,b)=>b[1]-a[1]);
    let max = tasks_sort[0][1], k = 0;
    tasks_sort.map(it => {
        if(it[1] === max) k++;
    })

    return Math.max(tasks.length, (n+1)*(max-1) + k)
}