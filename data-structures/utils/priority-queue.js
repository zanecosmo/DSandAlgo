class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    swap = (arr, index1, index2) => {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    enqueue(value, priority) {
        const NODE = new Node(value, priority);

        this.values.push(NODE);

        let child = this.values.length - 1;

        while (child > 0) {
            const parent = Math.floor((child - 1) / 2);
            if (this.values[child].priority > this.values[parent].priority) return;
            this.swap(this.values, child, parent);
            child = parent;
        }
    }

    dequeue() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();

        const oldHead = this.values[0];
        this.values[0] = this.values.pop();
        let currentIndex = 0;

        while (true) {
            const index = (currentIndex * 2) + 1;
            if (index >= this.values.length) return oldHead;
            const leftChild = this.values[index];
            const rightChild = this.values[index + 1];
            // console.log(index, this.values.length, leftChild, rightChild);
            const smallerIndex = rightChild === undefined || leftChild.priority < rightChild.priority
                ? index
                : index + 1;

                // console.log(smallerIndex)
            if (this.values[currentIndex].priority > this.values[smallerIndex].priority) {
                this.swap(this.values, currentIndex, smallerIndex);
                currentIndex = smallerIndex;
                // console.log(currentIndex);
            } else return oldHead;
        }
    }
}

module.exports = PriorityQueue;