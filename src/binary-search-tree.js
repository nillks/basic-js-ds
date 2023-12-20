const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._addNode(this.rootNode, data);
  }

  _addNode(root, data) {
    if (root === null) {
      return new Node(data);
    }

    if (data < root.data) {
      root.left = this._addNode(root.left, data);
    } else if (data > root.data) {
      root.right = this._addNode(root.right, data);
    }

    return root;
  }

  has(data) {
    return this._hasNode(this.rootNode, data);
  }

  _hasNode(root, data) {
    if (root === null) {
      return false;
    }

    if (data === root.data) {
      return true;
    } else if (data < root.data) {
      return this._hasNode(root.left, data);
    } else {
      return this._hasNode(root.right, data);
    }
  }

  find(data) {
    return this._findNode(this.rootNode, data);
  }

  _findNode(root, data) {
    if (root === null || root.data === data) {
      return root;
    }

    if (data < root.data) {
      return this._findNode(root.left, data);
    } else {
      return this._findNode(root.right, data);
    }
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(root, data) {
    if (root === null) {
      return null;
    }

    if (data < root.data) {
      root.left = this._removeNode(root.left, data);
    } else if (data > root.data) {
      root.right = this._removeNode(root.right, data);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.data = this._minValueNode(root.right);
      root.right = this._removeNode(root.right, root.data);
    }

    return root;
  }

  _minValueNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  min() {
    return this._minValue(this.rootNode);
  }

  _minValue(node) {
    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    return this._maxValue(this.rootNode);
  }

  _maxValue(node) {
    if (node === null) {
      return null;
    }

    while (node.right !== null) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};