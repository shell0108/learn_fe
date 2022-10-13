let obj = {a:"A", b:"B"};

for(let key in obj){
    console.log(key, obj[key]);
}

for(let key of Object.keys(obj)) {
    console.log(key)
}

for(let value of Object.values(obj)) {
    console.log(value)
}

for(let [key, value] of Object.entries(obj)){
    console.log(key,value)
}