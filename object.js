/**
 * some property save kora rakhar nam holo object 
 */

const person = {
    name : 'atik',
    address: 'rajshahi',
}

person.contact = 'no contact';

const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);

console.log(person);
console.log(person['name']);
console.log(person.name);
console.log(person.address);