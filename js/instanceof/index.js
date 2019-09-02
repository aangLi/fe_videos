// 类和实例

function instance_of(L, R) {
    var O = R.prototype // 构造函数的原型对象
    // if (L.__proto__ === O) {
    //     return true;
    // } else {
    //     return false;
    // }

    L = L.__proto__;
    while (true) {
        if (L === null) {
            return false;
        }
        if (L === O) {
            return true;
        }
        L = L.__proto__;
    }
}

// constructor
function Animal(name) {
    this.name = name;
}

// 原型对象的设置
Animal.prototype = {
    caonRun: function () {
        console.log('it can run');
    }
}

// 实例部分
const dog = new Animal('小黄');
console.log(dog instanceof Animal);

// Animal.prototype
// dog.__proto__

function Cat() {
    this.speak = '喵';
}

// 原型对象
Cat.prototype = new Animal('miao');
// 原型对象的constructor 属性， 谁是原型对象的构造函数？
Cat.prototype.constructor = Cat;

const garfield = new Cat('加菲猫');
// js 对象会沿着原型链， 查找 继承

console.log(instance_of(garfield, Animal));
console.log(garfield.__proto__.__proto__);