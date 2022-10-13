function A() {
    this.data = 'a';
}

function B() {
    this.data = 'b';
}

function C(){}

B.prototype = new A();
C.prototype = new A();
var data = 'c';

var b = new B();
var c = new C();
console.log(b.data, c.data);