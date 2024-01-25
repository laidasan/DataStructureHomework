import { AbstractPriorityTask } from "./AbstractPriorityTask.js";

export class HistTask extends AbstractPriorityTask {
  constructor({ priority, delay } = {}) {
    super({ priority, delay });
  }

  execute() {
    return Promise.resolve('石頭');
  }
}