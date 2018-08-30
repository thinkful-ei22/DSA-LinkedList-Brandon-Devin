class _SllNode {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class SingleLinkedList{
  constructor(){
    this.head = null;
  }

  insertFirst(value){
    if(this.head === null)
      this.head = new _SllNode(value, null);
    else{
      const newNode = new _SllNode(value, this.head);
      this.head = newNode;
    }
  }

  insertLast(value){
    if(this.head === null)
      this.head = new _SllNode(value, null);
    else{
      let curNode = this.head;
      while(curNode.next !== null){
        curNode = curNode.next;
      }
      curNode.next = new _SllNode(value, null);
    }
  }

  remove(value){
    let curNode = this.head;
    let prevNode;

    while(curNode.value !== value && curNode !== null){
      prevNode = curNode;
      curNode = curNode.next;
    }

    if(curNode === null){
      console.log('Linked list: Could not find val to delete');
      return -1;
    }else{
      prevNode = curNode.next;
      //TODO: free old node? maybe
      return 1;
    }
  }

  find(value){
    let curNode = this.head;

    while(curNode.value !== value && curNode !== null){
      curNode = curNode.next;
    }

    if(curNode === null)
      return null;
    else
      return curNode;
  }
}