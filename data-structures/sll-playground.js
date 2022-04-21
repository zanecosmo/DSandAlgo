const utils = require("./utils/utils.js");

// Linked List Stuff

const list = new utils.DoublyLinkedList();

list.push(42);
list.push(32);
list.push(22);
list.push(12);

console.log(list.head);