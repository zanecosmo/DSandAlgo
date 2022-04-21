// bi-directional traversal/searching
// takes more memory;

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push
    push(value) {
        // if length is 0, set this.head = new Node(value);
        // otherwise
        // store new Node(value)
        // set newnode.previous = this.tail
        // this.tail.next = newnode
        // set this.tail to new node
        // return the list

        const NEW_NODE = new Node(value);

        if (this.length > 0) {
            NEW_NODE.previous = this.tail;
            this.tail.next = NEW_NODE;
        } else this.head = NEW_NODE;
        
        this.tail = NEW_NODE;
        this.length++

        return this;
    }
    // pop
    // shift (removing head)
    // unshift (adding item to front)
    // insert
    // remove
}

module.exports = DoublyLinkedList;