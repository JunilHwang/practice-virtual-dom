import h, {createElement} from './core/VirtualDom.js';

const $app = document.querySelector('#app');

const $list = h('ul', {},
    h('li', {}, 'item1'),
    h('li', {}, 'item2'),
    h('li', {}, 'item3'),
  );

$app.appendChild(createElement($list));
