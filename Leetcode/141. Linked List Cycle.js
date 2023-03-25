var hasCycle = function(head) {
  fastPointer = head;
  slowPointer = head;
  while(fastPointer !== null && fastPointer.next !== null){
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;

      if(fastPointer === slowPointer){
          return true;
      }
  }
  return false;
};