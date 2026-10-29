class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//all console logs need to demonstrate the binary search tree structure

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new value into the binary search tree
  insert(value) {
    const newNode = new node(value);

    if (!this.root) {
      console.log("newnode", newNode);
      this.root = newNode;
      //the reason we return here is to stop the insertion process once the root is set
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          console.log("current.left", current.left);
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          console.log("current.right", current.right);
          return this;
        }
        current = current.right;
      } else {
        return null; // Value already exists
      }
    }
  }

  // Check if a value exists in the binary search tree
  contains(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Remove a value from the binary search tree
  remove(value) {
    this.root = this._removeNode(this.root, value);
    return this;
  }
  // Helper function to remove a node from the binary search tree
  _removeNode(node, value) {
    if (!node) return null;
    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      let temp = node.right;
      while (temp.left) {
        temp = temp.left;
      }
      node.value = temp.value;
      node.right = this._removeNode(node.right, temp.value);
      return node;
    }
  }

  // Perform an in-order traversal of the binary search tree
  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.value);
      this.inOrderTraversal(node.right, result);
    }
    return result;
  }

  // Perform a pre-order traversal of the binary search tree
  preOrderTraversal(node = this.root, result = []) {
    if (node) {
      result.push(node.value);
      this.preOrderTraversal(node.left, result);
      this.preOrderTraversal(node.right, result);
    }
    return result;
  }

  // Perform a post-order traversal of the binary search tree
  postOrderTraversal(node = this.root, result = []) {
    if (node) {
      this.postOrderTraversal(node.left, result);
      this.postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Calculate the height of the binary search tree
  height(node = this.root) {
    if (!node) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(15);
bst.insert(20);
