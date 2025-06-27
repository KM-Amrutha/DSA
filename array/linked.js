class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return null;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    node.next = curr.next;
    curr.next = node;
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("no index found");
      return null;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      removedNode = curr.next;
      curr.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeByValue(value) {
    if (this.isEmpty()) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let curr = this.head;
    while (curr.next && curr.next.value !== value) {
      curr = curr.next;
    }

    if (curr.next) {
      curr.next = curr.next.next;
      this.size--;
      return value;
    }

    return null;
  }

  removeMiddle() {
    if (!this.head || !this.head.next) {
      this.head = null;
      this.size = 0;
      return;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }

    prev.next = slow.next;
    this.size--;
  }

  search(value) {
    if (this.isEmpty()) return -1;

    let curr = this.head;
    let index = 0;

    while (curr) {
      if (curr.value === value) return index;
      curr = curr.next;
      index++;
    }

    return -1;
  }

  removeDuplicates() {
    if (this.isEmpty()) return;

    let curr = this.head;

    while (curr && curr.next) {
      if (curr.value === curr.next.value) {
        curr.next = curr.next.next;
        this.size--;
      } else {
        curr = curr.next;
      }
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let curr = this.head;
    let result = "";

    while (curr) {
      result += `${curr.value} `;
      curr = curr.next;
    }

    console.log("Linked List:", result.trim());
  }
}
