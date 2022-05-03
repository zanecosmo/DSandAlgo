class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const NODE = new Node(value);
        this.length === 0 ? this.first = NODE : this.last.next = NODE;
        this.last = NODE;
        return ++this.length;
    }

    dequeue(type) {
        if (this.length === 0) return undefined;
        const NODE = this.first;
        this.first = NODE.next;
        this.length--;
        return type === "node" ? NODE : NODE.value;
    }
}

module.exports = Queue;