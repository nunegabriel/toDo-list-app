import removeIcon from '../img/remove.png';

const icon3 = new Image();
icon3.src = removeIcon;
const todoList = [];

export default class Todo {
  constructor(todo) {
    this.index = todoList.length + 1;
    this.description = todo;
    this.id = Date.now().toString();
    this.completed = false;
  }

    static display = () => {
      const todoItems = document.getElementById('id-list');
      const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
      let inputCheck = '';
      todoItems.innerHTML = '';
      todoList.forEach((task) => {
        if (task.completed === false) {
          inputCheck = '';
        } else {
          inputCheck = 'checked';
        }
        todoItems.innerHTML += `
          <li>
            <span class="item-info">
              <input ${inputCheck} type="checkbox" class="check" id="input${task.index}">
              <input id="${task.index}" class="task-item" value="${task.description}">
            </span>
            <span id="item-icon">
              <img src="${icon3.src}" class="remove" id="${task.id}" alt="Remove Task" title="Remove Task">
            </span>
          </li>
          `;
      });
    }

    static add = () => {
      const alert = document.querySelector('.notice');
      let arr; let
        todoList = [];
      const inputForm = document.querySelector('#form-data');
      const doInput = document.querySelector('#id-input');
      inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        todoList = JSON.parse(localStorage.getItem('todoList') || arr);
        if (doInput.value !== '') {
          const todoItem = new Todo(doInput.value);
          todoList.push(todoItem);
          todoList.forEach((todo, i) => {
            todo.index = i + 1;
          });
          localStorage.setItem('todoList', JSON.stringify(todoList));
          doInput.value = '';
          window.location.reload();
        } else {
          alert.style.display = 'flex';
          alert.innerText = 'Invalid input';
        }
      });
    }

    static remove = () => {
      const removeIcon = document.querySelectorAll('.remove');
      const arr = [];
      removeIcon.forEach((icon) => {
        icon.addEventListener('click', (event) => {
          let todoList = JSON.parse(localStorage.getItem('todoList') || arr);
          todoList = todoList.filter((todo) => todo.id !== event.target.id);
          todoList.forEach((todo, i) => {
            todo.index = i + 1;
          });
          localStorage.setItem('todoList', JSON.stringify(todoList));
          window.location.reload();
        });
      });
    }

    static clear() {
      const arr = [];
      const clearButton = document.querySelector('#clear');
      clearButton.addEventListener('click', () => {
        let todoList = JSON.parse(localStorage.getItem('todoList') || arr);
        todoList = todoList.filter((task) => task.completed === false);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        window.location.reload();
      });
    }

    static edit = () => {
      const taskItems = document.querySelectorAll('.task-item');
      taskItems.forEach((element) => {
        const eventClick = () => {
          element.setAttribute('contenteditable', 'true');
        };
        const eventFocus = () => {
          const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
          element.style.background = 'none';
          todoList.forEach((task) => {
            if (task.index.toString() === element.id) {
              task.description = element.value;
              localStorage.setItem('todoList', JSON.stringify(todoList));
            }
          });
        };
        element.addEventListener('click', eventClick);
        element.addEventListener('focusout', eventFocus);
      });
    }
}