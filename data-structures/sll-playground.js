const utils = require("./utils/utils.js");

// Linked List Stuff

const list = new utils.SinglyLinkedList();
// list.push(42);
// list.push(32);
// list.push(22);
// list.push(12);
// list.push(2);
// console.log(list.head)
// console.log("=====")
// console.log(list.tail);
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// const lastNode = list.pop();
// console.log(list);
// console.log(lastNode);

// list.push("fartbutt");
// list.push("hello kitty");
// list.push("bo' ow ow wo'ah");
// list.push("thank you god");

// list.unshift("something");
// list.unshift("buddha");

// console.log(list)
// console.log((list.shift()).toUpperCase());

// console.log(list.get(0));
// console.log(list.get(3));
// list.set(3, "EVILDOER");
// console.log(list.get(3));

// console.log(list._insert(0, "ONE"));
// console.log(list.length);
// console.log(list.head);
// list._insert(0, "TWO");
// console.log(list.length);
// console.log(list.head);
// list._insert(1, "THREE");
// console.log(list.length);
// console.log(list.head);
// console.log(list._insert(0, "FOUR"));
// console.log(list.head);

// console.log(list._insert(-1, "FOUR"));


// console.log(list.remove(3));
// console.log(list.remove(1));
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list._reverse();

const logInOrder = (node) => {
    console.log(node.value);
    if (node.next === null) return;
    logInOrder(node.next);
}

logInOrder(list.head);
console.log(list.head);
console.log(list.tail);