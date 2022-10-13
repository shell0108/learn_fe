class Person{
    constructor(age) {
        this.age = age;
        return 1;
    }
    f() {
        console.log(1)
    }
    num = 0;
}
var p = new Person(12);
// 构造函数默认返回值是实例对象，若返回值是基本类型则仍然是实例对象，返回值是引用类型才是返回这个引用类型
console.log(typeof p);
console.log(typeof Person);