import { AbstractPriorityTask } from "./AbstractPriorityTask.js";

export class ScissorsTask extends AbstractPriorityTask {
  constructor({ name, priority, delay } = {}) {
    super({ name, priority, delay });
    this._name = name || 'ScissorsTask';
  }

  execute() {
    return Promise.resolve('剪刀');
  }
}