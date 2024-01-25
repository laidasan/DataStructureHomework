import { IPromiseTask } from "./PromiseTask/IPromiseTask.js";
import { NORMAL_PRIORITY } from "../constant/constant.js";

const { defaultTo } = window.R

export class AbstractPriorityTask extends IPromiseTask {
  _name = ''
  _delay = 0;
  _priority = NORMAL_PRIORITY;
  
  constructor({ name, priority, delay } = {}) {
    super();
    this._name = defaultTo('')(name);
    this._priority = defaultTo(NORMAL_PRIORITY)(priority);
    this._delay = defaultTo(0)(delay)
  }

  /**
   * @returns {string}
   */
  get name() {
    return this._name;
  }


  /**
   * @param {string} name
   */
  set name(name) {
    this._name = name;
  }

  /**
   * @returns {number}
   */
  get priority() {
    return this._priority;
  }

  /** 
   * @param {number} priority
   */
  set priority(priority) {
    this._priority = priority;
  }

  /**
   * @returns {number}
   */
  get delay() {
    return this._delay;
  }

  /**
   * @param {number} delay
   */
  set delay(delay) {
    this._delay = delay;
  }
}