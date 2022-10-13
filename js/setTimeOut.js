for(var i = 0; i < 5; i++) {
    setTimeout(()=>{
        console.log(i)
    }, 1000)
}


for(let i = 0; i < 5; i++) {
    setTimeout(()=>{
        console.log(i)
    }, 1000 * i)
}

// function sleep(time) {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => reslove(), time)
//     })
// }
// for(let i=0;i<5;i++){
//     sleep(1000*i).then(res => console.log(i));
// }

(async function(){
    for(let i=0; i < 5; i++) {
        await sleep(1000);
        console.log(i);
    }
})()

async function async1() {
    console.log("async1 start");  //2
    await async2();
    console.log("async1 end"); //4 
  }

async function async2() {
    console.log("async2"); //3
}

console.log("script start"); //1

setTimeout(function () {
    console.log("setTimeout"); //8
}, 0);

async1();

new Promise(function (resolve) {
    console.log("promise1"); //5
    resolve();
}).then(function () {
    console.log("promise2"); //7
});

console.log("script end"); //6
