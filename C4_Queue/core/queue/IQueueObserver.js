/**
 * @interface
 * @public
 * @description Queue Watcher Interface
 */
export class IQueueObserver {
  /**
   * @abstract
   * @public
   * @function onQueueUpdated
   * @param {IQueue} queue
   * @param {QueueActions} QueueActions [QueueActions]{@link core.queue.QueueActions}
   * @returns {undefined}
   */
  onQueueUpdated(queue) {
    throw new Error('Method not implemented');
  }
}