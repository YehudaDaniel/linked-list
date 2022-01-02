const LinkedList = require('./LinkedList');

//creating a linked list from the values listed
const test = LinkedList.fromValues(10, 20, 30);

//printing the list to the console
console.log('printing the list to the console');
test.print();

//inserting a new value at a specified index
console.log('--- inserting a new value at a specified index ---');
test.insertToIndex(1, 50);

//printing the list to the console
console.log('printing the list to the console');
test.print();

//removing the first element, the head, from the list
console.log('--- removing the first element, the head, from the list ---');
test.removeFromHead();

//printing the list to the console
console.log('printing the list to the console');
test.print();