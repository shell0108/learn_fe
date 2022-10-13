// const arr = [1,2,3,1,3,5,7,3,4,5]
// const arr = [1,2,1,2,1]
const arr = [1,1,1]

let n = 1; 
for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i+1] > arr[i]) {
        arr[i] = n;
        n++;
    }else if (arr[i+1] === arr[i]){
        arr[i] = n;
    }else {
        n = 1;
    }
}

arr[arr.length-1] = n;
console.log(arr)
console.log(arr.reduce((pre,cur)=>pre+cur));