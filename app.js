let btn = document.querySelector('.btn');
let ul = document.querySelector('ul.list');

function addToDo() {
  let li = document.createElement('li');
  let input = document.querySelector('input');

  li.innerText = input.value;
  ul.appendChild(li);
  input.value = '';
}

function removeItem() {
  let listItems = ul.children;
  for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', (item) => {
      item.target.style.textDecoration = 'line-through';
      setTimeout(() => {
        item.target.remove();
      }, 1000);
      console.log('List Item to remove: ', item.target);
    });
  }
}

btn.addEventListener('click', addToDo);
ul.addEventListener('mouseenter', removeItem);
