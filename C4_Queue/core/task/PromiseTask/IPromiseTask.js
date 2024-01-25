/**
 * @author samura.chiu
 * @interface IPromiseTask
 * @description Promise Task Interface
 */
export class IPromiseTask {
  /**
   * @abstract
   * @public
   * @function execute
   * @returns {Promise}
   */
  execute() {
    throw new Error('Method not implemented');
  }
}