class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function createSampleTree() {
  /*
          50
         /  \
       30    70
      / \    / \
    20  40  60  80
  */
  const root = new Node(50);
  root.left = new Node(30);
  root.right = new Node(70);
  root.left.left = new Node(20);
  root.left.right = new Node(40);
  root.right.left = new Node(60);
  root.right.right = new Node(80);

  return root;
}
const root = createSampleTree();

function searchBST(node, val){
    if(node.value == val){
        return true;
    }
    else if(node.value > val && node.left){
        return searchBST(node.left, val)
    }
    else if(node.value < val && node.right){
        return searchBST(node.right,val)
    }
    else {
        return false;
    }
    
}
console.log(searchBST(root, 50))
console.log(searchBST(root, 0))
console.log(searchBST(root, 100))
console.log(searchBST(root, 500))
console.log(searchBST(root, 40))
console.log(searchBST(root, 60))
console.log(searchBST(root, -1))
console.log(searchBST(root, ""))
