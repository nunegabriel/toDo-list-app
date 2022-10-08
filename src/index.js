import './style.css';
import refreshIcon from './img/refreshIcon.png';

const todoList = [{
  description: 'Lorem met',
  bool: 'false',
  index: '1',
},

{
  description: 'Lorem met',
  bool: 'false',
  index: '2',
}];

const displayTodo = () => {
  const heading = document.querySelector('.heading');
  heading.innerHTML = ` <div class="title">
  <h1>Today's Todo</h1>
</div>
<div class="refresh">
<img class = "icon" src="${refreshIcon}" alt="reload">;
</div>`;

  const mainArea = document.querySelector('.main-area');

  mainArea.innerHTML = `<div>
<input type="text" id="add-book" value="" placeholder="Add to your todo list...">
</div>
<div class="add">
+
</div>`;

  const todoContainer = document.querySelector('.list');

  todoList.forEach((task) => {
    const taskList = document.createElement('div');
    taskList.className = 'task';
    taskList.id = 'task';
    taskList.innerHTML = `<input type="checkbox" class="check">
  <div class="items">
  ${task.description}
</div>
<div class="dash">
  -
</div> `;
    todoContainer.appendChild(taskList);
  });
};

displayTodo();