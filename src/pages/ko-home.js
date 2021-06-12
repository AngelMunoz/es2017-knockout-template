import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input';
import * as ko from 'knockout';
import { TodoViewModel } from '../view-models/todo.vm.js';

const template = //html
  `
  <article class="ko-home">
    <header>
      <h1>Todos</h1>
    </header>
    <section>
      <sl-form data-bind="event: { 'sl-submit': onFormSubmit }">
        <div class="row center">
          <sl-input 
            required
            pill
            name="name"
            type="text"
            size="small"
            label="what's pending?"
            ></sl-input>
        </div>
        <div class="row center">
          <sl-checkbox 
            indeterminate
            name="isDone"
            size="small"
            >Is Done?</sl-checkbox>
        </div>
        <div class="row center">
          <sl-button type="primary" pill submit>Save TODO</sl-button>
        </div>
      </sl-form>
    </section>
    <ul class="todo-list" data-bind="foreach: todos">
      <li data-bind="css: { crossed: isDone }">
        <sl-checkbox data-bind="event:{ 'sl-change': $parent.updateChecked.bind($parent) }, attr: { checked: isDone }"></sl-checkbox>
        <span data-bind="text: name"></span>
        <sl-button type="text" data-bind="click: $parent.deleteTodo.bind($parent)">
          <sl-icon name="trash"></sl-icon>
        </sl-button>
      </li>
    </ul>
  </article>
`;

class KoHome {
  constructor() {
    this.currentTodo = new TodoViewModel('', false);
    this.todos = ko.observableArray([]);
  }

  /**
   * @param {any} _data
   * @param {CustomEvent<{ formData: FormData; formControls: (HTMLElement | SlInput | SlCheckbox)[] }>} event
   */
  onFormSubmit(_data, event) {
    const [
      name,
      /**
       * @type {SlCheckbox}
       */
      isDone
    ] = event?.detail?.formControls;

    this.currentTodo.name =
      /** @type {SlInput} */
      (name).value;
    this.currentTodo.isDone =
      /** @type {SlCheckbox} */
      (isDone).checked;
    this.todos.push(this.currentTodo);
    this.currentTodo = new TodoViewModel('', false);
  }

  /**
   * @param {TodoViewModel} data
   */
  deleteTodo(data) {
    this.todos.remove((/** @type {TodoViewModel} */ item) => item.name === data.name);
  }

  /**
   * @param {TodoViewModel} data
   * @param {CustomEvent<{}>} event
   */
  updateChecked(data, event) {
    data.isDone =
      /** @type {SlCheckbox} */
      (event.target).checked;
  }

}

ko.components.register('ko-home', {
  viewModel: KoHome,
  template
});
