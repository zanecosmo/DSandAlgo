const utils = require("./utils/utils.js");

const BST = new utils.BinarySearchTree();

BST._insert(5);
BST._insert(1);
BST._insert(6);
BST._insert(7);
BST._insert(1);

console.log(BST.root)