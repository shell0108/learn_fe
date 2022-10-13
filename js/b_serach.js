//标准二分
const b_search = (nums, target) => {
    let l = 0, r = nums.length - 1;
    while(l <= r) {
        let mid = (l + r) >> 1;
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            l = mid + 1;
        } else if(nums[mid] > target) {
            r = mid - 1;
        }
    }
    return -1;
}

const upper_bound = (nums, target) => {
    //[l, r), 更新为[l, mid), [mid+1, r)
    let l = 0, r = nums.length;
    while(l < r) {
        let mid = (l + r) >> 1;
        if(nums[mid] === target) {
            l = mid + 1;
        } else if(nums[mid] < target) {
            l = mid + 1;
        } else if(nums[mid] > target) {
            r = mid;
        }
    }
    return nums[l - 1] === target ? l - 1 : -1;
}

//lower_bound，查找左边界，可找到大于等于它的最小值
const lower_bound = (nums, target) => {
    //[l, r), 更新为[l, mid), [mid+1, r)
    let l = 0, r = nums.length;
    while(l < r) {
        let mid = (l + r) >> 1;
        if(nums[mid] === target) {
            r = mid;
        } else if(nums[mid] < target) {
            l = mid + 1;
        } else if(nums[mid] > target) {
            r = mid;
        }
    }
    return nums[l] === target? l: -1;
}

let arr1 = [0,1,1,1,1,1,12];
let arr2 = [0,1,2,3,4,5];
let arr3 = [1,1,1,1,1,1,1,1];

let arr4 = [-2,-1,1,2,3,4,5,6];
let arr5 = [-2,-1,0,2,3,4,5,6];


// console.log (upper_bound(arr1,1))
// console.log (lower_bound(arr1,1))

// console.log (upper_bound(arr2,1))
// console.log (lower_bound(arr2,1))

// console.log (upper_bound(arr3,1))
// console.log (lower_bound(arr3,1))

console.log (upper_bound(arr4,1))
console.log (lower_bound(arr4,1))

console.log (upper_bound(arr5,1))
console.log (lower_bound(arr5,1))