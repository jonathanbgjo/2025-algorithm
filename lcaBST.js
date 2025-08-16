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
var lowestCommonAncestor = function(node, num, num2) {
    if(!node){
        return -1;
    }
    if(node.val == num.val || node.val == num2.val){
        return node;
    }else if((node.val > num.val && node.val < num2.val) || (node.val < num.val && node.val > num2.val)){
        return node;
    }
    else if(node.val > num.val){
        return lowestCommonAncestor(node.left, num, num2);
    }else{
        return lowestCommonAncestor(node.right, num, num2);
    }
};