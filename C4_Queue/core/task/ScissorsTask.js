import { AbstractPriorityTask } from "./AbstractPriorityTask.js";

export class ScissorsTask extends AbstractPriorityTask {
  constructor({ priority, delay } = {}) {
    super({ priority, delay });
  }

  execute() {
    return Promise.resolve('剪刀');
  }
}