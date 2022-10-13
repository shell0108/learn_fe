var a = {
    num:1,
    fn:function() {
        console.log(this.num);
    }
}

var num = 2;
var fn1 = a.fn;
a.fn();
fn1();