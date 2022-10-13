function Parent(name) {
    this.name = name || '⽗亲'; // 实例基本属性 (该属性，强调私有，不共享)
    this.arr = [1]; // (该属性，强调私有)
}
Parent.prototype.say = function () { // -- 将需要复⽤、共享的⽅法定义在⽗类原型上
    console.log('hello')
}
/*
    1.原型链继承
*/
function Child(like) {
    this.like = like;
}
Child.prototype = new Parent() // 核⼼，但此时Child.prototype.constructor==Parent
Child.prototype.constructor = Child // 修正constructor指向
var boy1 = new Child()
var boy2 = new Child()
// 缺点1：不能向⽗类构造函数传参
// 缺点2: ⼦类实例共享了⽗类构造函数的引⽤属性


/*
    2.借用构造函数继承
*/
function Child(name, like) {
    Parent.call(this, name); // 核⼼ 拷⻉了⽗类的实例属性和⽅法
    this.like = like;
}
var boy1 = new Child('⼩红', 'apple');
var boy2 = new Child('⼩明', 'orange ');
// 优点1：可向⽗类构造函数传参
// 优点2：不共享⽗类构造函数的引⽤属性
// 缺点1：⽅法不能复⽤
console.log(boy1.say === boy2.say) // false (说明，boy1和boy2的say⽅法是独⽴，不是共享的)
// 缺点2：不能继承⽗类原型上的⽅法
Parent.prototype.walk = function () { // 在⽗类的原型对象上定义⼀个walk⽅法。
    console.log('我会⾛路')
}
boy1.walk; // undefined (说明实例，不能获得⽗类原型上的⽅法)

/*
    3.组合继承
*/
function Parent(name) {
    this.name = name; // 实例基本属性 (该属性，强调私有，不共享)
    this.arr = [1]; // (该属性，强调私有)
}
Parent.prototype.say = function () { // --- 将需要复⽤、共享的⽅法定义在⽗类原型上
    console.log('hello')
}
function Child(name, like) {
    Parent.call(this, name, like) // 核⼼ 第⼆次
    this.like = like;
}
Child.prototype = new Parent() // 核⼼ 第⼀次
Child.prototype.constructor = Child // 修正constructor指向
var boy1 = new Child('⼩红', 'apple')
var boy2 = new Child('⼩明', 'orange')
// 优点1：可以向⽗类构造函数传参数
console.log(boy1.name, boy1.like); // ⼩红，apple
// 优点2：可复⽤⽗类原型上的⽅法
console.log(boy1.say === boy2.say) // true
// 优点3：不共享⽗类的引⽤属性，如arr属性
boy1.arr.push(2)
console.log(boy1.arr, boy2.arr); // [1,2] [1] 可以看出没有共享arr属性。
// 缺点1：由于调⽤了2次⽗类的构造⽅法，会存在⼀份多余的⽗类实例属性

/*
    4.组合寄生继承
*/
Parent.call();
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;



// 原型链继承直接把子类的prototype指向父类的实例，共享了父类的引用属性，并且不能向父类构造函数传参

// 构造函数继承在子类里面call父类的构造函数，没有复用父类的方法，再之后向父类添加的属性方法无法继承

// 组合继承，即上述两个的结合，会调用两次父类的构造方法，存在冗余

// 组合寄生继承，最完美的继承，先是在子类里call父类的构造函数，在将其prototype指向由Object.create创建的父类的原型拷贝
// 最后再将子类的constructor指正回来

// es6的class继承