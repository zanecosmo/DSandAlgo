class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0;
    }

    push(value) {
        const NODE = new Node(value);
        if (this.size > 0) NODE.previous = this.top;
        this.top = NODE;
        return ++this.size;
    }

    pop() {
        if (this.size === 0) return undefined;
        const OLD_TOP = this.top;
        this.top = OLD_TOP.previous;
        this.size--;
        return OLD_TOP.value;
    }
}

module.exports = Stack;