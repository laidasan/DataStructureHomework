/**
 * @interface IQueue
 * @description
 */
export class IQueue {
  /**
   * @abstract
   * @function enqueue
   * @param {*} item
   * @description Add an item to the queue
   * @returns {undefined}
   */
  enqueue(item) {
    throw new Error('Method not implemented.');
  }

  /**
   * @abstract
   * @function dequeue
   * @description remove and return the first item in the queue
   * @returns {*}
   */
  dequeue() {
    throw new Error('Method not implemented.');
  }

  /**
   * @abstract
   * @function size
   * @returns {number}
   */
  size() {
    throw new Error('Method not implemented.');
  }

  /**
   * @abstract
   * @function isEmpty
   * @returns {boolean}
   */
  isEmpty() {
    throw new Error('Method not implemented.');
  }

  /**
   * @abstract
   * @function front
   * @description return the first item in the queue
   * @returns {*}
   */
  front() {
    throw new Error('Method not implemented.');
  }

  /**
   * @abstract
   * @function clear
   * @description remove all items from the queue
   * @returns {undefined}
   */
  clear() {
    throw new Error('Method not implemented.');
  }

  /**
   * @abstract
   * @function forEach
   * @param {Function} callback
   */
  forEach(callback) {
    throw new Error('Method not implemented.');
  }
}