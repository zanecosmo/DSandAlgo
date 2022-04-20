// node : piecce of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }
    // my version
    pop() {
        if (this.length === 0) return undefined;

        let value;
        let node = this.head;

        while(node !== null) {

            if (node.next === null) {
                value = node.value;
                this.head = null;
                this.tail = null;
                this.length--;
                return value;
            }

            if (node.next.next === null) {
                value = node.next.value;
                node.next = null;
                this.tail = node;
                this.length--;
            }

            node = node.next;
        }

        return value;
    }
    
    //recursive version
    // value = node.value
    __pop(node = this.head, value = this.tail.value) {
        if (node.next === this.tail || node === this.tail) {
            this.tail = node === this.tail ? null : node;
            node.next = null;
            this.length--;
        } else return this.__pop(node.next, value);

        if (this.length === 0) this.head = null;
        return value;
    }

    // student recursive version
    ____pop(newTail = null, current = this.head) {
        if (!current) return;
     
        if (current.next) return this.____pop(current, current.next)
     
        !!(this.tail = newTail)
          ? this.tail.next = null
          : this.head = null;
     
        this.length--;
        return current
    }

    // instructor version    1 2 3 null
    _pop() {
        if (!this.head) return undefined;

        let node = this.head;
        let newTail = node;

        while (node.next !== null) {
            newTail = node;
            node = node.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return node.value;
    }
}

module.exports = SinglyLinkedList;