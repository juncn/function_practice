// Method 1: the Factory pattern
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return o;
}
var person1 = createPerson('Jun', 24, 'web developer');
var person2 = createPerson('John', 18, 'student');

// Method 2: the Constructor pattern
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    };
}
var person3 = new Person('Ben', 27, 'teacher');
