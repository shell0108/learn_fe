class LazyMan {
    constructor(name) {
        this.name = name
        this.task = []      // 任务队列
        console.log(`I'm ${name}`)
 
        setTimeout(() => {
            this.next()
        })
    }
 
    sleep(time) {
        this.task.push(() => {
            console.log(`I am sleeping...`)
            setTimeout(() => {
                console.log(`after ${time} s`)
                this.next()
            },time * 1000)
 
        })
        return this
    }
 
    eat(food) {
        this.task.push(() => {
            console.log(`I am eating ${food}`)
            this.next()
        })
        return this
    }
 
    next() {
        let fn = this.task.shift()
        fn && fn()
    }
}
 
const lazyMan = new LazyMan('jack')
lazyMan.eat('apple').sleep(5).eat('hamburger').sleep(3).eat('pear')