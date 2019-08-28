// 类和实例

function instance_of(L, R) {
    var O = R.prototype // 构造函数的原型对象
    if (L.__proto__ === O) {
        return true;
    } else {
        return false;
    }
}

// constructor
function Animal(name) {
    this.name = name;
}

// 原型对象的设置
Animal.prototype = {
    caonRun: function() {
        console.log('it can run');
    }
}

// 实例部分
const dog = new Animal('小黄');
console.log(dog instanceof Animal);

// Animal.prototype
// dog.__proto__