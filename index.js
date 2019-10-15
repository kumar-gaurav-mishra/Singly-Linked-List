'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    if (!value) return null;
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let preNode = this.head;
    let head = this.head;
    for (let i = 0; i <= this.length; i++) {
      if (head.next !== null) {
        preNode = head;
        head = preNode.next;
      } else {
        if (!preNode.next) {
          this.head = null;
          this.tail = null;
          this.length = 0;
        } else {
          preNode.next = null;
          this.tail = preNode;
          this.length -= 1;
        }
      }
    }
    return head;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }
  unShift(value) {
    if (!value) return undefined;
    let newHead = new Node(value);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unShift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let preNode = this.get(index - 1);
      let currentNode = preNode.next;
      preNode.next = new Node(value);
      preNode.next.next = currentNode;
      this.length += 1;
    }
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let preNode = this.get(index - 1);
      let removed = preNode.next;
      preNode.next = removed.next;
      this.length -= 1;
      return removed;
    }
  }
  reverse() {
    if (this.length <= 1) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next,
      prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

module.exports = SinglyLinkedList;
