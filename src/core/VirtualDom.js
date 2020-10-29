export const createVirtualDOM = (type, props, ...children) => {
  return { type, props, children }
};

export const createElement = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const $el = document.createElement(node.type);
  const appendChild = (el) => $el.appendChild(el);
  node.children.map(createElement).forEach(appendChild);
  return $el;
}

export const changed = (node1, node2) => {
  return (typeof node1 !== typeof node2) ||
    (typeof node1 === 'string' && node1 !== node2) ||
    node1.type !== node2.type
}

export const updateElement = ($parent, newNode, oldNode, index = 0) => {
  if (!oldNode) {
    return $parent.appendChild(createElement(newNode));
  }
  if (!newNode) {
    return $parent.removeChild($parent.childNodes[index]);
  }
  if (changed(newNode, oldNode)) {
    return $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
  }
  if (newNode.type) {
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
    }
  }
}

export default createVirtualDOM;