// Classical inheritance (Constructor Stealing)

function SuperType(){
    this.colors = ['red', 'green', 'blue'];
}

function SubType(){
    // Inherit from SuperType
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors);      // 'red, green, blue, black'

var instance2 = new SubType();
console.log(instance2.colors);      // 'red, green, blue' 


/**
 * Advantage: 
 *      Have the ability to pass argument into the supertype constructor
 *      from within the subtype constructor
 * 
 * Disadvantage:
 *      Methods must be defined inside the constructor, so there is no 
 *      function reuse.
 *      Methods defined on the supertype's prototype are not accessible 
 *      on the subtype, so all types can use only the constructor pattern
 */
