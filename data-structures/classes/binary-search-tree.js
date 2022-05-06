const Queue = require("./queue.js");
const Stack = require("./stack.js");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        // if root is null, set root to the new node and return

        // comparand = root

        // if value is greater than comparand.value
            // if comparand.right != null, set comparad.riht to node
            // else set comparand to comparand.right
        // else if value is less thn comparand.value
            // if comparand.left != null, set comparand.left = node
            // else set comparand to comparand.left

        const NODE = new Node(value)
        if (this.root === null) {
            this.root = NODE;
            return this;
        }

        let comparand = this.root;
        
        while (true) {

            if (value === comparand.value) {
                console.log("NO DUPLICATES (" + value + ") ALLOWED");
                return this;
            }
            
            if (value > comparand.value) {
                if (comparand.right === null) {
                    comparand.right = NODE;
                    return this;
                } else comparand = comparand.right;
            }
            
            else if (value < comparand.value) {
                if (comparand.left === null) {
                    comparand.left = NODE;
                    return this;
                } else comparand = comparand.left;
            }
        }
    }

    _insert(value, comparand = this.root, node = new Node(value)) {
        if (this.root === null) {
            this.root = node;
            return this;
        }

        if (value === comparand.value) {
            console.log("NO DUPLICATES (" + value + ") ALLOWED");
            return this;
        }
        
        if (value > comparand.value) {
            if (comparand.right === null) {
                comparand.right = node;
                return this;
            } else return this._insert(value, comparand.right, node);
        }
        
        else if (value < comparand.value) {
            if (comparand.left === null) {
                comparand.left = node;
                return this;
            } else return this._insert(value, comparand.left, node);
        }
    }

    find(value, node = this.root) {
        // if this.length is 0 return undefined        
        // if value === node.value return value
        // if val is > this.root,
        // if root.right === null, return undefined
        // else: search again with root.right as starting point
        // if val < this.root
        // if root.left === null, return undefined
        // else: search again with root.left as starting point

        if (this.length === 0) return false;

        if (value === node.value) return true;

        if (value > node.value) {
            return node.right === null ? false : this.find(value, node.right);
        }

        if (value < node.value) {
            return node.left === null ? false : this.find(value, node.left);
        }
    }

    breadthFirstSearch() {
        // return an array of all visited node.values
        // if this.length === 0 return undefined
        // start a queue
        // enqueue root
        // iterate (queue.length > 0)
        // let node = dequeue("node")
        // array.push(node.value)
        // if node.left !== null: queue.enqueue(node.left)
        // if node.right !== null: queue.enqueue(node.right)
        // return array

        if (this.length === 0) return undefined;

        const nodeQueue = new Queue();
        const values = [];

        nodeQueue.enqueue(this.root);

        while (nodeQueue.length > 0) {
            const NODE = nodeQueue.dequeue();
            values.push(NODE.value);

            NODE.left !== null && nodeQueue.enqueue(NODE.left);
            NODE.right !== null && nodeQueue.enqueue(NODE.right);
        }

        return values;
    }

    // first attemtpt
    preOrderDFS(values = [], node = this.root, rightNodes = new Stack()) {
        // array, node = root, stack
        // if stack.size === 0 return array
        // array.push(node.value)
        // if right exists, stack.push(right)
        // if left exists, recurse on left, else recurse on stack.pop

        if (this.root === null) return undefined;
        values.push(node.value);
        
        if (node.right !== null) rightNodes.push(node.right);
        if (rightNodes.size === 0 && node.left === null) return values;

        const newNode = node.left !== null ? node.left : rightNodes.pop()
        return this.preOrderDFS(values, newNode, rightNodes);
    }

    // intructor version
    preOrder() {
        const values = [];
        const current = this.root;

        function traverse(node) {
            values.push(node.value);
            if (node.left !== null) traverse(node.left);
            if (node.right !== null) traverse(node.right);
        }

        traverse(current);
        return values;
    }

    // refactored instructor version
    _preOrder(values = [], node = this.root) {
        values.push(node.value);
        if (node.left !== null) this.postOrder(values, node.left);
        if (node.right !== null) this.postOrder(values, node.right);
        return values;
    }

    // refactored instructor version
    postOrder(values = [], node = this.root) {
        if (node.left !== null) this.postOrder(values, node.left);
        if (node.right !== null) this.postOrder(values, node.right);
        values.push(node.value);
        return values;
    }

    inOrder(values = [], node = this.root) {
        if (node.left !== null) this.inOrder(values, node.left);
        values.push(node.value);
        if (node.right !== null) this.inOrder(values, node.right);
        return values;
    }
}

module.exports = BinarySearchTree;