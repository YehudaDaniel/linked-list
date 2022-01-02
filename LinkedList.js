/**The class for the linked list */
class LinkedList {
    /**The constructor for the linked list, no params **/
    constructor(){
        this.head = null; //referencing the next element
        this.length = 0; // for keeping track of the length of the list
    }
    /**function for inserting a new node to the head of the constructor
    * the current node "moves to the right" while the new node is the one that is
    * pushing it right, meaning, the new node takes the place of the old node.
    **/
    insertToHead(val) {
        const newNode = new LinkedListNode(val, this.head);
        this.head = newNode;
        this.length++;
    }
    /** Recieves an index and searches and returns it from the list */
    fetchByIndex(index) {
        if(index < 0 || index >= this.length) return null;

        //runs on all the nodes in the list till the index provided and returns
        //the requested node
        let current = this.head;
        for(let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    /**
     * 
     * @param {index} index 
     * @param {value} value 
     * takes an index and a value, and inserts the value into the given index.
     * moving all the other elements forward.
     */
    insertToIndex(index, value) {
        if(index === 0) return this.insertToHead(value);

        const previous = this.fetchByIndex(index - 1);
        if(previous == null) return null;

        previous.next = new LinkedListNode(value, previous.next);
        this.length++;
    }

    /**
     * removes the element at the head of the list, and moves all the other ones
     * back by one.
     */
    removeFromHead() {
        this.head = this.head.next;
        this.length--;
    }

    /**
     * 
     * @param {index} index 
     * @changes 
     */
    removeFromIndex(index) {
        if(index === 0) return this.removeFromHead();

        const previous = this.fetchByIndex(index - 1);
        if(previous == null) return null;

        previous.next = previous.next.next;
        this.length--;
    }

    /** as long as this.head exists, print its value and move to the next node */
    print() {
        let output = '';
        let current = this.head;
        while(current) {
            output = `${output}${current.value} -> `;
            current = current.next;
        }
        console.log(`${output}null`);
    }
}


/** function for taking values and inserting them to the head.
//each time the new value would get the first index and the rest would jump right.
**/
LinkedList.fromValues = function(...values) {
    const linkedlist = new LinkedList;
    for(let i = values.length - 1; i >= 0; i--) {
        linkedlist.insertToHead(values[i]);
    }
    return linkedlist;
}


//The class for the linked list nodes inside the list
class LinkedListNode {
    //the constructor for the class, value being the current value and next being the
    //next linked list node that comes after the current one
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}


//Exporting the class
module.exports = LinkedList;