// Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

var deleteDuplicates = function (head) {
  let current = head;
  while (current && current.next) {
    if (current.value == current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};


