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

    pop() {
        // if length is 0, return undefned
        
        // store value of tail to return
        // if length is 1: set this.head & tail to null
        
        // if length is greater than one:
        // set tail.previous.next to null
        // set tail.previous to be the new tail
        
        // length--

        // return value

        if (this.length === 0) return undefined;

        const TAIL = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const NEW_TAIL = TAIL.previous;
            NEW_TAIL.next = null;
            this.tail = NEW_TAIL;
        }

        this.length--;
        
        return TAIL.value;
    }

    // student version
    _pop(){
        if(this.length===0) return undefined;
 
        const returnVal = this.tail.value;
        this.tail = this.tail.previous;
        this.length === 1 ? this.head = null : this.tail.next = null;
        this.length--;
        return returnVal;
    }

    shift() {
        // if length is 0 return undefined
        // store head
        // if length is one: st this.head and tail to null
        // else:
        // head.next.previous = null;
        // set head.previous to new head
        // length++
        // return head.value

        if (this.length === 0) return undefined;
 
        const HEAD = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const NEW_HEAD = HEAD.next;
            NEW_HEAD.previous = null;
            this.head = NEW_HEAD;
        }

        this.length--

        return HEAD.value;
    }

    unshift(value) {
        // if length is 0, push(value);
        // store newnode(val)
        // set newnode.next to this.head
        // set this.head.previous to newNode
        // set newnode to the head

        // return list

        const NEW_NODE = new Node(value);

        if (this.length > 0) {
            NEW_NODE.next = this.head;
            this.head.previous = NEW_NODE;
            this.head = NEW_NODE;
        } else {
            this.head = NEW_NODE;
            this.tail = NEW_NODE;
        }

        this.length++;

        return this;
    }

    insert(position, value) {
        // if length is 0 retrn !!push(value);
        // position === length return !!push(value);

        // if position is out of bounds return unndefined

        // create new node
        // save the node at the current position
        
        // set current.previous.next to newnodw
        // set newnode.previous to current.previous
        // set current.previous = newnode
        // set newnode.next to current

        // length++

        // return true

        if (this.length === 0 || position === this.length) return !!this.push(value);
        if (position === 0) return !!this.unshift(value);
        if (position < 0 || position > this.length) return false;

        const NEW_NODE = new Node(value);
        const POST_NODE = this.getNode(position);
        const PRE_NODE = POST_NODE.previous;

        PRE_NODE.next = NEW_NODE;
        NEW_NODE.previous = PRE_NODE;
        POST_NODE.previous = NEW_NODE;
        NEW_NODE.next = POST_NODE;

        this.length++;

        return true;
    }

    remove(position) {
        // if position is out of bound return false
        // if position is 0, shift
        // if position is length pop

        // store get current node
        // store current node.prev and currentnode.next

        // set prenode.next to postnode
        // set postnode.prev to prenode

        // length--
        // return true

        if (position < 0 || position >= this.length) return undefined;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();

        const NODE = this.getNode(position);
        console.log(NODE);
        const PRE_NODE = NODE.previous;
        const POST_NODE = NODE.next;

        PRE_NODE.next = POST_NODE;
        POST_NODE.previous = PRE_NODE;

        this.length--;

        return NODE.value;
    }

    get(position)  {
        return this.getNode(position).value;
    }

    getNode(position) {
        // if length = 0 return undefned
        // position is out of bounds or undefined, return false
        // if position <= Math.floor(length / 2)
        // set current node to head
        // else ccurrent node to tail

        // for (i <= position, i++)
            // i === position ? return current
            // else current = current.next

        // for (i >= position, i--)
        // i === position? return current
        // else current = current.previous

        if (this.length === 0) return undefined;
        if (position < 0 || position >= this.length) return undefined;

        const searchForward = position < Math.floor(this.length / 2) ? true : false;

        let currentNode = searchForward ? this.head : this.tail;

        const start = searchForward ? 0 : this.length - 1;
        const stepIndex = searchForward ? index => ++index : index => --index;

        for (let i = start; () => searchForward ? i <= position : i >= position; i = stepIndex(i)) {
            if (i === position) return currentNode;
            else currentNode = searchForward ? currentNode.next : currentNode.previous;
        }
    }

    set(position, value) {
        // position out of bounds ? return undefined
        // if length === 0 return push
        // node = getNode(value)
        // Node.value = value;

        // return this

        if (position < 0 || position > this.length) return undefined;
        if (this.length === 0) return this.push();

        const NODE = this.getNode(position);
        NODE.value = value;

        return this;
    }
}

module.exports = DoublyLinkedList;