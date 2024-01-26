import { IQueueObserver } from "./queue/IQueueObserver.js";
import { QueueActions } from "./queue/QueueActions.js";

/**
 * @class Game
 * @public
 * @classdesc
 */
export class Game extends IQueueObserver {
  viewContainer = null;
  _taskQueue = null
  _isRunningQueue = false
  _isStarted = false;
  _isExecutingTask = false;

  /**
   * @constructor
   * @param {Object} payload
   * @param {PriorityQueue} taskQueues [PriorityQueue]{@link core.queue.PriorityQueue}
   * @param {HTMLElement} viewContainer
   */
  constructor(taskQueues, viewContainer) {
    super()
    this._taskQueue = taskQueues;
    this.viewContainer = viewContainer;
  }

  get taskQueue() {
    return this._taskQueue;
  }

  set taskQueue(taskQueue) {
    this._taskQueue = taskQueue;
  }

  get isStarted() {
    return this._isStarted;
  }

  /**
   * @function appendTask
   * @public
   * @param {AbstractPriorityTask} task [AbstractPriorityTask]{@link core.task.AbstractPriorityTask} 
   * @returns {undefined}
   */
  appendTask(task) {
    this._taskQueue.enqueue(task);
  }

  /**
   * @public
   * @function start
   * @description start the game
   */
  start() {
    console.log('start')
    this._isStarted = true;
    this._isRunningQueue = true;
    this._runQueue()
  }

  /**
   * @public
   * @function stop
   * @description stop the game
   */
  stop() {
    this._isStarted = false;
    this._isRunningQueue = false;
  }

  /**
   * @private
   * @function _runQueue
   * @description run the queue
   */
  _runQueue() {
    if (
      !this._taskQueue.isEmpty() &&
      !this._isExecutingTask &&
      this._isRunningQueue
    ) {
      const task = this._taskQueue.dequeue();

      this._executeTask(task);
    }
  }

  /**
   * @private
   * @function _executeTask
   * @param {AbstractPriorityTask} task [AbstractPriorityTask]{@link core.task.AbstractPriorityTask}
   */
  _executeTask(task) {
    this._isExecutingTask = true;

    if (task.delay > 0) {
      setTimeout(function () {
        task.execute()
          .finally(function () {
            this._isExecutingTask = false;
            this._runQueue()
          }.bind(this))
      }.bind(this), task.delay)
    } else {
      task.execute()
        .finally(function () {
          this._isExecutingTask = false;
          this._runQueue()
        }.bind(this))
    }
  }

  /**
   * @public
   * @function renderView
   * @description render the view
   */
  renderView() {
    this.viewContainer.innerHTML = '';
    this._taskQueue.forEach(function (task) {
      const div = document.createElement('div');
      div.className = 'task';
      div.innerHTML = `${task.name}: ${task.priority}、${task.delay}`
      this.viewContainer.appendChild(div)
    }.bind(this))
  }

  /**
   * @argument IQueueObserver.onQueueUpdated
   * @public
   * @function onQueueUpdated
   * @param {IQueue} queue
   * @param {QueueActions} action [QueueActions]{@link core.queue.QueueActions}
   */
  onQueueUpdated(queue, action) {
    this.renderView();
    if (action === QueueActions.Enqueue) {
      this._runQueue()
    }
  }
}