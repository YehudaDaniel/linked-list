const { TestWatcher } = require('jest');
const LinkedList = require('./LinkedList');

//running test on the "insertToHead" function inside the LinkedList class
describe('#insertToHead', function() {
    test('Should add new node to the linked list', function() {
        const linkedlist = new LinkedList();
        linkedlist.insertToHead(10);
        const oldNode = linkedlist.head;
        linkedlist.insertToHead(20);

        //Expect the new node to be 20
        expect(linkedlist.head.value).toBe(20);
        //Expect the next value to be equal to the old node(value of 10)
        expect(linkedlist.head.next).toBe(oldNode);
        //Expect the length of the list to increase to 2
        expect(linkedlist.length).toBe(2);
    });
});

//running test to make sure the indexes are correct
//trying to fetch by index
describe('#fetchByIndex', function() {
    //when the index is negative, should return NULL
    describe('when index is negative', function() {
        test('should return null', function() {
            const linkedlist = LinkedList.fromValues(10, 20);

            //Expect negative index to return be null
            expect(linkedlist.fetchByIndex(-1)).toBeNull();
        });
    });

    //when the index is 0
    describe('when index is 0', function() {
        test('Should return the head of the class', function() {
            const linkedlist = LinkedList.fromValues(10, 20);
            
            //expect the function to return the number at the first index
            expect(linkedlist.fetchByIndex(0).value).toBe(10);
        });
    });


    //when the index is somewhere in the middle
    describe('when index is in the middle', function() {
        test('Should return element at that index', function() {
            const linkedlist = LinkedList.fromValues(10, 20, 30, 40, 50);

            //Expect to get the element at that index
            expect(linkedlist.fetchByIndex(2).value).toBe(30);
        });
    });
});

//running test to make sure the indexes are correct
//trying to fetch by index
describe('#insertToIndex', function() {
    //when the index is negative, should return NULL
    describe('when index is a negative number', function() {
        test('Should not insert anything', function() {
            const linkedlist = LinkedList.fromValues(10, 20);
            linkedlist.insertToIndex(-1, 11);

            //Expect length not to change
            expect(linkedlist.length).toBe(2);
        });
    });

    //when the index is greater than the lists length
    describe('when index is greater than lists length', function() {
        test('should not insert anything', function() {
            const linkedlist = LinkedList.fromValues(10, 20);
            linkedlist.insertToIndex(4, 5);

            //Expect the length not to change
            expect(linkedlist.length).toBe(2);
        });
    });

    //when the index is 0
    describe('when index is 0', function() {
        test('Should insert at head', function() {
            const linkedlist = LinkedList.fromValues(10, 20);
            linkedlist.insertToIndex(0, 30);

            //Expect head to be the new value
            expect(linkedlist.head.value).toBe(30);
            //Expect the next value to be the previous value
            expect(linkedlist.head.next.value).toBe(10);
            //Expect the length to grow by 1
            expect(linkedlist.length).toBe(3);
        });
    });

    //when the index is somewhere in the middle
    describe('when index is in the middle', function() {
        test('Should insert at the given index', function() {
            const linkedlist = LinkedList.fromValues(10, 20, 30, 40);
            linkedlist.insertToIndex(2, 50);
            const node = linkedlist.fetchByIndex(2);

            //Expect the value at that index to change to the new value
            expect(node.value).toBe(50);
            //Expect the next value to be the previous value
            expect(node.next.value).toBe(30);
            //Expect the length to grow by 1
            expect(linkedlist.length).toBe(5);
        });
    });
});

describe('#removeFromHead', function() {
    test('Should remove from head', function() {
        const linkedlist = new LinkedList.fromValues(10, 20, 30);
        linkedlist.removeFromHead();

        //Expect the new node to be 20
        expect(linkedlist.head.value).toBe(20);
        //Expect the length of the list to discrease to 2
        expect(linkedlist.length).toBe(2);
    });
});

describe('#removeFromIndex', function() {
    //when the index is negative, should return NULL
    describe('when index is a negative number', function() {
        test('Should not remove anything', function() {
            const linkedlist = LinkedList.fromValues(10, 20);
            linkedlist.insertToIndex(-1);

            //Expect length not to change
            expect(linkedlist.length).toBe(2);
        });
    });

    //when the index is greater than the lists length
    describe('when index is greater than lists length', function() {
        test('Should not remove anything', function() {
            const linkedlist = LinkedList.fromValues(10, 20);
            linkedlist.insertToIndex(4);

            //Expect the length not to change
            expect(linkedlist.length).toBe(2);
        });
    });

    //when the index is 0
    describe('when index is 0', function() {
        test('Should remove head', function() {
            const linkedlist = LinkedList.fromValues(10, 20, 30);
            linkedlist.removeFromIndex(0);

            //Expect head to be the new value
            expect(linkedlist.head.value).toBe(20);
            //Expect the next value to be the previous value
            expect(linkedlist.head.next.value).toBe(30);
            //Expect the length to dicrease by 1
            expect(linkedlist.length).toBe(2);
        });
    });

    //when the index is somewhere in the middle
    describe('when index is in the middle', function() {
        test('Should remove from the given index', function() {
            const linkedlist = LinkedList.fromValues(10, 20, 30, 40);
            linkedlist.removeFromIndex(1);
            const node = linkedlist.fetchByIndex(1);

            //Expect the value at that index to change
            expect(node.value).toBe(30);
            //Expect the next value to be the the next value of one element after the deleted element
            expect(node.next.value).toBe(40);
            //Expect the length to dicrease by 1
            expect(linkedlist.length).toBe(3);
        });
    });
});