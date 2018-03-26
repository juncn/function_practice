var person = {
    name: 'Jun',
    friends: ['Shelby', 'Court', 'Van']
};

var anotherPerson = Object.create(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Rob');

console.log(person.friends);