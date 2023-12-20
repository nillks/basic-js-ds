const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    // Initialize an empty array to store stack elements
    this.items = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return null; // Return null for an empty stack
    }
    return this.items.pop();
  }

  // Return the element from the top of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return null; // Return null for an empty stack
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }
}

module.exports = {
  Stack
};
