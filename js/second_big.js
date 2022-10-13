function get_second_max(arr) {
    const n = arr.length;
    let max = arr[0], sec = -Infinity;
    for(let i = 1; i < n; i++) {
        if(arr[i] > max) {
            //记录sec为上个最大值
            sec = max;
            max = arr[i];
        }else if(arr[i] > sec) {
            //更新sec
            sec = arr[i];
        }
    }
    return sec;
}

console.log(get_second_max([1,2,3,4,5,6,7]))

//寻找数组第k大个元素
//1.排序后再找 时间O(nlogn)
//2.利用大小为k的堆 时间O(nlogk)
//3.快速选择 时间O(n),见算法导论证明