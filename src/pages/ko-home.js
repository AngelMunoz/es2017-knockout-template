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
          <sl-button submit>Save TODO</sl-button>
        </div>
      </sl-form>
    </section>
    <ul data-bind="foreach: todos">
      <li>
        <span data-bind="text: name"></span>
        <span data-bind="text: isDone"></span>
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

  onFormSubmit(data, event) {
    const [name, isDone] = event?.detail?.formControls;
    this.currentTodo.name = name.value;
    this.currentTodo.isDone = isDone.checked;
    this.todos.push(this.currentTodo);
    this.currentTodo = new TodoViewModel('', false);
  }

  deleteTodo(data, event) {
    console.log(data, event);
    this.todos.remove(item => item.name === data.name);
  }
}

ko.components.register('ko-home', {
  viewModel: KoHome,
  template
});
