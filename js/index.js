'use strict';

// document.body.addEventListener('click', clickHandler); // всплытие
// document.body.addEventListener('click', clickHandler, true ); //capturing
// document.body.addEventListener('click', clickHandler, { capture: true }); //capturing

document.body.addEventListener('click', clickHandler);
document
  .querySelector('div')
  .addEventListener('click', clickHandler, { capture: true, once: true });
document.querySelector('button').addEventListener('click', clickHandler);

// target - самый вложенный элемент
// currentTarget - элемент, на котором сработал текущий обработчик
function clickHandler(e) {
  // e.stopPropagation();
  console.log('currentTarget :>> ', e.currentTarget);
}

document.querySelector('div').removeEventListener('click', clickHandler);
