import ListNode from './classes/listNode.js'
const headTrue = new ListNode(3);
const node2 = new ListNode(2);
const node0 = new ListNode(0);
const node4 = new ListNode(-4);

headTrue.next = node2;
node2.next = node0;
node0.next = node4;
node4.next = node2; // cycle here

const headFalse = new ListNode(1);
const nodeB = new ListNode(2);
const nodeC = new ListNode(3);

headFalse.next = nodeB;
nodeB.next = nodeC;
nodeC.next = null; // no cycle

function isCycle(head) {
  runner = head;
  if (head.next) {
    if (head.next.next) {
      runner2 = head.next.next;
    }
  }
  while (runner2) {
    if (runner.val == runner2.val) {
      return true;
    }
    runner = runner.next;
    if (runner2.next) {
      if (runner2.next.next) {
        runner2 = runner2.next.next;
      }else{
        return false;
      }
    }
    else{
        return false;
    }
  }

  return false;
}
console.log(isCycle(headTrue));
console.log(isCycle(headFalse));


const cycle1 = new ListNode(3);
const c1n2 = new ListNode(2);
const c1n0 = new ListNode(0);
const c1n4 = new ListNode(-4);

cycle1.next = c1n2;
c1n2.next = c1n0;
c1n0.next = c1n4;
c1n4.next = c1n2; // cycle starts at node 2

const cycle2 = new ListNode(1);
const cycle2n2 = new ListNode(2);

cycle2.next = cycle2n2;
cycle2n2.next = cycle2; // cycle back to head

const cycle3 = new ListNode(1);
cycle3.next = cycle3; // self-loop

const noCycle1 = new ListNode(1);
const nc1n2 = new ListNode(2);
const nc1n3 = new ListNode(3);

noCycle1.next = nc1n2;
nc1n2.next = nc1n3;

const noCycle2 = new ListNode(1);

console.log(isCycle(cycle1));
console.log(isCycle(cycle2));
console.log(isCycle(cycle3));
console.log(isCycle(noCycle1));
console.log(isCycle(noCycle2));