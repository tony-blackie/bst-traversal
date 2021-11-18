class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  value: number;

  constructor(value: number) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  recursiveInsert = (node, value) => {
    if (value < node.value) {
      if (!node.left) {
        node.left = new TreeNode(value);
      } else {
        this.recursiveInsert(node.left, value);
      }

      return;
    }

    if (!node.right) {
      node.right = new TreeNode(value);

      return;
    }

    this.recursiveInsert(node.right, value);
  };

  insert = (value: number) => {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;

      return;
    }

    this.recursiveInsert(this.root, value);
  };

  lookup = (value: number) => {};
  remove = (value: number) => {};
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

const traverse = (node: TreeNode | null) => {
  if (!node) {
    return null;
  }

  const treeObject = {
    value: node.value,
    left: traverse(node.left),
    right: traverse(node.right),
  };

  return treeObject;
};

console.log(JSON.stringify(traverse(tree.root)));
