const { NotImplementedError, ListNode } = require('../extensions/index.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.rear === null) {
      // The queue is empty
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.front === null) {
      // The queue is empty
      return null;
    }

    const removedValue = this.front.value;
    this.front = this.front.next;

    if (this.front === null) {
      // The queue is now empty
      this.rear = null;
    }

    return removedValue;
  }
}

module.exports = {
  Queue
};
