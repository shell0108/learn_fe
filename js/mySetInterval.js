//使用setTimeout实现setInterval
function mySetInterval(fn, delay) {
    setTimeout(()=>{
        fn();
        return mySetInterval(fn, delay);
    },delay)
}