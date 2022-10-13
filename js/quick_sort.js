function quick_sort (arr, l, r) {
    if(l >= r) return;
    let i = l - 1, j = r + 1, x = arr[(l+r)>>1];

    while(i < j) {
        do i++; while(arr[i] < x);
        do j--; while(arr[j] > x);
        if(i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    quick_sort(arr, l, j);
    quick_sort(arr, j+1, r);
}

let arr1 =[1,5,7,2,4,-1,0,90]
let arr2 =[6,1,1,1,1,4,-1,0,9,2,3,5]

quick_sort(arr1, 0, arr1.length-1);
console.log(arr1);

quick_sort(arr2, 0, arr2.length-1);
console.log(arr2);