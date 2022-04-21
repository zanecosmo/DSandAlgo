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

    get(position) {
        let node = this.getNode(position);
        if (node === undefined) return undefined;
        return node.value
    }

    getNode(position) {
        if (position < 0 || position >= this.length) return undefined;
        let node = this.head;
        for (let i = 0; i < position + 1; i++) {
            if (i === position) return node;
            node = node.next;
        }        
    }

    set(position, value) {
        let node = this.getNode(position);
        if (node === undefined) return undefined ;
        node.value = value;
    }

    remove(position) {
        // if length === 0 return undefined (nothing to remove)
        // if if position is beyond bonds, return undefined
        
        // if removing from front of list, make sure to reset head (shift)
        // if removing from back, reset tail (pop)

        // if removing from positionn between 1 and length - 1,
        // prenode = get node at given position - 1
        // node = prenode.next
        // prenode.next = node.next        
        // length--

        // return node.value

        if (this.length === 0) return undefined;
        if (position < 0 || position >= this.length) return undefined;

        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();

        const preNode = this.getNode(position - 1);
        const node = preNode.next;
        preNode.next = node.next;
        this.length--;

        return node.value;
    }

    insert(position, value) {
        // HANDLED: out of bounds position
        // if position is less than 0 or greater than this.length, throw

        // HANDLED: list is empty
        // if position === this.length nad lenth === 0, return push the value to the list

        // HANDLED: inserting at postion 0
        // let node = new Node(val)
        // node.next = this.head
        // this.head = node
        // this.length++

        // HANDLED: inserting at position 1 through end
        // let prenode = getNode(position - 1)
        // let postnode == prenode.next
        // let node = newNode(value)

        // prenode.next = node;
        // node.next = postnode;
        // this.length++

        if (position === 0 && this.length === 0) return !!this.push(value);
        
        if (position < 0 || position > this.length) return false;

        const node = new Node(value);
        const preNode = position === 0 ? null : this.getNode(position - 1);
        const postNode = position === 0 ? this.head : preNode.next;

        if (preNode !== null) preNode.next = node;
        node.next = postNode;
        if (postNode === this.head) this.head = node;
        this.length++

        return true;
    }

    // instructor insert
    _insert(position, value) {
        if (position < 0 || position > this.length) return false;
        if (position === this.length) return !!this.push(value);
        if (position === 0) return !!this.unshift(value);

        const preNode = this.getNode(position - 1);
        const postNode = preNode.next;
        const node = new Node(value);

        preNode.next = node;
        node.next = postNode;
        this.length++

        return true;
    }

    shift() {
        if (this.head === null) return undefined;
        const val = this.head.value;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return val;
    }

    unshift(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        if (this.head.next === null) this.tail = this.head;
        this.length++;
        return this;
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
    ____pop() {
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
    
    // recursive version
    pop(node = this.head, value = this.tail.value) {
        if (node.next === this.tail || node === this.tail) {
            this.tail = node === this.tail ? null : node;
            node.next = null;
            this.length--;
        } else return this.pop(node.next, value);

        if (this.length === 0) this.head = null;
        return value;
    }

    // student recursive version
    __pop(newTail = null, current = this.head) {
        if (!current) return;
     
        if (current.next) return this.__pop(current, current.next)
     
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