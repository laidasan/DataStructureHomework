import { IPromiseTask } from "./IPromiseTask.js";

export class AbstractPromiseTaskDecorator extends IPromiseTask {
  _task = null;
  _logger = null;

  constructor({ task, logger } = {}) {
    super();
    this._task = task;
    this._logger = logger;
  }

  /**
   * @return {IPromiseTask}
   */
  get task() {
    return this._task;
  }

  /**
   * @param {IPromiseTask} task
   */
  set task(task) {
    this._task = task;
  }

  get logger() {
    return this._logger;
  }

  set logger(logger) {
    this._logger = logger;
  }

  get name() {
    return this._task.name;
  }

  set name(name) {
    this._task.name = name;
  }

  get priority() {
    return this._task.priority;
  }

  set priority(priority) {
    this._task.priority = priority;
  }

  get delay() {
    return this._task.delay;
  }

  set delay(delay) {
    this._task.delay = delay;
  }
}