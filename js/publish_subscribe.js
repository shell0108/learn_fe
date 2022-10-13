class PubSub {
    constructor() {
        this.events = {}
    }
    
    subscribe(type, cb) {
        if (!this.events[type]) {
            this.events[type] = []
        }
        this.events[type].push(cb)
    }

    publish(type, ...args) {
        for(let cb of this.events[type]) {
            cb(...args);
        }
    }
    
    // unsubscribe(type, cb) {
    //     if (this.events[type]) {
    //         const targetIndex = this.events[type].findIndex(item => item === cb)
    //         if (targetIndex !== -1) {
    //             this.events[type].splice(targetIndex, 1)
    //         }
    //         if (this.events[type].length === 0) {
    //             delete this.events[type]
    //         }
    //     }
    // }
    
    // unsubscribeAll(type) {
    //     if (this.events[type]) {
    //         delete this.events[type]
    //     }
    // }
}

let ps = new PubSub();

ps.subscribe("A", () => console.log("A"));
ps.subscribe("A", () => console.log("AA"));
ps.subscribe("A", () => console.log("AAA"));
ps.subscribe("B", () => console.log("B"));

// ps.publish("A")