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
}

module.exports = BinarySearchTree;