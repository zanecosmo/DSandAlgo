const utils = require("./utils/utils.js");

const list = new utils.SinglyLinkedList();
console.log(list.push(42));
console.log(list.push(32));
console.log(list.push(22));
console.log(list.push(12));
console.log(list.push(2));
console.log(list.head)
console.log("=====")
console.log(list.tail);
list.____pop();
list.____pop();
list.____pop();
list.____pop();
const lastNode = list.____pop();
console.log(list);
console.log(lastNode);
