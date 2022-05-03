const utils = require("./utils/utils.js");

const priorityQueue = new utils.PriorityQueue();

priorityQueue.enqueue("fart", 7);
priorityQueue.enqueue("poop", 6);
priorityQueue.enqueue("bleeding", 2);
priorityQueue.enqueue("disemboweled", 0);
priorityQueue.enqueue("punched in the face", 2);
priorityQueue.enqueue("splinter", 3);
priorityQueue.enqueue("clipped your fingernails too short", 7);
priorityQueue.enqueue("stubbed toe", 4);
priorityQueue.enqueue("punched in the balls", -4);

console.log(priorityQueue.values);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
