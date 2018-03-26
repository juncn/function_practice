function SuperType(name){
    this.name = name;
    this.colors = ['red', 'green', 'blue'];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name, age){
    // Inherit properties
    SuperType.call(this, name);

    this.age = age;
}

// inherit methods
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function(){
    console.log(this.age);
}

var instance1 = new SubType('Jun', 24);
instance1.colors.push('black');
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType('Junming', 29);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();