import h, {createElement, updateElement} from './core/VirtualDom.js';

const $app = document.querySelector('#app');

const $list = h('ul', null,
    h('li', null, 'item1'),
    h('li', null, 'hello'),
  );

const $changedList = h('ul', null,
  h('li', null, 'item1'),
  h('li', null, 'item2'),
);

const $reload = createElement(h('button', { id: 'reload' }, 'reload'));
document.body.appendChild($reload);
updateElement($app, $list);
$reload.addEventListener('click', e => {
  updateElement($app, $changedList, $list);
})