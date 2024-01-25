import { AbstractPromiseTaskDecorator } from "./AbstractPromiseTaskDecorator.js";

export class LoggerDecorator extends AbstractPromiseTaskDecorator {
  constructor(task) {
    super(task);
  }

  execute() {
    return new Promise((resolve, reject) => {
      this._task.execute()
        .then((result) => {
          this.logger.log(`${this._task.name} result: `, result);
          resolve(result);
        })
        .catch((error) => {
          this.logger.error(`${this._task.name} error: `, error);
          reject(error);
        });
    })
  
  }
}