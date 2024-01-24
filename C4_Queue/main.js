import { Queue } from "./core/queue/Queue.js";

const testQueue = new Queue()

testQueue.enqueue(1)
console.log(testQueue.isEmpty())
console.log(testQueue.size())
console.log('testQueue.front()', testQueue.front())
console.log('testQueue.dequeue()', testQueue.dequeue())
testQueue.isEmpty()
testQueue.size()
console.log('testQueue.front()', testQueue.front())