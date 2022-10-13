let arr = [1,2,3]

/*方法一 for of */
for(let item of arr) {
    console.log(item);
}

/*方法二 for*/
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/*方法三：forEach*/
arr.forEach(item =>{
    console.log(item)
} )
