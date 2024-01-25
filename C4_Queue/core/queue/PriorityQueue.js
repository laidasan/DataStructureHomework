import { IQueue } from './IQueue.js';
import { QueueActions } from './QueueActions.js';

const { isNil, isEmpty, head, tail, insert, length, empty } = window.R


/**
 * @implements {IQueue}
 * @class Queue
 * @public
 * @classdesc
 * @description
 */
export class PriorityQueue extends IQueue {
  items = []
  observer = null

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
   * @public
   * @function findTaskPriorityIndex
   * @param {*} item
   * @returns {number} index
   */
  findTaskPriorityIndex(item) {
    let index = 0;
    const priority = item.priority;

    while (index < length(this.items) && priority >= this.items[index].priority) {
      index++;
    }
  
    
    return index;
  }

  /**
   * @argument IQueue.enqueue 
   * @function enqueue
   * @param {*} item
   * @description add has priority item to the queue
   * @returns {undefined}
   */
  enqueue(item) {
    const insertIndex = this.findTaskPriorityIndex(item);
    
    this.items = insert(insertIndex, item, this.items);
    this.notify(QueueActions.Enqueue)
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
    this.notify(QueueActions.Dequeue)

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

  /**
   * @augment IQueue.clear
   * @function clear
   * @description remove all items from the queue
   * @returns {undefined}
   */
  clear() {
    this.items = empty(this.items);
    this.notify(QueueActions.Clear)
  }

  /**
   * @public
   * @function registerObserver
   * @param {IQueueObserver} observer
   */
  registerObserver(observer) {
    this.observer = observer
  }

  /**
   * @public
   * @function unRegisterObserver
   */
  unRegisterObserver() {
    this.observer = null
  }

  /**
   * @public
   * @param {QueueActions} action [QueueActions]{@link core.queue.QueueActions}
   * @function notify notify the observer that the queue has been updated
   */
  notify(action) {
    if(!isNil(this.observer)) {
      this.observer.onQueueUpdated(this, action)
    }
  }
}