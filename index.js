export function Linkedlist() {
  let list;
  const append = (value) => {
    if (!list) {
      list = Node(value);
      return;
    }
    let temp = list;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    temp.nextNode = Node(value);
  };
  const prepend = (value) => {
    if (!list) {
      list = Node(value);
      return;
    }
    let temp = list;
    list = Node(value, temp);
  };
  const size = () => {
    let n = 0;
    let temp = list;
    while (temp) {
      n++;
      temp = temp.nextNode;
    }
    return n;
  };
  const head = () => {
    return list.value;
  };
  const tail = () => {
    let temp = list;
    while (temp.nextNode) {
      temp = temp.nextNode;
    }
    return temp.value;
  };
  const at = (index) => {
    let temp = list;
    for (let i = 1; i < index; i++) {
      temp = temp.nextNode;
    }
    return temp.value;
  };
  const pop = () => {
    let temp = list;
    while (temp.nextNode.nextNode) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  };
  const contains = (value) => {
    const contains_aux = (value, node) => {
      if (!node.nextNode) return false;
      if (node.value === value) {
        return true;
      } else {
        return contains_aux(value, node.nextNode);
      }
    };
    if (list.value !== value) {
      return contains_aux(value, list.nextNode);
    } else {
      return true;
    }
  };
  const find = (value) => {
    let temp = list;
    for (let i = 1; i <= size(); i++) {
      if (value === temp.value) {
        return i;
      } else {
        temp = temp.nextNode;
      }
    }
    return false;
  };
  const toString = () => {
    let temp = list;
    let printList = [];
    while (temp) {
      printList.push(temp.value);
      temp = temp.nextNode;
    }
    return printList;
  };
  const insertAt = (value, index) => {
    let temp = list;
    for (let i = 1; i < index; i++) {
      temp = temp.nextNode;
    }
    let child = temp.nextNode;
    temp.nextNode = Node(value, child);
  };
  const removeAt = (index) => {
    let temp = list;
    if (index === 1) {
      list = list.nextNode;
    } else {
      let pre = null;
      for (let i = 1; i < index; i++) {
        pre = temp;
        temp = temp.nextNode;
      }
      let child = temp.nextNode;
      pre.nextNode = child;
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

export function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

// const node = Node("123");
// console.log(node);
// node.nextNode = Node("78");
// console.table(node);
