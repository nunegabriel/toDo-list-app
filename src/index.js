import './style.css';
import titleIcon from './img/refresh.png';
import addIcon from './img/add.png';
import todoList from './modules/functions.js';

const check = () => {
  const inputChecks = document.querySelectorAll('.check');
  inputChecks.forEach((check) => {
    check.addEventListener('change', (event) => {
      let todoList = [];
      const arr = [];
      todoList = JSON.parse(localStorage.getItem('todoList') || arr);
      todoList.forEach((todo) => {
        if ((event.target.id === `input${todo.index}`) && (todo.completed === false)) {
          todo.completed = true;
          event.target.checked = true;
          localStorage.setItem('todoList', JSON.stringify(todoList));
        } else if ((event.target.id === `input${todo.index}`) && (todo.completed === true)) {
          todo.completed = false;
          event.target.checked = false;
          localStorage.setItem('todoList', JSON.stringify(todoList));
        }
      });
    });
  });
};

const doInput = document.getElementById('id-input');
const titleSpan = document.getElementById('title-icon');
const addSpan = document.getElementById('add-icon');
const icon1 = new Image();
icon1.src = titleIcon;
icon1.classList.add('reset');
const icon2 = new Image();
icon2.src = addIcon;
titleSpan.appendChild(icon1);
addSpan.appendChild(icon2);
doInput.focus();

todoList.add();
todoList.display();
todoList.remove();
todoList.edit();
todoList.clear();
check();