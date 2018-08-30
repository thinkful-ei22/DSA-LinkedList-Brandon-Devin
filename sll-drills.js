'use strict';
const SLL = require('./sll');




function main (){
  const sll = new SLL();

  // Apollo, Boomer, Helo, Husker, Starbuck

  // sll.insertFirst('Apollo');
  // sll.insertFirst('Boomer');
  // sll.insertFirst('Helo');
  // sll.insertFirst('Husker');
  // sll.insertFirst('Starbuck');


  sll.insertLast('Apollo');
  sll.insertLast('Boomer');
  sll.insertLast('Helo');
  sll.insertLast('Husker');
  sll.insertLast('Starbuck');

  display(sll);

  sll.insertLast('tauhida');

  display(sll);

  sll.remove('squirrel');
  
  sll.insertBefore('Athena', 'Boomer');
  display(sll);

  sll.insertAfter('Hotdog', 'Helo');
  display(sll);

  sll.insertAt('Kat', 2);
  display(sll);

  sll.remove('tauhida');
  display(sll);

}

function display (linkedList){
  let curNode = linkedList.head; 

  console.log('Linked List printing: ');

  while (curNode !== null){
    console.log(curNode.value);

    curNode = curNode.next;
  }


}

main();

