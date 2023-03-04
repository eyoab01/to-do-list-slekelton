import './style.css';
// arrow todolistect
const todolist = [
  {
    discription: 'js',
    completed: '',
    index: 1,
  },
  {
    discription: 'java',
    completed: '',
    index: 2,
  },
  {
    discription: 'html',
    completed: '',
    index: 3,
  },
];
// display
const list = document.querySelector('.todos');
todolist.forEach((o) => {
  list.innerHTML += `
  <div class = "tree"> <div class = "list">
    <input type="checkbox" id="do1" name="do1" value="list">
    <h2>${o.discription}</h2>
    </div>
    <i class="fa fa-trash fa-2x delete"></i>
    <i class="fa delete1">&#xf142;</i></div>
   
  `;
});