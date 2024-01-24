import { IQueue } from './IQueue.js';

const { isEmpty, head, tail, length } = window.R


/**
 * @implements {IQueue}
 * @class Queue
 * @public
 * @classdesc
 * @description
 */
export class Queue extends IQueue {
  items = []

  /**
   * @constructor
   * @param {Array<*>} [items]
   * @description
   */
  constructor(items) {
    super();
    this.items = items || [];
  }

  /**
   * @argument IQueue.enqueue 
   * @function enqueue
   * @param {*} item
   * @description Add an item to the queue
   * @returns {undefined}
   */
  enqueue(item) {
    this.items = [...this.items, item];
  }

  /**
   * @argument IQueue.dequeue
   * @function dequeue
   * @description remove and return the first item in the queue
   * @returns {*}
   */
  dequeue() {
    const element = head(this.items);
    
    this.items = tail(this.items);
    return element;
  }

  /**
   * @argument IQueue.size
   * @function size
   * @returns {number}
   */
  size() {
    return length(this.items);
  }

  /**
   * @argument IQueue.isEmpty
   * @function isEmpty
   * @returns {boolean}
   */
  isEmpty() {
    return isEmpty(this.items);
  }

  /**
   * @argument IQueue.front
   * @function front
   * @description return the first item in the queue
   * @returns {*}
   */
  front() {
    return head(this.items);
  }
}