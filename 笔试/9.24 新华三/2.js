//2. 快速排序
function sortArray(nums) {
    const quick_sort = (arr, l, r) => {
        if (l >= r) return;
        let i = l - 1, j = r + 1, x = arr[(l + r) >> 1];
        while (i < j) {
            do i++; while (arr[i] < x);
            do j--; while (arr[j] > x);
            if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        quick_sort(arr, l, j);
        quick_sort(arr, j + 1, r);
    }
    let ans = [...nums];
    quick_sort(ans, 0, ans.length - 1);
    return ans;
}

console.log(sortArray([2, 1, 3, 7, 6, 5, 4]))