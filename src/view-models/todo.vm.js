import * as ko from 'knockout';
export class TodoViewModel {
  /**
   * @param {string} name
   * @param {boolean} isDone
   */
  constructor(name, isDone) {
    this._name = ko.observable(name);
    this._isDone = ko.observable(isDone);
  }

  get name() {
    return this._name();
  }
  set name(name) {
    this._name(name);
  }

  get isDone() {
    return this._isDone();
  }
  set isDone(isDone) {
    this._isDone(isDone);
  }
}
