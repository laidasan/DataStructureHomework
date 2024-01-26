import { AbstractPriorityTask } from "./AbstractPriorityTask.js";

export class HistTask extends AbstractPriorityTask {
  constructor({ name, priority, delay } = {}) {
    super({ name, priority, delay });
    this._name = name || 'HistTask';
  }

  execute() {
    return Promise.resolve('石頭');
  }
}