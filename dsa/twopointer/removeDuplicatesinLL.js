var deleteDuplicates = function (head) {
  let current = head;
  let prev = null;
  while (current) {
    if (prev && prev.val == current.val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
};
