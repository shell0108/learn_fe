typeof(function f(){return "1"}, function g(){return 2})() //'number'

//变量提升-> 声明提升
//函数提升在前面，且不会被变量覆盖
console.log(a)
function a () {
    return 1;
}
var a = 1;

a = function (){
    return 2;
}