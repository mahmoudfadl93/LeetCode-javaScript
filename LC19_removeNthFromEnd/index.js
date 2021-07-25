function removeNthFromEnd(head, n) {
  //   let dummyHead = { next: head };
  //   let slow = dummyHead;
  //   let fast  = dummyHead;

  //   //Move Fast N nodes ahead of slow
  //   for (let i = 0; i <= n ; i++) {
  //       fast  = fast.next;
  //   }

  //   //Move slow and fast up one node at a time  untill fast is last node
  //   while (fast.next) {
  //       slow = slow.next;
  //       fast = fast.next;

  //   }

  //   slow.next = slow.next.next

  //   return dummyHead.next;

  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) (fast = fast.next), (slow = slow.next);
  slow.next = slow.next.next;
  return head;
}

module.exports = removeNthFromEnd;
