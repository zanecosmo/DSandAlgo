class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    swap = (arr, index1, index2) => {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    insert(value) {
        // insert value into values[]
        // iterate from end
        // child = i
        // parent = Math.floor((i - 1) / 2)
        // if (values[child] =< values[parent]) return;
        // swap(values, child, parent)
        // i = parent

        this.values.push(value);

        let child = this.values.length - 1;

        while (child > 0) {
            const parent = Math.floor((child - 1) / 2);
            if (this.values[child] <= this.values[parent]) return;
            this.swap(this.values, child, parent);
            child = parent;
        }
    }

    extractMax() {
        // if heap.values.length === 0 return undefined
        // save arr[0]
        // set arr[0] = arr.pop();
        // let current = arr[0];
        // save the index of the tallest of two children
        // if the current is smaller than its children
        // swap it with the tallest
        // set iterator to tallest
        // if its not, then end the iteration, its where it belongs
        // return head

        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) return this.values.pop();

        const oldHead = this.values[0];
        this.values[0] = this.values.pop();
        let currentIndex = 0;

        while (true) {
            const index = (currentIndex * 2) + 1;
            const leftChild = this.values[index];
            const rightChild = this.values[index + 1];
            const largerIndex = rightChild === undefined || leftChild > rightChild
                ? index
                : index + 1;

            if (this.values[currentIndex] < this.values[largerIndex]) {
                this.swap(this.values, currentIndex, largerIndex);
                currentIndex = largerIndex;
            } else return oldHead;
        }
    }
}

module.exports = MaxBinaryHeap;