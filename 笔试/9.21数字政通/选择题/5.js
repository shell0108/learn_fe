function setData(data) {
    data.value = 2;
    data = {value: 3};
    data.value = 4;
}
var data = {value: 1};
setData(data)
console.log(data.value)