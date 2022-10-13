//计算数组中极差
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 有一个无序整型数组，求出这个数组中最大差值
 * @param arr int整型一维数组 
 * @return int整型
 */
 function getMaxProfit( arr ) {
    // write code here
    let min=arr[0], max=arr[0];
    arr.forEach(item=>{
        if(item < min) min = item;
        if(item > max) max = item;
    })
    return max-min;
}
module.exports = {
    getMaxProfit : getMaxProfit
};