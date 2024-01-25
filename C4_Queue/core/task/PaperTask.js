import { AbstractPriorityTask } from "./AbstractPriorityTask.js";

export class PaperTask extends AbstractPriorityTask {
  constructor({ priority, delay } = {}) {
    super({ priority, delay });
  }

  execute() {
    return Promise.resolve('布');
  }
}