import { AbstractPriorityTask } from "./AbstractPriorityTask.js";

export class PaperTask extends AbstractPriorityTask {
  constructor({ name, priority, delay } = {}) {
    super({ name, priority, delay });
    this._name = name || 'PaperTask';
  }

  execute() {
    return Promise.resolve('布');
  }
}