'use strict';
const DLL = require('./dll');

function main (){
  const dll = new DLL();
  // Aquaria, Caprica, Gemenon, Picon, Sagittaron

  // dll.insertFirst('Aquaria');
  // dll.insertFirst('Caprica');
  // dll.insertFirst('Gemenon');
  // dll.insertFirst('Picon');
  // dll.insertFirst('Sagittaron');
  // display(dll);


  dll.insertLast('Aquaria');
  dll.insertLast('Caprica');
  dll.insertLast('Gemenon');
  dll.insertLast('Picon');
  dll.insertLast('Sagittaron');
  // display(dll);


  // dll.insertBefore('Tauron', 'Gemenon');
  // display(dll);

  // dll.remove('Picon');
  // display(dll);

  reverseList(dll);
  display(dll);
}

function display (linkedList){
  let curNode = linkedList.head; 
  
  console.log('Linked List printing: ');
  
  while (curNode !== null){
    console.log(curNode.value);
  
    curNode = curNode.next;
  }
}
  

function reverseList(linkedList){
  let curNode = linkedList.head;
  let nextNode;
  
  if (curNode === null){
    return curNode;
  }

  while (curNode.next !== null){
    nextNode = curNode.next;
    curNode.next = curNode.prev;
    curNode.prev = nextNode;
    curNode = nextNode;
  }
  linkedList.head = curNode;
  curNode.next = curNode.prev;
  curNode.prev = null;

  return linkedList;
}

main();


