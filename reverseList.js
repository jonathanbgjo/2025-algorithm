import ListNode from './classes/listNode.js'
const head = new ListNode(3);
const node2 = new ListNode(2);
const node0 = new ListNode(0);
const node4 = new ListNode(-4);

head.next = node2;
node2.next = node0;
node0.next = node4;
node4.next = null; 
//3->2->0->-4
//-4->0->2->3
// temp = 3
// node.next = null 
// node.next.next (2) -> 3
// node = node.next;
function reverseList(node){
    let prev = null;
    let temp = node;
    while(node != null){
        temp = node.next;
        node.next = prev 
        prev = node;
        node = temp;
    }
    return prev;
}
console.log("reverseList(head)");
console.log(head);
console.log(reverseList(head));