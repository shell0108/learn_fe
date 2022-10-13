// let [n, x, y, k] = [4, 1, 5, 1]
// const arr = [2 ,6, 3, 8];
let [n, x, y, k] = readline().split(' ').map(it => parseInt(it));
const arr = readline().split(' ').map(it => parseInt(it))
arr.sort((a,b) => b-a);
let cost = 0;
for(let it of arr) {
    if(k > 0 && x*it > y) {
        cost += y;
        k--;
    }else {
        cost += x*it;
    }
}
console.log(cost)